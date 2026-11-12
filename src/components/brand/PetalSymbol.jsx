import { motion, useReducedMotion } from 'motion/react'

/* Geometria extraída do Logo_favicon_dark.svg (viewBox 304x303). Cores = mapa das pétalas do manual. */
export const D = {
  silhouette:
    'M152 4C132.67 4 117 19.67 117 39C117 81.2333 82.3722 116 39 116C19.67 116 4 131.67 4 151C4 170.33 19.67 186 39 186C82.3722 186 117 220.767 117 263C117 272.411 121.714 281.954 127.757 288.244C134.047 294.286 143.59 299 153 299C172.33 299 188 283.33 188 264C188 220.628 222.767 186 265 186C284.33 186 300 170.33 300 151C300 131.67 284.33 116 265 116C221.628 116 187 81.2333 187 39C187 19.67 171.33 4 152 4Z',
  top: 'M152 4C132.67 4 117 19.67 117 39C117 75.2656 130.185 108.37 152 133.943C173.815 108.37 187 75.2656 187 39C187 19.67 171.33 4 152 4Z',
  tl: 'M117 39C117 81.2333 82.3722 116 39 116C75.49 116 108.991 129.153 134.857 151C141.027 145.789 146.762 140.083 152 133.943C130.185 108.37 117 75.2656 117 39Z',
  left: 'M4 151C4 170.33 19.67 186 39 186C75.49 186 108.991 172.847 134.857 151C108.991 129.153 75.49 116 39 116C19.67 116 4 131.67 4 151Z',
  bottom:
    'M153 299C172.33 299 188 283.33 188 264C188 228.034 174.031 194.177 152.538 168.692C130.967 194.482 117 226.768 117 263C117 272.411 121.714 281.954 127.757 288.244C134.047 294.286 143.59 299 153 299Z',
  br: 'M188 264C188 283.33 172.33 299 153 299C143.59 299 134.047 294.286 127.757 288.244C134.125 294.874 143.081 299 153 299C172.33 299 188 283.33 188 264C188 220.628 222.767 186 265 186C228.727 186 195.406 173.003 169.604 151.388C163.455 156.677 157.746 162.466 152.538 168.692C174.031 194.177 188 228.034 188 264Z',
  right:
    'M300 151C300 131.67 284.33 116 265 116C228.52 116 195.238 129.342 169.604 151.388C195.406 173.003 228.727 186 265 186C284.33 186 300 170.33 300 151Z',
  tr: 'M265 116C221.628 116 187 81.2333 187 39C187 75.2656 173.815 108.37 152 133.943C157.368 140.236 163.259 146.072 169.604 151.388C195.238 129.342 228.52 116 265 116Z',
  bl: 'M117 263C117 220.767 82.3722 186 39 186C75.49 186 108.991 172.847 134.857 151C141.239 156.39 147.156 162.31 152.538 168.692C130.967 194.482 117 226.768 117 263Z',
  bit: 'M117 263C117 272.411 121.714 281.954 127.757 288.244C121.127 281.875 117 272.919 117 263Z',
}

/* Ordem horária a partir do topo = ordem dos pilares do documento de arquitetura */
const PETALS = [
  { key: 'top', dir: [0, -1], d: [D.top], tone: '#C2ECF7' },
  { key: 'right', dir: [1, 0], d: [D.right], tone: '#83D2E6' },
  { key: 'bottom', dir: [0, 1], d: [D.bottom, D.bit], tone: '#062836' },
  { key: 'left', dir: [-1, 0], d: [D.left], tone: '#368DA3' },
]
const OVERLAPS = [
  { key: 'tl', d: D.tl, tone: '#B7E7F3' },
  { key: 'tr', d: D.tr, tone: '#73C5DA' },
  { key: 'br', d: D.br, tone: '#011C26' },
  { key: 'bl', d: D.bl, tone: '#26788D' },
]

const ease = [0.22, 1, 0.36, 1]
/* Quantas pétalas precisam estar acesas para a sobreposição aparecer */
const NEEDS = { tr: 2, br: 3, bl: 4, tl: 4 }

/**
 * Símbolo do Grupo Telemed montado por pétalas.
 * variant: 'negative' (contorno branco para fundo escuro) | 'positive'
 * contour: 'full' | 'line' | 'none' (só no negativo)
 * intro: toca a animação de montagem; play controla quando ela começa
 * explode: 0..1 afasta as pétalas do centro; active: 0..3 destaca uma pétala;
 * lit: 0..4 acende as primeiras N pétalas (as sobreposições aparecem quando as vizinhas estão acesas)
 */
export default function PetalSymbol({
  variant = 'negative',
  contour = 'full',
  intro = false,
  play = true,
  delay = 0,
  explode = 0,
  active = null,
  lit,
  interactive = false,
  onPetalEnter,
  onPetalLeave,
  title,
  className,
  style,
}) {
  const reduce = useReducedMotion()
  const doIntro = intro && !reduce
  const negative = variant === 'negative'
  const viewBox = negative ? '0 0 304 303' : '4 4 296 295'
  const spring = { type: 'spring', stiffness: 120, damping: 18, mass: 0.9 }

  return (
    <svg
      viewBox={viewBox}
      className={className}
      style={style}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      overflow="visible"
    >
      {negative && contour !== 'none' && (
        <>
          <motion.path
            d={D.silhouette}
            fill="none"
            stroke="#fff"
            strokeWidth="2.5"
            strokeLinejoin="round"
            initial={doIntro ? { pathLength: 0, opacity: 0 } : false}
            animate={{ pathLength: play ? 1 : 0, opacity: play ? 1 : 0 }}
            transition={{ duration: 1.2, delay, ease }}
          />
          {contour === 'full' && (
            <motion.path
              d={D.silhouette}
              fill="#fff"
              stroke="#fff"
              strokeWidth="8"
              strokeLinejoin="round"
              initial={doIntro ? { opacity: 0 } : false}
              animate={{ opacity: play ? 1 - explode : 0 }}
              transition={{ duration: 0.6, delay: doIntro ? delay + 0.95 : 0, ease }}
            />
          )}
        </>
      )}

      {PETALS.map((p, i) => {
        const dim = active !== null && active !== i
        const pop = active === i
        return (
          <motion.g
            key={p.key}
            initial={doIntro ? { x: p.dir[0] * 70, y: p.dir[1] * 70, opacity: 0, scale: 0.8 } : false}
            animate={{
              x: p.dir[0] * (explode * 26 + (pop ? 6 : 0)),
              y: p.dir[1] * (explode * 26 + (pop ? 6 : 0)),
              opacity: play ? (lit !== undefined ? (i < lit ? 1 : 0.16) : dim ? 0.22 : 1) : 0,
              scale: pop ? 1.04 : 1,
            }}
            transition={{ ...spring, delay: doIntro ? delay + 0.25 + i * 0.12 : 0 }}
            style={{ cursor: interactive ? 'pointer' : undefined }}
            onPointerEnter={interactive ? () => onPetalEnter?.(i) : undefined}
            onPointerLeave={interactive ? () => onPetalLeave?.(i) : undefined}
          >
            {p.d.map((d) => (
              <path key={d} d={d} fill={p.tone} />
            ))}
          </motion.g>
        )
      })}

      {OVERLAPS.map((o, i) => (
        <motion.path
          key={o.key}
          d={o.d}
          fill={o.tone}
          initial={doIntro ? { opacity: 0 } : false}
          animate={{
            opacity: play
              ? lit !== undefined
                ? lit >= NEEDS[o.key]
                  ? 1
                  : 0
                : (1 - explode * 0.9) * (active !== null ? 0.35 : 1)
              : 0,
          }}
          transition={{ duration: 0.5, delay: doIntro ? delay + 0.95 + i * 0.07 : 0, ease }}
          style={{ pointerEvents: 'none' }}
        />
      ))}
    </svg>
  )
}
