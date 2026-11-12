import TLink from '../ui/TLink.jsx'
import Icon from '../ui/Icon.jsx'
import { NAV, SITE, CONTACT, REGULATORY, BRANDS } from '../../data/site.js'
import { PROGRAMS } from '../../data/programs.js'
import { getLenis } from '../../hooks/lenis.js'

export default function Footer() {
  const toTop = () => {
    const l = getLenis()
    if (l) l.scrollTo(0, { duration: 1.6 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="ftr theme-dark" data-nav="dark">
      <div className="container">
        <div className="ftr__top">
          <div className="ftr__brand">
            <img src="/brand/logo-dark.svg" alt="Grupo Telemed · Hub Saúde" width="885" height="303" />
            <p className="ftr__slogan">
              {SITE.slogan[0]}
              <span>{SITE.slogan[1]}</span>
            </p>
          </div>

          <div className="ftr__col">
            <h3>Institucional</h3>
            <ul>
              {NAV.filter((n) => n.to !== '/programas-de-saude').map((n) => (
                <li key={n.to}>
                  <TLink to={n.to}>{n.label}</TLink>
                </li>
              ))}
              <li>
                <TLink to="/perguntas-frequentes">Perguntas frequentes</TLink>
              </li>
            </ul>
          </div>

          <div className="ftr__col">
            <h3>Programas de Saúde</h3>
            <ul>
              {PROGRAMS.map((p) => (
                <li key={p.slug}>
                  <TLink to={`/programas-de-saude/${p.slug}`}>{p.short}</TLink>
                </li>
              ))}
            </ul>
          </div>

          <div className="ftr__col">
            <h3>Contato</h3>
            <ul>
              {CONTACT.email && (
                <li>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
              )}
              {CONTACT.phone && (
                <li>
                  <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}>{CONTACT.phone}</a>
                </li>
              )}
              {CONTACT.whatsapp && (
                <li>
                  <a href={`https://wa.me/${CONTACT.whatsapp}`}>WhatsApp</a>
                </li>
              )}
              {CONTACT.address && <li>{CONTACT.address}</li>}
              <li>
                <TLink to="/contato">Solicitar proposta</TLink>
              </li>
              {BRANDS.map((b) => (
                <li key={b.name}>
                  <a href={b.url} target="_blank" rel="noopener noreferrer">
                    {b.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ftr__refs">
          <span>Referências regulatórias</span>
          {REGULATORY.map((r) => (
            <span key={r.code} className="chip chip--line">
              {r.code}
            </span>
          ))}
        </div>

        <div className="ftr__bottom">
          <span>
            © {SITE.year} {SITE.name} · {SITE.sub}. Todos os direitos reservados.
          </span>
          <button type="button" className="ftr__to-top" onClick={toTop}>
            Voltar ao topo <Icon name="arrow-up-right" size={16} stroke={2} style={{ transform: 'rotate(-45deg)' }} />
          </button>
        </div>
      </div>
      <div className="ftr__mega" aria-hidden="true">
        {SITE.name}
      </div>
    </footer>
  )
}
