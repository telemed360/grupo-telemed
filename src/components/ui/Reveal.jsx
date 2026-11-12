import { motion } from 'motion/react'

const ease = [0.22, 1, 0.36, 1]
const viewport = { once: true, margin: '0px 0px -8% 0px' }

export default function Reveal({ as = 'div', delay = 0, y = 28, x = 0, className, children, ...rest }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={viewport}
      transition={{ duration: 1, delay, ease }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

/* Grupo com cascata: <Stagger> + <Item> */
export function Stagger({ as = 'div', gap = 0.08, delay = 0, className, children, ...rest }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      initial="hide"
      whileInView="show"
      viewport={viewport}
      variants={{ hide: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
      {...rest}
    >
      {children}
    </Comp>
  )
}

export function Item({ as = 'div', y = 26, className, children, ...rest }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={className}
      variants={{ hide: { opacity: 0, y }, show: { opacity: 1, y: 0, transition: { duration: 0.95, ease } } }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
