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
import { Helmet } from "react-helmet"
import { Card } from "antd"

const { location } = typeof window !== "undefined" && window
let isMobile
enquireScreen(b => {
  isMobile = b
})

export default class BlogPage extends React.Component {
  posts
  browserTitle = "Past events"
  seoDescription = "Oluulaa Past Events, Meetups"
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: typeof window !== `undefined` ? !location.port : null,
    }
  }
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const events = this.props.data.allMarkdownRemark.edges
    return (
      <Layout>
        <SEO title="Blog" />
        <Helmet>
          {/* <meta name="title" content={seoTitle} /> */}
          <meta name="description" content={this.seoDescription} />
          <title>{this.browserTitle}</title>
        </Helmet>

        <div className="meetup-container">
          <div className="page-header">
            <h1>Events</h1>
            <p>
              Here are some of the subjects we've covered in past events. If
              you're interested in participating by giving a talk, don't worry
              too much if we've touched on the subject before. New people join
              every day and there are a lot of subjects warranting a re-visit.
            </p>
          </div>
          <div className="article-container">
            {events.map(event => {
              let eventData = event.node.frontmatter
              return (
                <Card style={{ marginTop: "1.5em" }}>
                  <article>
                    <h2
                      className="meetup-title"
                      style={{ textAlign: "center" }}
                    >
                      {eventData.title}
                    </h2>
                    <div className="meetup-meta" style={{ marginTop: "1em" }}>
                      <p
                        className="meetup-metaField  meetup-metaField--date"
                        style={{ textAlign: "center" }}
                      >
                        <span>
                          <span className="meetup-label">
                            <b>Date:</b>
                          </span>{" "}
                          {eventData.formattedDate}
                        </span>
                        <span style={{marginLeft: '4em'}}>
                          <span className="meetup-label">
                            <b>Location:</b>
                          </span>{" "}
                          <a href={eventData.location.mapsLink}>{eventData.location.name}</a>
                        </span>
                      </p>
                      {/* <p className="meetup-metaField  meetup-metaField--location"></p> */}
                    </div>
                    <div className="presenters">
                      {eventData.presenters.map(presenter => {
                        return (
                          <div className="meetup-presenter">
                            <div className="meetup-presenterImageContainer">
                              <img
                                className="meetup-presenterImage"
                                src={presenter.image}
                              />
                              <span className="meetup-presenterName">
                                {presenter.name}
                              </span>
                            </div>
                            <div className="meetup-presenterInfo">
                              <h3 className="meetup-presenterTitle">
                                {presenter.presentationTitle}
                              </h3>
                              <p className="meetup-presenterText">
                                {presenter.text}
                              </p>
                              <ul className="meetup-presenterLinks">
                                {presenter.links &&
                                  presenter.links.map((link, index) => (
                                    <li
                                      key={index}
                                      className="meetup-presenterLinkItem"
                                    >
                                      <a
                                        className="meetup-presenterLink"
                                        href={link.linkURL}
                                      >
                                        {link.linkText}
                                      </a>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </article>
                </Card>
              )
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        frontmatter: { presenters: { elemMatch: { text: { ne: null } } } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            formattedDate: date(formatString: "MMMM Do YYYY @ h:mm A")
            rawDate: date
            presenters {
              name
              image
              text
              presentationTitle
              links {
                linkText
                linkURL
              }
            }
            location {
              name
              mapsLatitude
              mapsLink
              mapsLongitude
            }
          }
        }
      }
    }
  }
`
