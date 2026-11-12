/* Ícones de traço (24px, 1.7). Geometria própria, sem biblioteca externa. */
const P = {
  'arrow-right': 'M5 12h14M13 6l6 6-6 6',
  'arrow-up-right': 'M7 17L17 7M8 7h9v9',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  check: 'M5 12.5l4.5 4.5L19 7.5',
  close: 'M6 6l12 12M18 6L6 18',
  menu: 'M4 8h16M4 16h16',
  clock: ['circle:12,12,9', 'M12 7v5l3 2'],
  shield: ['M12 3l7 3v5.5c0 4.8-3 8.2-7 9.5-4-1.3-7-4.7-7-9.5V6l7-3z', 'M9 12l2.2 2.2L15.5 10'],
  users: ['circle:9,8,3.2', 'M3.5 19.5v-1a4.5 4.5 0 0 1 4.5-4.5h2a4.5 4.5 0 0 1 4.5 4.5v1', 'M16 4.9a3.2 3.2 0 0 1 0 6.2M20.5 19.5v-1a4.5 4.5 0 0 0-3-4.2'],
  layers: ['M12 3l9 5-9 5-9-5 9-5z', 'M3 12.5l9 5 9-5', 'M3 16.5l9 5 9-5'],
  plug: ['M9 3v5M15 3v5', 'M6.5 8h11v3a5.5 5.5 0 0 1-11 0V8z', 'M12 16.5V21'],
  headset: ['M4 14v-2a8 8 0 0 1 16 0v2', 'M4 14h3v5H5.5A1.5 1.5 0 0 1 4 17.5V14zM20 14h-3v5h1.5a1.5 1.5 0 0 0 1.5-1.5V14z', 'M17 19c0 1.6-2 2-5 2'],
  rocket: ['M14 4c3.5-.5 6-.5 6-.5s0 2.5-.5 6c-.7 4.2-4 7-7.5 8.5l-3-3C10.5 11 12.8 5.2 14 4z', 'M8.5 15.5L5 15c-1 1.2-1.5 3.5-1.5 5.5 2 0 4.3-.5 5.5-1.5', 'circle:15.2,8.8,1.2'],
  puzzle: ['M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v5h-5v-2a2 2 0 1 0-4 0v2H5v-5h2a2 2 0 1 0 0-4H5V6h5V4z'],
  chart: 'M4 20V11M10 20V4M16 20v-7M22 20H2',
  pulse: 'M2.5 12h4l2.5-6 4 12 2.5-6h6',
  brain: ['M12 5a3 3 0 0 0-5.6 1.4A3.6 3.6 0 0 0 5 13.2 3.6 3.6 0 0 0 8 18a3 3 0 0 0 4 1V5z', 'M12 5a3 3 0 0 1 5.6 1.4A3.6 3.6 0 0 1 19 13.2 3.6 3.6 0 0 1 16 18a3 3 0 0 1-4 1'],
  ambulance: ['M3 16.5V7.5h11v9M14 10.5h3.8l3.2 3.2v2.8h-2', 'M3 16.5h2M9.5 16.5h5', 'circle:7.2,17,1.8', 'circle:17.2,17,1.8', 'M8.5 9.5v4M6.5 11.5h4'],
  calendar: ['rect:4,5,16,15,3', 'M4 10h16M8.5 3v4M15.5 3v4'],
  stethoscope: ['M6 3v6a4 4 0 0 0 8 0V3', 'M10 13v2a5 5 0 0 0 10 0v-1.2', 'circle:20,12,2'],
  video: ['rect:3,6.5,12.5,11,3', 'M15.5 10.5l5.5-3v9l-5.5-3'],
  file: ['M7 3h7l5 5v13H7z', 'M14 3v5h5M10 13h6M10 17h6'],
  chat: ['M4 5h16v11H10l-4.5 3.5V16H4V5z'],
  building: ['M5 21V4h9v17', 'M14 9h5v12', 'M8.5 8h1M8.5 12h1M8.5 16h1M17 13h.01M17 17h.01'],
  landmark: ['M3 10l9-6 9 6', 'M5.5 10v8M9.8 10v8M14.2 10v8M18.5 10v8', 'M3 21h18'],
  store: ['M4 9l1.2-5h13.6L20 9', 'M4 9v11h16V9', 'M4 9c0 1.4 1.2 2.5 2.7 2.5S9.3 10.4 9.3 9c0 1.4 1.2 2.5 2.7 2.5s2.7-1.1 2.7-2.5c0 1.4 1.2 2.5 2.7 2.5S20 10.4 20 9'],
  tag: ['M3 12V4h8l10 10-8 8L3 12z', 'M7.5 8.5h.01'],
  phone: 'M5 4h3.5l2 5-2.4 1.5a11 11 0 0 0 5.4 5.4L15 13.5l5 2V19a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z',
  mail: ['rect:3,5,18,14,3', 'M3.5 7.5l8.5 6 8.5-6'],
  pin: ['M12 21s-6.5-5.4-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21z', 'circle:12,10.5,2.2'],
  'chevron-down': 'M6 9l6 6 6-6',
  sparkle: 'M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z',
  lock: ['rect:5,11,14,9.5,2.5', 'M8 11V8a4 4 0 0 1 8 0v3'],
  search: ['circle:11,11,6.5', 'M20 20l-4.4-4.4'],
  user: ['circle:12,8,4', 'M4 21a8 8 0 0 1 16 0'],
  mic: ['rect:9,3,6,11,3', 'M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21'],
  camera: ['rect:3,6.5,12.5,11,3', 'M15.5 10.5l5.5-3v9l-5.5-3'],
  'phone-off': 'M3.5 14.5c5-4.3 12-4.3 17 0l-1 3-3.5-1v-2.5a11 11 0 0 0-8 0V16.5l-3.5 1-1-3z',
  heart: 'M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.4a4.3 4.3 0 0 1 7.5 2.4C19.5 15.4 12 20 12 20z',
  globe: ['circle:12,12,9', 'M3 12h18M12 3c2.6 2.6 3.9 5.6 3.9 9S14.6 18.4 12 21c-2.6-2.6-3.9-5.6-3.9-9S9.4 5.6 12 3z'],
  doc: ['M6 3h9l4 4v14H6z', 'M9 12h7M9 16h7M9 8h3'],
  bolt: 'M13 3L5 13.5h6L10 21l8-10.5h-6L13 3z',
  link: ['M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1', 'M14 10a4 4 0 0 0-5.7 0l-3 3A4 4 0 0 0 11 18.7l1-1'],
  grid: ['rect:4,4,6.5,6.5,2', 'rect:13.5,4,6.5,6.5,2', 'rect:4,13.5,6.5,6.5,2', 'rect:13.5,13.5,6.5,6.5,2'],
}

export default function Icon({ name, size = 24, stroke = 1.7, className, style }) {
  const parts = [].concat(P[name] || [])
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
      aria-hidden="true"
      focusable="false"
    >
      {parts.map((p, i) => {
        if (p.startsWith('circle:')) {
          const [cx, cy, r] = p.slice(7).split(',')
          return <circle key={i} cx={cx} cy={cy} r={r} />
        }
        if (p.startsWith('rect:')) {
          const [x, y, w, h, rx] = p.slice(5).split(',')
          return <rect key={i} x={x} y={y} width={w} height={h} rx={rx} />
        }
        return <path key={i} d={p} />
      })}
    </svg>
  )
}
