import React from "react"
import containerStyle from "./index.css"

export default class Container extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className={containerStyle.page}>{this.props.children}</div>
  }
}
