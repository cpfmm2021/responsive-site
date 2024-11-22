import { useState } from 'react'
import { motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Router>
      <div className="w-full min-h-screen">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <Link to="/" className="text-2xl font-bold text-primary">
                Logo
              </Link>
              
              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <Link to="/about" className="hover:text-primary transition-colors">About</Link>
                <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
                <Link to="/login" className="btn-secondary">로그인</Link>
                <Link to="/signup" className="btn-primary">회원가입</Link>
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
            <Link to="/" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/contact" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>로그인</Link>
            <Link to="/signup" className="text-2xl hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>회원가입</Link>
          </div>
        </motion.div>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
