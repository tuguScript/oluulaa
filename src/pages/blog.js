import React from "react"
import { Link } from "gatsby"

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
      <Card key={edge.node.id} post={edge.node} />
    ))
    return (
      <Layout>
        <SEO title="Blog" />
        <h1>hi</h1>
        {posts}
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

class Card extends React.Component {
  render() {
    const { excerpt, frontmatter } = this.props.post
    return (
      <div>
        <h2><a href={frontmatter.path}>{frontmatter.title}</a></h2>
        <p>{excerpt}</p>
      </div>
    )
  }
}
