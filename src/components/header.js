import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

// css modules practice => recommended way for gatsby
import headerStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link to="/" className={headerStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <Link
            to="/"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            <li>Home</li>
          </Link>
          <Link
            to="/blog"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            <li>Blog</li>
          </Link>
          <Link
            to="/about"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            <li>About</li>
          </Link>
          <Link
            to="/contact"
            className={headerStyles.navItem}
            activeClassName={headerStyles.activeNavItem}
          >
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
