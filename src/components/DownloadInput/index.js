import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import ClipLoader from "react-spinners/ClipLoader"

import downloadInputStyles from "./style.module.css"

const instaPost = /(https?:\/\/(?:www\.)?instagram\.com\/([^/?#&]+)).*/g

export default class DownloadInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      typing: false,
      typingTimeout: 0,
      loading: false,
      inputError: false,
      showError: false,
      showSuccess: false,
      alert: "",
    }
  }

  validateLink = event => {
    event.preventDefault()
    this.setState({
      inputError: false,
      showError: false,
      showSuccess: false,
      loading: true,
    })
    const url = this.state.value.split("?")[0]
    console.log(url)
    if (url.includes("/reel/")) {
      this.setState({
        inputError: false,
        showError: false,
        showSuccess: true,
      })
      console.log("instapost")
    }
    if (url.includes("/p/")) {
      if (url.search(instaPost) !== -1) {
        console.log("INSTA POST")
        this.setState({
          inputError: false,
          showError: false,
          showSuccess: true,
        })
      }
    } else {
      if (url.search(instaPost) !== -1) {
        console.log("insta profile")
        this.setState({
          inputError: false,
          showError: false,
          showSuccess: true,
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

            <div
              className={`${downloadInputStyles.submit} `}
              onClick={this.validateLink}
            >
              {this.state.loading ? (
                <ClipLoader size={30} color={"white"} loading={true} />
              ) : (
                "Download"
              )}
            </div>
          </form>
          <Link to="help" className={downloadInputStyles.help}>
            Need help ?
          </Link>

          <div
            className={`${downloadInputStyles.error} ${
              this.state.showError ? downloadInputStyles.animatedError : ""
            } ${
              this.state.showSuccess ? downloadInputStyles.animatedSuccess : ""
            }`}
          >
            {this.state.alert}
          </div>
        </div>
      </div>
    )
  }
}
