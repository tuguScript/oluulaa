import React from "react"
import { Link } from "gatsby"
import { Icon } from "antd"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {
  Nav00DataSource,
  Banner30DataSource,
  Content110DataSource,
  Teams20DataSource,
  Footer10DataSource,
} from "../utils/data.source"
import { enquireScreen } from "enquire-js"
import Banner3 from "../components/banner"
import Content from "../components/content"
import Teams from "../components/team"
import CardWrapper from "../components/CardWrapper"

const { location } = typeof window !== "undefined" && window
let isMobile
enquireScreen(b => {
  isMobile = b
})

export default class BlogPage extends React.Component {
  posts
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: typeof window !== `undefined` ? !location.port : null,
    }
  }
  componentDidMount() {
    console.log(this.posts)
    this.posts = this.props.data.allMarkdownRemark.edges
  }

  render() {
    const posts = this.props.data.allMarkdownRemark.edges.map(edge => (
      <CardWrapper key={edge.node.id} post={edge.node} />
    ))
    return (
      <Layout>
        <SEO title="Blog" />
        <div className="overlay">
          <div className="content">
            <p className="icons">
              <a href="#"><Icon type="twitter" style={{ color: "white" }} /></a>
              <a href="#"><Icon type="facebook" style={{ color: "white" }} /></a>
              <a href="#"><Icon type="linkedin" style={{ color: "white" }} /></a>
              <a href="#"><Icon type="link" style={{ color: "white" }} /></a>
            </p>
            <h1>Featured first Post Here</h1>
            <p>By Tugi on Monday, 15 July 2019</p>
          </div>
        </div>
        <div className="container">
          <div className="column-1">
            <h3 style={{ marginTop: "1.5em" }}>Latest posts</h3>
          </div>
          <div className="column-2">{posts}</div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            thumbnail
            rating
          }
        }
      }
    }
  }
`
