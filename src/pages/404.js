
import Layout from "../components/layout"
import SEO from "../components/seo"


import React, { Component } from 'react'

export default class NotFoundPage extends Component {
  componentDidMount() {
    // window.location.replace("/");
  }

  render() {
    return (
      <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND11</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
    )
  }
}

