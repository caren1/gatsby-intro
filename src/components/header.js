import React from "react"
import { Link } from "gatsby"

// css modules practice => recommended way for gatsby
import headerStyles from './header.module.scss'

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1><Link to="/" className={headerStyles.title}>GatsbyJS Bootcamp!</Link></h1>
      <nav>
        <ul className={headerStyles.navList}>
          <Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            <li>Home</li>
          </Link>
          <Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            <li>Blog</li>
          </Link>
          <Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            <li>About</li>
          </Link>
          <Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
