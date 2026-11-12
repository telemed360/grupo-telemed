import { createContext, useCallback, useContext, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import PetalSymbol from '../brand/PetalSymbol.jsx'

const Ctx = createContext({ go: () => {} })
export const useTransition = () => useContext(Ctx)

/* Quatro painéis em tons da paleta, do mais claro ao Abismo, cruzam a tela como pétalas. */
const PANELS = ['#C2ECF7', '#83D2E6', '#368DA3', '#011C26']
const ease = [0.76, 0, 0.24, 1]
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

export function TransitionProvider({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const reduce = useReducedMotion()
  const [phase, setPhase] = useState('idle')
  const busy = useRef(false)
  const here = useRef(location)
  here.current = location

  const go = useCallback(
    async (to) => {
      if (busy.current) return
      const url = new URL(to, window.location.origin)
      const target = url.pathname + url.search + url.hash
      if (url.pathname === here.current.pathname || reduce) {
        navigate(target)
        return
      }
      busy.current = true
      setPhase('in')
      await sleep(800)
      navigate(target)
      await sleep(120)
      setPhase('out')
      await sleep(840)
      setPhase('idle')
      busy.current = false
    },
    [navigate, reduce],
  )

  return (
    <Ctx.Provider value={{ go }}>
      {children}
      <div className="ptrans" data-phase={phase} aria-hidden="true">
        {PANELS.map((c, i) => (
          <motion.div
            key={c}
            className="ptrans__panel"
            style={{ background: c, zIndex: i }}
            initial={false}
            animate={phase}
            variants={{
              idle: { y: '96%', transition: { duration: 0 } },
              in: { y: '0%', transition: { duration: 0.58, delay: i * 0.06, ease } },
              out: { y: '-96%', transition: { duration: 0.62, delay: (3 - i) * 0.06, ease } },
            }}
          >
            {i === PANELS.length - 1 && (
              <motion.div
                className="ptrans__mark"
                animate={{ opacity: phase === 'idle' ? 0 : 1, scale: phase === 'in' ? 1 : 0.9 }}
                transition={{ duration: 0.5, delay: phase === 'in' ? 0.5 : 0 }}
              >
                <PetalSymbol variant="negative" play />
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </Ctx.Provider>
  )
}
