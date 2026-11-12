export default function Marquee({ items, speed = 46, className = '' }) {
  const row = (
    <ul className="marquee__row">
      {items.map((t, i) => (
        <li key={i}>
          <span>{t}</span>
          <i className="marquee__sep" />
        </li>
      ))}
    </ul>
  )
  return (
    <div className={`marquee ${className}`} style={{ '--speed': `${speed}s` }} aria-hidden="true">
      <div className="marquee__track">
        {row}
        {row}
      </div>
    </div>
  )
}
