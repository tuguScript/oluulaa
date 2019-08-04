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
} from '../utils/data.source';
import { enquireScreen } from 'enquire-js';
import Banner3 from '../components/banner'
import Content from '../components/content'
import Teams from '../components/team'

const { location } = typeof window !== 'undefined' && window
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: typeof window !== `undefined` ? !location.port : null
    };
  }
  render() {
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
        {/* TODO:  Events (card sliding) */}

        {/* TODO:  introduce Mentorship program (3 sections)  */}




        <Teams
          id="Teams2_0"
          key="Teams2_0"
          dataSource={Teams20DataSource}
          isMobile={this.state.isMobile}
        />
        {/* TODO: Donation */}
      </Layout>
    )
  }
}