import { useTransition } from '../layout/TransitionContext.jsx'

const isExternal = (to) => /^(https?:)?\/\//.test(to) || to.startsWith('mailto:') || to.startsWith('tel:')

/* Link interno com transição de página por pétalas. Links externos viram <a> normais. */
export default function TLink({ to, children, onClick, ...rest }) {
  const { go } = useTransition()
  const external = isExternal(to)

  const handle = (e) => {
    onClick?.(e)
    if (e.defaultPrevented || external) return
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || rest.target === '_blank') return
    e.preventDefault()
    go(to)
  }

  return (
    <a
      href={to}
      onClick={handle}
      {...(external && !to.startsWith('mailto:') && !to.startsWith('tel:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
    </a>
  )
}
