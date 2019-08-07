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
import DonationSection from "../components/donationSection"
import Event from "../components/Event"

const fakeEventData = {
  formattedDate: "August 3rd 2019 @ 5:30 PM",
  location: {
    name: "UCSF Mission Bay",
    mapsLatitude: 37.7674321,
    mapsLink:
      "https://www.google.com/maps/place/Genentech+Hall/@…xeaa83e6b468eddf1!8m2!3d37.7672548!4d-122.3923029",
    mapsLongitude: -122.3924247,
  },
  presenters: [],
  rawDate: "2019-10-03T17:30:00.000Z",
  title: "Finding your ideal career path with Tess & Sa",
}

const { location } = typeof window !== "undefined" && window
let isMobile
enquireScreen(b => {
  isMobile = b
})

export default class IndexPage extends React.Component {
  latestEvent
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: typeof window !== `undefined` ? !location.port : null,
    }
  }

  render() {
    this.latestEvent = this.props.data.allMarkdownRemark.edges[0].node.frontmatter
    return (
      <Layout>
        <SEO title="oluulaa.io" />
        {/* TODO:  Banner (Sliding) */}
        <Banner3
          id="Banner3_0"
          key="Banner3_0"
          dataSource={Banner30DataSource}
          isMobile={this.state.isMobile}
        />
        {/* About section*/}
        <Content
          id="Content11_0"
          key="Content11_0"
          dataSource={Content110DataSource}
          isMobile={this.state.isMobile}
        />
        {/* Upcoming Event */}
        {new Date(this.latestEvent.rawDate).getTime() > new Date().getTime() ? (
          <Event event={this.latestEvent} />
        ) : null}

        {/* TODO:  introduce Mentorship program (3 sections)  */}

        <Teams
          id="Teams2_0"
          key="Teams2_0"
          dataSource={Teams20DataSource}
          isMobile={this.state.isMobile}
        />
        <DonationSection />
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
