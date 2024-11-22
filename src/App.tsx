import { useState } from 'react'
import { motion } from 'framer-motion'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="w-full min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <a href="#" className="text-2xl font-bold text-primary">
              Logo
            </a>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#services" className="hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
              <button className="btn-primary">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div 
        className={`fixed inset-0 bg-white dark:bg-dark z-40 md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : '100%' }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <a href="#" className="text-2xl hover:text-primary transition-colors">Home</a>
          <a href="#about" className="text-2xl hover:text-primary transition-colors">About</a>
          <a href="#services" className="text-2xl hover:text-primary transition-colors">Services</a>
          <a href="#contact" className="text-2xl hover:text-primary transition-colors">Contact</a>
          <button className="btn-primary">Get Started</button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="w-full pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to Our Modern Website
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
              A fully responsive website built with React, Tailwind CSS, and Framer Motion.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-primary w-full sm:w-auto">Get Started</button>
              <button className="btn-secondary w-full sm:w-auto">Learn More</button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default App
