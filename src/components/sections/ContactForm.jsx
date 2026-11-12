import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useSearchParams } from 'react-router-dom'
import Icon from '../ui/Icon.jsx'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import { PROGRAMS } from '../../data/programs.js'
import { CONTACT } from '../../data/site.js'
import './contact.css'

const PROFILES = ['Setor público', 'Empresa', 'Operadora ou corretora', 'White Label', 'Franquia ou novo negócio', 'Outro']
const EXTRA = ['Plataforma própria', 'Integrações']
const ENDPOINT = import.meta.env.VITE_CONTACT_ENDPOINT

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export default function ContactForm() {
  const [params] = useSearchParams()
  const preset = useMemo(() => {
    const slugs = (params.get('programas') || '').split(',').filter(Boolean)
    return PROGRAMS.filter((p) => slugs.includes(p.slug)).map((p) => p.short)
  }, [params])

  const [data, setData] = useState({ nome: '', email: '', telefone: '', empresa: '', mensagem: '' })
  const [profile, setProfile] = useState('')
  const [interests, setInterests] = useState(preset)
  const [consent, setConsent] = useState(false)
  const [errors, setErrors] = useState({})
  const [state, setState] = useState('idle') // idle | sending | done | mail | error

  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }))
  const toggle = (v) => setInterests((l) => (l.includes(v) ? l.filter((x) => x !== v) : [...l, v]))

  const validate = () => {
    const e = {}
    if (data.nome.trim().length < 2) e.nome = 'Informe seu nome.'
    if (!emailOk(data.email)) e.email = 'Informe um e-mail válido.'
    if (!consent) e.consent = 'É preciso concordar para enviarmos o contato.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    const payload = { ...data, perfil: profile, interesses: interests, consentimento: true }
    if (ENDPOINT) {
      setState('sending')
      try {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        })
        setState(res.ok ? 'done' : 'error')
      } catch {
        setState('error')
      }
      return
    }
    // Sem endpoint configurado: abre o e-mail do usuário com a mensagem preenchida.
    const body = [
      `Nome: ${data.nome}`,
      `E-mail: ${data.email}`,
      data.telefone && `Telefone: ${data.telefone}`,
      data.empresa && `Empresa ou instituição: ${data.empresa}`,
      profile && `Perfil: ${profile}`,
      interests.length && `Interesses: ${interests.join(', ')}`,
      '',
      data.mensagem,
    ]
      .filter((l) => l !== '' && l !== false && l !== 0)
      .join('\n')
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('Contato pelo site · ' + data.nome)}&body=${encodeURIComponent(body)}`
    setState('mail')
  }

  if (state === 'done' || state === 'mail') {
    return (
      <div className="cform cform--done" role="status">
        <PetalSymbol variant="positive" intro className="cform__done-symbol" />
        <h2 className="h-2">{state === 'done' ? 'Mensagem enviada.' : 'Quase lá.'}</h2>
        <p className="lead">
          {state === 'done'
            ? 'Recebemos o seu contato. Um consultor vai falar com você para entender a sua operação.'
            : `Abrimos o seu aplicativo de e-mail com a mensagem preenchida. Basta enviá-la para ${CONTACT.email}.`}
        </p>
      </div>
    )
  }

  const field = (k, label, props = {}) => (
    <div className={`fld ${errors[k] ? 'has-err' : ''}`}>
      <input
        id={`f-${k}`}
        value={data[k]}
        onChange={set(k)}
        placeholder=" "
        aria-invalid={!!errors[k]}
        aria-describedby={errors[k] ? `e-${k}` : undefined}
        {...props}
      />
      <label htmlFor={`f-${k}`}>{label}</label>
      {errors[k] && (
        <span className="fld__err" id={`e-${k}`} role="alert">
          {errors[k]}
        </span>
      )}
    </div>
  )

  return (
    <form className="cform" onSubmit={submit} noValidate>
      <div className="cform__row">
        {field('nome', 'Nome completo *', { autoComplete: 'name' })}
        {field('email', 'E-mail *', { type: 'email', autoComplete: 'email' })}
      </div>
      <div className="cform__row">
        {field('telefone', 'Telefone ou WhatsApp', { type: 'tel', autoComplete: 'tel' })}
        {field('empresa', 'Empresa ou instituição', { autoComplete: 'organization' })}
      </div>

      <fieldset className="cform__group">
        <legend>Você é</legend>
        <div className="cform__chips">
          {PROFILES.map((p) => (
            <button key={p} type="button" className={`pick ${profile === p ? 'is-on' : ''}`} aria-pressed={profile === p} onClick={() => setProfile(profile === p ? '' : p)}>
              {profile === p && <Icon name="check" size={14} stroke={2.6} />}
              {p}
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className="cform__group">
        <legend>Tenho interesse em</legend>
        <div className="cform__chips">
          {[...PROGRAMS.map((p) => p.short), ...EXTRA].map((v) => {
            const on = interests.includes(v)
            return (
              <button key={v} type="button" className={`pick ${on ? 'is-on' : ''}`} aria-pressed={on} onClick={() => toggle(v)}>
                {on && <Icon name="check" size={14} stroke={2.6} />}
                {v}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="fld fld--area">
        <textarea id="f-msg" rows={4} value={data.mensagem} onChange={set('mensagem')} placeholder=" " />
        <label htmlFor="f-msg">Conte um pouco sobre a sua operação</label>
      </div>

      <div className={`cform__consent ${errors.consent ? 'has-err' : ''}`}>
        <label>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} aria-invalid={!!errors.consent} />
          <i aria-hidden="true">
            <Icon name="check" size={14} stroke={3} />
          </i>
          <span>
            Concordo em ser contatado e com o tratamento dos meus dados para essa finalidade, conforme a LGPD (Lei nº
            13.709/2018).
          </span>
        </label>
        {errors.consent && (
          <span className="fld__err" role="alert">
            {errors.consent}
          </span>
        )}
      </div>

      <AnimatePresence>
        {state === 'error' && (
          <motion.p className="cform__error" role="alert" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
            Não foi possível enviar agora. Tente novamente em instantes ou escreva para {CONTACT.email}.
          </motion.p>
        )}
      </AnimatePresence>

      <button type="submit" className="cform__submit" disabled={state === 'sending'}>
        <span>{state === 'sending' ? 'Enviando…' : 'Enviar mensagem'}</span>
        <i>
          <Icon name="arrow-right" size={18} stroke={2.2} />
        </i>
      </button>
    </form>
  )
}
