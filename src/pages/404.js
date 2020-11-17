import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function ErrorPage() {
  return (
    <div>
      <Header title="Ooops..." />
      <Link to="/">Back home now !</Link>
    </div>
  )
}
