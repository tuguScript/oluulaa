import React from "react"
import { Card } from "antd"

const { Meta } = Card

export default class CardWrapper extends React.Component {
  componentDidMount() {
    console.log(this.props.post)
  }

  render() {
    const { excerpt, frontmatter, fields } = this.props.post
    return (
      <a href={fields.slug}>
        <Card bordered={true} hoverable style={{ marginTop: "1.5em" }}>
          <h2 style={{ color: "rgba(0, 0, 0, 0.5)" }}>{frontmatter.title}</h2>
          <Meta description={excerpt} style={{ marginTop: "1em" }} />
          <p style={{ color: "rgba(0, 0, 0, 0.5)", marginTop: "1.5em" }}>
            By {frontmatter.author} on {frontmatter.date}
          </p>
        </Card>
      </a>
    )
  }
}
