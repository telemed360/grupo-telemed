import TLink from './TLink.jsx'
import Icon from './Icon.jsx'

/* Botão pílula do manual. No hover: sobe 1px e muda para o tom mais escuro (ou mais claro, sobre fundo escuro). */
export default function Button({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon = 'arrow-right',
  children,
  className = '',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size} ${className}`
  const inner = (
    <>
      <span className="btn__label">{children}</span>
      {icon && (
        <span className="btn__icon">
          <Icon name={icon} size={size === 'lg' ? 18 : 16} stroke={2} />
        </span>
      )}
    </>
  )

  if (to) {
    return (
      <TLink to={to} className={cls} {...rest}>
        {inner}
      </TLink>
    )
  }
  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={cls} {...rest}>
      {inner}
    </button>
  )
}
