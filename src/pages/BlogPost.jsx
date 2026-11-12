import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'motion/react'
import PageHero from '../components/sections/PageHero.jsx'
import { PostCover } from '../components/sections/PostCard.jsx'
import PostCard from '../components/sections/PostCard.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'
import Button from '../components/ui/Button.jsx'
import Reveal from '../components/ui/Reveal.jsx'
import NotFound from './NotFound.jsx'
import { POSTS, formatDate, getPost, readingTime } from '../data/posts.js'
import usePageMeta from '../hooks/usePageMeta.js'
import '../components/sections/blog.css'

function PhotoCredit({ credit }) {
  if (!credit) return null
  return (
    <figcaption className="photo-credit">
      Foto:{' '}
      <a href={credit.url} target="_blank" rel="noopener noreferrer">
        {credit.name}
      </a>{' '}
      · Pexels
    </figcaption>
  )
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.2', 'end 0.8'] })
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30 })
  usePageMeta(post?.title, post?.excerpt)

  if (!post) return <NotFound />
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Blog', to: '/blog' }, { label: post.category }]}
        eyebrow={post.category}
        title={post.title}
        art={post.cover.variant}
        tones={post.cover.tones}
      >
        <span className="chip chip--line">{formatDate(post.date)}</span>
        <span className="chip chip--line">{readingTime(post)} min de leitura</span>
      </PageHero>

      <section className="section section--sheet theme-light" data-nav="light">
        <motion.div className="rprogress" style={{ scaleX }} aria-hidden="true" />
        <div className="container">
          <Reveal as="figure" className="article__cover">
            <PostCover post={post} decorative={false} />
            {post.image && <PhotoCredit credit={post.image.credit} />}
          </Reveal>
          <article ref={ref} className="prose">
            {post.body.map((b, i) => {
              if (b.t === 'h2') return <h2 key={i}>{b.c}</h2>
              if (b.t === 'ul')
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                )
              if (b.t === 'quote') return <blockquote key={i}>{b.c}</blockquote>
              if (b.t === 'img')
                return (
                  <figure key={i} className="prose__fig">
                    <img src={b.src} alt={b.alt} width="1200" height="675" loading="lazy" decoding="async" />
                    <PhotoCredit credit={b.credit} />
                  </figure>
                )
              return <p key={i}>{b.c}</p>
            })}
          </article>
          <div className="article__foot">
            <p className="article__note">
              Conteúdo informativo. Não substitui orientação jurídica ou clínica específica para o seu caso.
            </p>
            <Button to="/blog" variant="ghost" icon="arrow-right">
              Mais artigos
            </Button>
          </div>
        </div>
      </section>

      <section className="section section--tight theme-alt" data-nav="light">
        <div className="container">
          <Reveal as="h2" className="h-2" style={{ marginBottom: 32 }}>
            Continue lendo
          </Reveal>
          <div className="bgrid">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  )
}
