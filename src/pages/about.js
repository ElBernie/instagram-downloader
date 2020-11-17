import { Link } from "gatsby"
import React from "react"
import Container from "../components/container"
import Header from "../components/header"

export default function About() {
  return (
    <Container>
      <Link to="/">Home</Link>

      <Header title="About Page" />
      <p>Hello about</p>
    </Container>
  )
}
