import { useState } from 'react'
import { PAGES } from '@/components/Navbar/constants'
import Logo from '@/components/Logo'
import Link from 'next/link'

const usePages = (): Array<{
  path: string
  title: string
  weight: number
}> => {
  return [...PAGES].sort((a, b) => (a.weight < b.weight ? -1 : 1))
}

const Nav: React.FC = () => {
  const pages = usePages()
  const [isExpanded, toggleNavigation] = useState(false)

  return (
    <nav
      id="navigation"
      className="navbar navbar-expand-lg navigation sticky-top"
    >
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <h1 className="text-hide m-0">Oysters</h1>
            <Logo width="140" height="40" />
          </a>
        </Link>
        <button
          onClick={() => toggleNavigation(!isExpanded)}
          className="navbar-toggler navbar-dark"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isExpanded}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isExpanded ? 'show' : ''}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto navigation-menu">
            {pages.map((page) => (
              <li key={page.path} className="nav-item">
                <Link href={page.path}>
                  <a
                    className="nav-link"
                    data-scroll
                    onClick={() => toggleNavigation(false)}
                  >
                    {page.title}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
