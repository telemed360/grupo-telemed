import { createContext, useContext, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import PetalSymbol from '../brand/PetalSymbol.jsx'
import { SITE } from '../../data/site.js'

const IntroCtx = createContext({ ready: true })
export const useIntro = () => useContext(IntroCtx)

const KEY = 'gt-intro-v1'

/* Abertura única por sessão: o símbolo desenha o contorno e as pétalas se encaixam. */
export function IntroProvider({ children }) {
  const [show, setShow] = useState(() => {
    try {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      return !reduce && !sessionStorage.getItem(KEY)
    } catch {
      return false
    }
  })
  const [ready, setReady] = useState(!show)

  useEffect(() => {
    if (!show) return
    const root = document.documentElement
    root.style.overflow = 'hidden'
    const t1 = setTimeout(() => setReady(true), 2350)
    const t2 = setTimeout(() => {
      setShow(false)
      root.style.overflow = ''
      try {
        sessionStorage.setItem(KEY, '1')
      } catch {
        /* sem armazenamento: a abertura apenas repete */
      }
    }, 2400)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      root.style.overflow = ''
    }
  }, [show])

  return (
    <IntroCtx.Provider value={{ ready }}>
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            key="intro"
            className="intro"
            role="status"
            aria-label="Carregando"
            exit={{ y: '-100%', transition: { duration: 0.95, ease: [0.76, 0, 0.24, 1] } }}
          >
            <div className="intro__inner">
              <PetalSymbol variant="negative" intro play className="intro__symbol" />
              <motion.div
                className="intro__word"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                <strong>{SITE.name}</strong>
                <span>{SITE.sub}</span>
              </motion.div>
            </div>
            <motion.span
              className="intro__bar"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.2, ease: [0.65, 0, 0.35, 1] }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </IntroCtx.Provider>
  )
}
