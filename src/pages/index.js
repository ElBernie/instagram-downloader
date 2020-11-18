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
          <h3>Can I download private post or profile picture ?</h3>
          <p>
            <span className={indexStyle.emphasis}>Yes it's easy !</span> You
            just have to be connected in your instagram account in this browser,
            follow the private account, grab the link of the private post and
            paste it !
          </p>
        </section>
        <section className={indexStyle.panel}>
          <h3>How to download the picture ?</h3>
          <p>
            When the new tab with your picture (or video) is open, you juste
            have to{" "}
            <span className={indexStyle.emphasis}>
              right click it and select "save as..."
            </span>
          </p>
        </section>
        <section className={indexStyle.panel}>
          <h3>What link is accepted ?</h3>
        </section>
      </div>
    </React.Fragment>
  )
}
