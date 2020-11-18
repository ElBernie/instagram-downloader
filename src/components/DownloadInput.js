import React from "react"

const instaPost = /(https?:\/\/(?:www\.)?instagram\.com\/([^/?#&]+)).*/g

export default class DownloadInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "",
      typing: false,
      typingTimeout: 0,
    }
  }

  validateLink = event => {
    event.preventDefault()
    console.log("stop typing..")
    const url = this.state.value.split("?")[0]
    console.log(url)
    if (url.includes("/p/")) {
      if (url.search(instaPost) !== -1) {
        console.log("INSTA POST")
      }
    } else {
      if (url.search(instaPost) !== -1) {
        console.log("insta profile")
      } else {
        console.log("invalid")
      }
    }
  }
  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.validateLink}>
          <input
            type="url"
            value={this.state.value}
            onChange={event => this.handleChange(event)}
            placeholder={this.props.placeholder}
          />
          <input type="submit" value="download" />
        </form>
      </div>
    )
  }
}
