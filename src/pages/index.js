import React from "react"
import DownloadInput from "../components/DownloadInput"
import Navigation from "../components/Navigation"
import { Link } from "gatsby"
import indexStyle from "../styles/index.module.css"
import { Helmet } from "react-helmet"
export default function Home() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Instagram Download - InstaTools</title>

        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="The best tool to download pictures, videos, profile picture, reel
            and story from Instagram."
        />
      </Helmet>
      <Navigation />

      <div className={indexStyle.hero}>
        <header>
          <h2>Instagram downloader</h2>
          <p>
            The best tool to download pictures, videos, profile picture, reel
            and story from Instagram.
          </p>
        </header>
      </div>
      <section className={indexStyle.tools}>
        <div className={indexStyle.downloader}>
          <DownloadInput placeholder="paste a post link or an account link here" />
          <Link to="help" className={indexStyle.help}>
            Need help ?
          </Link>
        </div>
      </section>

      <div class={indexStyle.panelContainer}>
        <section className={indexStyle.panel}>
          <img src="https://source.unsplash.com/random/150x150" />
        </section>
      </div>
    </React.Fragment>
  )
}
