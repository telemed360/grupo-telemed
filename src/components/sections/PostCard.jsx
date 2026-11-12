import TLink from '../ui/TLink.jsx'
import Icon from '../ui/Icon.jsx'
import PetalArt from '../brand/PetalArt.jsx'
import { formatDate, readingTime } from '../../data/posts.js'
import './blog.css'

/* Capa: foto do artigo. Sem foto, cai na arte gerada pelas pétalas. */
export function PostCover({ post, className = '', decorative = true }) {
  if (post.image) {
    return (
      <div className={`pcover pcover--photo ${className}`}>
        <img
          src={post.image.src}
          alt={decorative ? '' : post.image.alt}
          width="1600"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>
    )
  }
  const { variant, tones, rotate } = post.cover
  const dark = ['agua', 'ceu', 'gelo', 'nevoa'].includes(tones[0])
  return (
    <div className={`pcover ${dark ? 'is-dark' : ''} ${className}`} aria-hidden="true">
      <PetalArt variant={variant} tones={tones} rotate={rotate} blend={dark ? 'screen' : 'multiply'} opacity={0.92} className="pcover__art" />
    </div>
  )
}

export default function PostCard({ post, featured = false }) {
  return (
    <article className={`post ${featured ? 'post--feat' : ''}`} data-spot>
      <TLink to={`/blog/${post.slug}`} className="post__link">
        <PostCover post={post} />
        <div className="post__body">
          <div className="post__meta">
            <span className="chip">{post.category}</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{readingTime(post)} min de leitura</span>
          </div>
          <h3 className="post__title">{post.title}</h3>
          {featured && <p className="post__excerpt">{post.excerpt}</p>}
          <span className="link-arrow">
            Ler artigo <Icon name="arrow-right" size={16} stroke={2} />
          </span>
        </div>
      </TLink>
    </article>
  )
}
