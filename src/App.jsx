import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { TransitionProvider } from './components/layout/TransitionContext.jsx'
import { IntroProvider } from './components/layout/Preloader.jsx'
import ScrollManager from './components/layout/ScrollManager.jsx'
import ScrollProgress from './components/layout/ScrollProgress.jsx'
import Cursor from './components/layout/Cursor.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import useSpotlight from './hooks/useSpotlight.js'
import { startLenis, stopLenis } from './hooks/lenis.js'
import './components/ui/ui.css'
import './components/layout/layout.css'

const Home = lazy(() => import('./pages/Home.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Solutions = lazy(() => import('./pages/Solutions.jsx'))
const HowItWorks = lazy(() => import('./pages/HowItWorks.jsx'))
const Programs = lazy(() => import('./pages/Programs.jsx'))
const ProgramDetail = lazy(() => import('./pages/ProgramDetail.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const FaqPage = lazy(() => import('./pages/FaqPage.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

export default function App() {
  useSpotlight()

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!reduce) startLenis()
    return () => stopLenis()
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <TransitionProvider>
        <IntroProvider>
          <a className="skip-link" href="#main">
            Pular para o conteúdo
          </a>
          <ScrollManager />
          <ScrollProgress />
          <Cursor />
          <Header />
          <main id="main">
            <Suspense fallback={<div className="route-fallback" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quem-somos" element={<About />} />
                <Route path="/solucoes" element={<Solutions />} />
                <Route path="/como-funciona" element={<HowItWorks />} />
                <Route path="/programas-de-saude" element={<Programs />} />
                <Route path="/programas-de-saude/:slug" element={<ProgramDetail />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/contato" element={<Contact />} />
                <Route path="/perguntas-frequentes" element={<FaqPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </IntroProvider>
      </TransitionProvider>
    </MotionConfig>
  )
}
