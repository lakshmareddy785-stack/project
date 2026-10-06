import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Bespoke Events', href: '/events' },
    { label: 'Wedding Service', href: '/wedding' },
    { label: 'Corporate Dining', href: '/corporate' },
    { label: 'Private Chef', href: '/private-chef' },
    { label: 'View Menu', href: '/menu' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className="bg-cream sticky top-0 z-50 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Left: Hamburger + Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="text-dark hover:text-primary transition-colors z-50 relative"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="font-heading text-2xl text-primary">
              Emerald & Gold
            </a>
          </div>

          {/* Center/Right: Nav links (desktop only) */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 5).map((link) => (
              
                key={link.label}
                href={link.href}
                className="font-body text-sm text-dark hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right: CTA Button */}
          
            href="/booking"
            className="bg-sand hover:bg-sand-light text-dark font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
          >
            Book Catering
          </a>
        </div>
      </nav>

      {/* Slide-out mobile/hamburger menu */}
      <div
        className={`fixed inset-0 bg-dark/40 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-72 bg-cream shadow-xl transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="pt-24 px-6 flex flex-col gap-6">
            {navLinks.map((link) => (
              
                key={link.label}
                href={link.href}
                className="font-heading text-xl text-dark hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar