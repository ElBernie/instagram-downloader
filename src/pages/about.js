import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function About() {
  return (
    <div>
      <Link to="/">Home</Link>

      <Header title="About Page" />
      <p>Hello about</p>
    </div>
  )
}
