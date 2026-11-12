import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from 'motion/react'
import PageHero from '../components/sections/PageHero.jsx'
import PostCard from '../components/sections/PostCard.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import { POSTS, POST_CATEGORIES } from '../data/posts.js'
import usePageMeta from '../hooks/usePageMeta.js'
import '../components/sections/blog.css'

export default function Blog() {
  usePageMeta('Blog', 'Regulação, governança de dados, gestão em saúde e programas de saúde explicados com clareza.')
  const [cat, setCat] = useState('Todos')
  const list = cat === 'Todos' ? POSTS : POSTS.filter((p) => p.category === cat)

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog' }]}
        eyebrow="Blog"
        title="Saúde digital,"
        soft="explicada com clareza."
        lead="Regulação, governança de dados, gestão e programas de saúde para quem decide, opera e cuida."
        art="fan"
        tones={['oceano', 'ceu', 'agua', 'gelo']}
      />
      <section className="section section--sheet theme-light" data-nav="light">
        <div className="container">
          <LayoutGroup>
            <div className="bfilter" role="tablist" aria-label="Categorias">
              {['Todos', ...POST_CATEGORIES].map((c) => (
                <button key={c} type="button" role="tab" aria-selected={cat === c} className={cat === c ? 'is-on' : ''} onClick={() => setCat(c)}>
                  {cat === c && <motion.i layoutId="bf-pill" className="bfilter__pill" transition={{ type: 'spring', stiffness: 400, damping: 34 }} />}
                  <span>{c}</span>
                </button>
              ))}
            </div>
            <div className="bgrid">
              <AnimatePresence mode="popLayout">
                {list.map((p, i) => (
                  <motion.div
                    key={p.slug}
                    layout
                    className={i === 0 && cat === 'Todos' ? 'is-feat' : ''}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <PostCard post={p} featured={i === 0 && cat === 'Todos'} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {list.length === 0 && <p className="bempty">Nenhum artigo nesta categoria ainda.</p>}
          </LayoutGroup>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
