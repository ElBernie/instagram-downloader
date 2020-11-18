import React from "React"
import { Link } from "gatsby"

import NavbarStyle from "./navbar.module.css"
export default class Navbar extends React.Component {
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