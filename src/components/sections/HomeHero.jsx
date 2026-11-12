import { motion } from 'motion/react'
import Button from '../ui/Button.jsx'
import SplitText from '../ui/SplitText.jsx'
import { useIntro } from '../layout/Preloader.jsx'
import { HERO_IMAGE } from '../../data/site.js'
import './hero.css'

const ease = [0.22, 1, 0.36, 1]

/* Hero com a foto como fundo inteiro, sem degradê e sem filtro. O texto vai em uma barra sólida no canto. */
export default function HomeHero() {
  const { ready } = useIntro()

  return (
    <section className="hero theme-dark" data-nav="dark" data-nav-mobile="light">
      <motion.div
        className="hero__bg"
        initial={{ opacity: 0 }}
        animate={{ opacity: ready ? 1 : 0 }}
        transition={{ duration: 1.4, ease }}
      >
        <picture>
          <source media="(max-width: 760px)" srcSet={HERO_IMAGE.mobileSrc} width="862" height="1824" />
          <motion.img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            width="1672"
            height="941"
            decoding="async"
            initial={{ scale: 1.1 }}
            animate={{ scale: ready ? 1 : 1.1 }}
            transition={{ duration: 2.4, ease }}
          />
        </picture>
      </motion.div>

      <div className="container hero__stage">
        <motion.div
          className="hero__card"
          initial={{ opacity: 0, y: 32 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
          transition={{ duration: 1.1, delay: 0.6, ease }}
        >
          <h1 className="hero__title">
            <SplitText text="Tecnologia que conecta." go={ready} delay={0.8} />
            <SplitText text="Saúde que transforma." go={ready} delay={1.0} className="hero__soft" />
          </h1>
          <Button to="/contato" size="lg" variant="onDark">
            Falar com um consultor
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
