import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import {
  Nav00DataSource,
  Banner30DataSource,
  Content110DataSource,
  Teams20DataSource,
  Footer10DataSource,
} from "../utils/data.source"
import { enquireScreen } from "enquire-js"
import Header from "./header"
import Footer from "../components/footer"
import "../less/antMotionStyle.less"


const { location } = window;
// if (typeof window !== `undefined`) {
// }

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

export default class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile,
      show: typeof window !== `undefined` ? !location.port : null,
    }
  }

  componentDidMount() {
    enquireScreen(b => {
      this.setState({ isMobile: !!b })
    })
    if (location.port) {
      setTimeout(() => {
        this.setState({
          show: true,
        })
      }, 500)
    }
  }

  render() {
    const children = (
      <div>
        <Header
          id="Nav0_0"
          key="Nav0_0"
          dataSource={Nav00DataSource}
          isMobile={this.state.isMobile}
        />
        {this.props.children}
        <Footer
          id="Footer1_0"
          key="Footer1_0"
          dataSource={Footer10DataSource}
          isMobile={this.state.isMobile}
        />
      </div>
    )
    return (
      <div>
        {this.state.show && children}
        {/* <Home /> */}
      </div>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
