import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Education from '../components/Education'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </div>
    </main>
  )
}

