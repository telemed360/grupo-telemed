import { useEffect } from 'react'

const BASE = 'Grupo Telemed · Hub Saúde'

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}` : BASE
    if (description) {
      let tag = document.querySelector('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.name = 'description'
        document.head.appendChild(tag)
      }
      tag.content = description
    }
  }, [title, description])
}
