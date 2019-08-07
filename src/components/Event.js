import React from "react"
import TweenOne from "rc-tween-one"
import OverPack from "rc-scroll-anim/lib/ScrollOverPack"
import QueueAnim from "rc-queue-anim"
import { Row, Col } from "antd"
import { isImg } from "../utils/utils"
import Map from "./map"

class Event extends React.Component {
  componentDidMount() {
    console.log(this.props.event)
  }

  render() {
    const event = this.props.event
    return (
      <div>
        <OverPack>
          <QueueAnim type="bottom" key="ul" leaveReverse></QueueAnim>
          <TweenOne
            animation={{ y: "+=30", opacity: 0, type: "from" }}
            key="copyright"
          >
            <h1 style={{ marginTop: "1.5em" }}>Upcoming Event</h1>
            <h2 className="meetup-title" style={{ textAlign: "center" }}>
              {event.title}
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
                  {event.formattedDate}
                </span>
                <span style={{ marginLeft: "4em" }}>
                  <span className="meetup-label">
                    <b>Location:</b>
                  </span>{" "}
                  <a href={event.location.mapsLink}>{event.location.name}</a>
                </span>
              </p>
              {/* <p className="meetup-metaField  meetup-metaField--location"></p> */}
            </div>
            <div className="meetup-container">
              <div className="presenters">
                {event.presenters.map(presenter => {
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
                        <p className="meetup-presenterText">{presenter.text}</p>
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
            </div>
            <div style={{ height: "300px", margin: "0 auto" }}>
              <Map
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBTxauB_VWpo0_8hWELlE3pN59uuHzxD-8&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                link={event.location.mapsLink}
                latitude={event.location.mapsLatitude}
                longitude={event.location.mapsLongitude}
              />
            </div>
          </TweenOne>
        </OverPack>
      </div>
    )
  }
}

export default Event
