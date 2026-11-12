import PageHero from '../components/sections/PageHero.jsx'
import ContactForm from '../components/sections/ContactForm.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import Icon from '../components/ui/Icon.jsx'
import PetalArt from '../components/brand/PetalArt.jsx'
import Faq from '../components/sections/Faq.jsx'
import { CONTACT } from '../data/site.js'
import usePageMeta from '../hooks/usePageMeta.js'
import '../components/sections/contact.css'

export default function Contact() {
  usePageMeta('Contato', 'Fale com um consultor do Grupo Telemed e solicite uma proposta de telemedicina e saúde digital.')
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contato' }]}
        eyebrow="Contato"
        title="Vamos conversar sobre"
        soft="a sua operação."
        lead="Conte o que você busca. Um consultor entende o contexto, apresenta o caminho e desenha o projeto com você."
        art="trio"
      />
      <section className="section section--sheet theme-alt" data-nav="light" style={{ paddingTop: 'clamp(56px, 7vw, 96px)' }}>
        <div className="container contact">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal className="cside" delay={0.1}>
            <div className="cside__card">
              <PetalArt variant="cross" blend="screen" spin={100} opacity={0.4} tones={['oceano', 'ceu', 'agua']} className="cside__art" />
              <h2>Canais</h2>
              <ul className="cside__list">
                {CONTACT.email && (
                  <li>
                    <a href={`mailto:${CONTACT.email}`}>
                      <span className="cside__ic">
                        <Icon name="mail" size={20} />
                      </span>
                      {CONTACT.email}
                    </a>
                  </li>
                )}
                {CONTACT.phone && (
                  <li>
                    <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}>
                      <span className="cside__ic">
                        <Icon name="phone" size={20} />
                      </span>
                      {CONTACT.phone}
                    </a>
                  </li>
                )}
                {CONTACT.whatsapp && (
                  <li>
                    <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">
                      <span className="cside__ic">
                        <Icon name="chat" size={20} />
                      </span>
                      WhatsApp
                    </a>
                  </li>
                )}
                {CONTACT.address && (
                  <li>
                    <span>
                      <span className="cside__ic">
                        <Icon name="pin" size={20} />
                      </span>
                      {CONTACT.address}
                    </span>
                  </li>
                )}
                {CONTACT.hours && (
                  <li>
                    <span>
                      <span className="cside__ic">
                        <Icon name="clock" size={20} />
                      </span>
                      {CONTACT.hours}
                    </span>
                  </li>
                )}
              </ul>
            </div>
            <div className="cside__next">
              <h2>O que acontece depois</h2>
              <ol>
                <li>Recebemos a sua mensagem e o perfil da sua operação.</li>
                <li>Um consultor entra em contato para entender o contexto.</li>
                <li>Desenhamos o projeto e apresentamos a proposta.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
      <Faq theme="theme-light" limit={4} />
    </>
  )
}
