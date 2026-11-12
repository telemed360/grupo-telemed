import { Fragment } from 'react'
import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]

/**
 * Título com máscara por palavra. Sem `go`, dispara ao entrar na tela.
 * Com `go` (boolean), a animação é controlada de fora (ex.: depois da abertura).
 */
export default function SplitText({ text, as = 'span', className, delay = 0, stagger = 0.05, go }) {
  const Comp = motion[as] || motion.span
  const words = text.split(' ')
  const trigger =
    go === undefined
      ? { initial: 'hide', whileInView: 'show', viewport: { once: true, margin: '0px 0px -10% 0px' } }
      : { initial: 'hide', animate: go ? 'show' : 'hide' }

  return (
    <Comp
      className={className}
      aria-label={text}
      {...trigger}
      variants={{ hide: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
      style={{ display: 'block' }}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <span className="split__mask" aria-hidden="true">
            <motion.span
              className="split__word"
              variants={{ hide: { y: '108%' }, show: { y: '0%', transition: { duration: 1.05, ease } } }}
            >
              {w}
            </motion.span>
          </span>
          {i < words.length - 1 ? ' ' : ''}
        </Fragment>
      ))}
    </Comp>
  )
}
