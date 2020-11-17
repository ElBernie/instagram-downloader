import { Link } from "gatsby"
import React from "react"
import DownloadInput from "../components/DownloadInput"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/about">/about</Link>
      <Link to="/support">/support</Link>
      <Header title="Hello Gatsby" />

      <DownloadInput />
    </div>
  )
}
