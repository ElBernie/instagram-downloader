import React from "react"
import { Link } from "gatsby"

import downloadInputStyles from "./style.module.css"
const instaPost = /(https?:\/\/(?:www\.)?instagram\.com\/([^/?#&]+)).*/g

export default class DownloadInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      typing: false,
      typingTimeout: 0,

      inputError: false,
      showError: false,
      alert: "",
    }
  }

  validateLink = event => {
    event.preventDefault()
    console.log("stop typing..")
    const url = this.state.value.split("?")[0]
    console.log(url)
    if (url.includes("/reel/")) {
      this.setState({
        inputError: false,
      })
      console.log("instapost")
    }
    if (url.includes("/p/")) {
      if (url.search(instaPost) !== -1) {
        console.log("INSTA POST")
        this.setState({
          inputError: false,
        })
      }
    } else {
      if (url.search(instaPost) !== -1) {
        console.log("insta profile")
        this.setState({
          inputError: false,
          showError: false,
        })
      } else {
        console.log("invalid")

        this.setState({
          alert: "Invalid link",
          inputError: true,
          showError: true,
        })
      }
    }
  }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div className={downloadInputStyles.container}>
        <div className={downloadInputStyles.downloader}>
          <form onSubmit={this.validateLink}>
            <input
              style={this.state.inputError ? { borderColor: "red" } : {}}
              type="url"
              value={this.state.value}
              onChange={event => this.handleChange(event)}
              placeholder={this.props.placeholder}
            />

            <input type="submit" value="download" />
          </form>
          <Link to="help" className={downloadInputStyles.help}>
            Need help ?
          </Link>

          <div
            className={`${downloadInputStyles.error} ${
              this.state.showError ? downloadInputStyles.animatedError : ""
            }`}
          >
            {this.state.alert}
          </div>
        </div>
      </div>
    )
  }
}
