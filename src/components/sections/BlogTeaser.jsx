import Reveal, { Item, Stagger } from '../ui/Reveal.jsx'
import Button from '../ui/Button.jsx'
import PostCard from './PostCard.jsx'
import { POSTS } from '../../data/posts.js'
import './blog.css'

export default function BlogTeaser({ theme = 'theme-light' }) {
  const [first, ...rest] = POSTS
  return (
    <section className={`section ${theme}`} data-nav="light">
      <div className="container">
        <div className="sec-head">
          <div>
            <Reveal as="p" className="eyebrow">
              Blog
            </Reveal>
            <Reveal as="h2" className="h-1" delay={0.05}>
              Saúde digital,
              <span className="t-soft">sem jargão.</span>
            </Reveal>
          </div>
          <Reveal className="sec-head__aside" delay={0.1}>
            <p className="lead">Regulação, governança de dados, gestão e programas de saúde explicados com clareza.</p>
            <Button to="/blog" variant="ghost" icon="arrow-up-right">
              Ver todos os artigos
            </Button>
          </Reveal>
        </div>

        <Stagger className="bteaser" gap={0.1}>
          <Item className="bteaser__main">
            <PostCard post={first} featured />
          </Item>
          <div className="bteaser__side">
            {rest.slice(0, 2).map((p) => (
              <Item key={p.slug}>
                <PostCard post={p} />
              </Item>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  )
}
