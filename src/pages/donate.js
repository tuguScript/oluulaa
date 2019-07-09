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

const { location } = window;
let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
      show: !location.port,
    };
  }
  render() {
    return (
      <Layout>
        <SEO title="donate" />
        <h1>Donate</h1>
      </Layout>
    )
  }
}