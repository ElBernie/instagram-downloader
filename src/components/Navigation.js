import React from "react"
import { Link } from "gatsby"

import NavbarStyle from "./navigation.module.css"

export default class Navigation extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <nav className={NavbarStyle.navbarContainer}>
        <div className={NavbarStyle.menu}>
          <h1 className="logo">Instatools</h1>
          <div className={NavbarStyle.links}>
            <Link className={NavbarStyle.link} to="/about">
              about
            </Link>
            <Link className={NavbarStyle.link} to="/support">
              support
            </Link>
          </div>
        </div>
      </nav>
    )
  }
}
