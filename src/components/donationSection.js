import React from "react"
import { Button } from "antd"
import "../less/antMotionStyle.less"

class DonationSection extends React.PureComponent {
  render() {
    return (
      <div id="donation" className="donate-container">
        <h1>{"We are 501c3 pending non-profit organization"}</h1>
        <Button
          type="primary"
          className="donate-button"
          target="_blank"
          href="https://venmo.com/Oluulaa-Oluulaa"
        >
          {"Support us"}
        </Button>
      </div>
    )
  }
}

export default DonationSection
