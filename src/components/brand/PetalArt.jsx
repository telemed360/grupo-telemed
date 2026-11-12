import { motion, useReducedMotion } from 'motion/react'

/* A folha do símbolo (pétala superior) com o ápice na origem. Girada e escalonada, gera toda a ilustração do site. */
const LEAF =
  'M152 4C132.67 4 117 19.67 117 39C117 75.2656 130.185 108.37 152 133.943C173.815 108.37 187 75.2656 187 39C187 19.67 171.33 4 152 4Z'

const TONES = {
  abismo: '#011C26',
  profundo: '#062836',
  petroleo: '#26788D',
  oceano: '#368DA3',
  ceu: '#73C5DA',
  agua: '#83D2E6',
  nevoa: '#B7E7F3',
  gelo: '#C2ECF7',
}

const range = (n) => Array.from({ length: n }, (_, i) => i)

const VARIANTS = {
  rosette: () => range(8).map((i) => ({ a: i * 45, s: i % 2 ? 0.78 : 1.08, t: i })),
  cross: () => range(4).map((i) => ({ a: i * 90, s: 1.12, t: i })),
  trio: () => range(3).map((i) => ({ a: i * 120, s: 1.1, t: i })),
  fan: () => range(7).map((i) => ({ a: -72 + i * 24, s: 0.7 + (i % 4) * 0.12, t: i })),
  spiral: () => range(10).map((i) => ({ a: i * 36, s: 0.45 + i * 0.085, t: i })),
  orbit: () => range(6).map((i) => ({ a: i * 60, s: i % 2 ? 0.7 : 1.15, t: i })),
}

export const ART_VARIANTS = Object.keys(VARIANTS)

/**
 * variant: rosette | cross | trio | fan | spiral | orbit
 * tones: nomes dos tons da paleta, usados em sequência
 * blend: 'multiply' (fundo claro) | 'screen' (fundo escuro) | 'normal'
 */
export default function PetalArt({
  variant = 'rosette',
  tones = ['petroleo', 'oceano', 'ceu', 'agua'],
  blend = 'multiply',
  spin = 0,
  rotate = 0,
  opacity = 0.9,
  className,
  style,
}) {
  const reduce = useReducedMotion()
  const items = (VARIANTS[variant] || VARIANTS.rosette)()
  const dur = Math.abs(spin)

  return (
    <svg viewBox="-190 -190 380 380" className={className} style={style} aria-hidden="true" overflow="visible">
      <motion.g
        initial={false}
        animate={!reduce && spin ? { rotate: [rotate, rotate + (spin > 0 ? 360 : -360)] } : { rotate }}
        transition={!reduce && spin ? { duration: dur, ease: 'linear', repeat: Infinity } : { duration: 0 }}
        style={{ transformBox: 'view-box', transformOrigin: '0 0' }}
      >
        {items.map((it, i) => (
          <path
            key={i}
            d={LEAF}
            fill={TONES[tones[it.t % tones.length]]}
            opacity={opacity}
            transform={`rotate(${it.a}) scale(${it.s}) translate(-152 -134)`}
            style={{ mixBlendMode: blend }}
          />
        ))}
      </motion.g>
    </svg>
  )
}
