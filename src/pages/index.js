import React from "react"
import DownloadInput from "../components/DownloadInput"
import Navbar from "../components/Navbar"
import { Link } from "gatsby"
import indexStyle from "../styles/index.module.css"
export default function Home() {
  return (
    <React.Fragment>
      <Navbar />

      <div className={indexStyle.hero}>
        <header>
          <div className={indexStyle.title}>
            <h2>Instagram downloader</h2>
            <p>
              The best tool to download pictures, videos, profile picture, reel
              and story from Instagram
            </p>
          </div>

          <div className={indexStyle.tools}>
            <DownloadInput placeholder="paste a post link or an account link here" />
            <Link to="help" className={indexStyle.help}>
              Need help ?
            </Link>
          </div>
        </header>
      </div>
    </React.Fragment>
  )
}
