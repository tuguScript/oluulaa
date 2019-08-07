import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Icon } from "antd"

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  return (
    <Layout>
      <Helmet title={`${post.frontmatter.title}`} />
      <div className="blog-post-container">
        <div className="column-1">
          <div className="author-card">
            <a>
              <img src="https://pbs.twimg.com/profile_images/440571257906421760/YvCKDWrf_200x200.jpeg" />
            </a>
            <div>
              <h2 className="authorinfo">{post.frontmatter.author}</h2>
              <p className="author-description">Software Engineer</p>
              <p className="author-description">
                <a href="#">@twitter</a>
              </p>
            </div>
          </div>
        </div>
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <p style={{ marginTop: "1.5em" }}>
            By <a href="#">{post.frontmatter.author}</a>
          </p>
          <p className="date-social">
            {post.frontmatter.date}
            <span className="icons">
              <a href="#">
                <Icon type="twitter" />
              </a>
              <a href="#">
                <Icon type="facebook" />
              </a>
              <a href="#">
                <Icon type="linkedin" />
              </a>
              <a href="#">
                <Icon type="link" />
              </a>
            </span>
          </p>
          <article
            style={{ marginTop: "1.5em", color: "black" }}
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr style={{ marginTop: "1.5em" }} />
          <p className="date-social" style={{ marginTop: "1.5em" }}>
            {post.frontmatter.date}
            <span className="icons">
              <a href="#">
                <Icon type="twitter" />
              </a>
              <a href="#">
                <Icon type="facebook" />
              </a>
              <a href="#">
                <Icon type="linkedin" />
              </a>
              <a href="#">
                <Icon type="link" />
              </a>
            </span>
          </p>
          <hr style={{ margin: "1.5em 0px" }} />
        </div>
        <div className="column-3"></div>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
      }
    }
  }
`
