import React, { useState } from "react"
import { Link } from "gatsby"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Layout from "../components/layout"
import SEO from "../components/seo"

import IOSBadge from '../components/IOSBadge'
import IPhone from '../images/iphone.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faBook, /*faCalendarDay,*/ faCalendarWeek, faClock, faComments, faDumbbell, faFileExport, faGraduationCap, faLayerGroup, faMapMarker, faSearch, faStar, faUniversity, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

import GmailLoginImage from '../images/gmail.png'
import ClassesImage from '../images/classes.png'
import FinalsImage from '../images/finals.png'
import ARCImage from '../images/arc.png'
import ARCEventsImage from '../images/arcevents.png'
import V2LibrariesImage from '../images/v2libraries.png'
import V2FeedbackImage from '../images/v2feedback.png'
import SearchImage from '../images/v2search.png'
import CalendarImage from '../images/v2calendar.png'
import CourseInfoPage from '../images/courseinfo.png'
import NotificationsImage from '../images/notifications.png'

const features = [
  {
    name: "Gmail Secure Sign-In",
    image: GmailLoginImage,
    className: "feature-fa-oauth",
    fa: faGoogle
  },
  {
    name: "Blazing Fast Alerts When Classes Open",
    image: NotificationsImage,
    className: "feature-fa-image",
    fa: faBell
  },
  {
    name: "Search for Classes via WebSOC Integration",
    image: SearchImage,
    className: "feature-fa-info",
    fa: faSearch
  },
  {
    name: "Realtime Class Information",
    image: CourseInfoPage,
    className: "feature-fa-realtime",
    fa: faClock
  },
  {
    name: "Built-in Week Calendar",
    image: CalendarImage,
    className: "feature-fa-calendar",
    fa: faCalendarWeek
  },
  {
    name: "Today's Schedule",
    image: ClassesImage,
    className: "feature-fa-live",
    fa: faUniversity
  },
  {
    name: "Finals",
    image: FinalsImage,
    className: "feature-fa-info",
    fa: faUniversity
  },
  {
    name: "Library Availability Page",
    image: V2LibrariesImage,
    className: "feature-fa-book",
    fa: faBook
  },
  {
    name: "ARC Facilities Page",
    image: ARCImage,
    className: "feature-fa-arc",
    fa: faDumbbell
  },
  {
    name: "ARC Clubs & Events Page",
    image: ARCEventsImage,
    className: "feature-fa-arc-events",
    fa: faDumbbell
  },
  {
    name: "Built-in Feedback Form",
    image: V2FeedbackImage,
    className: "feature-fa-comments",
    fa: faComments
  },
]

const futureFeatures = [
  {
    name: "Built-in Map (Classes, Gyms, etc)",
    className: "feature-fa-map",
    fa: faMapMarker
  },
  {
    name: "RateMyProfessor Integration",
    className: "feature-fa-rmp",
    fa: faStar
  },
  {
    name: "Export Schedule to Google Calendar",
    className: "feature-fa-export",
    fa: faFileExport
  },
  {
    name: "Dining Info Page & Menus (?)",
    className: "feature-fa-dining",
    fa: faUtensils,
  },
  {
    name: "Study Rooms (?)",
    className: "feature-fa-graduation-cap",
    fa: faGraduationCap,
  },
  {
    name: "Multiple Schedules",
    className: "feature-fa-multiple-schedules",
    fa: faLayerGroup,
  },
]

const FeatureIcon = ({ icon }) => <span className="feature__icon"><FontAwesomeIcon icon={icon} /></span>

const FeatureSection = ({ title, features, className, setFeature }) =>
  <>
    <h3>{title}</h3>
    <ul className="features">
      {features.map(feature => <li key={feature.name} className={`${className} ${feature.className}`} onMouseOver={_ => setFeature(feature)}> <FeatureIcon icon={feature.fa} /> <span className="feature__text">{feature.name}</span></li>)}
    </ul>
  </>

const IndexPage = () => {
  const [feature, setFeature] = useState(features[2])

  return (
    <Layout>
      <SEO title="Home" keywords={[`uci`, `zottrail`, `websoc`, `scheduling`, `calendar`, `push notifications`, `libraries`, `zot trail`, `uc irvine`, `university of california, irvine`, `gyms`, `dining`]} />
      < div className="app-info" >
        <h1 className="zt-header">ZotTrail, for UC Irvine</h1>
        <p>
          ZotTrail is a community-driven mobile application for UCI students! Get notifications within 5 seconds of a class opening up and stay organized with our built-in calendar, schedule, and finals page. Keep track of library hours and see what clubs are going on at the ARC!
          <br /><br />
          Want to share feedback or submit a bug report? <a href="mailto:zottrail@gmail.com?subject=ZotTrail%20Feedback">Contact us</a>. Or read our <Link to="/policy/">Privacy Policy</Link>.
        </p>

        <FeatureSection title="Current Features (July 16th)" features={features} className="feature" setFeature={setFeature} />

        <IOSBadge />

        <Carousel className="my-carousel">
          {features.map(f => <div key={f.name}><img src={f.image} alt={f.name} /><p className="legend">{f.name}</p></div>)}
        </Carousel>

        <p>Look forward to more tools, updates, and patches on a bi-weekly basis.</p>

        <FeatureSection title="Backlog" features={futureFeatures} className="upcoming-feature" setFeature={setFeature} />
      </div>
      {/*<img className="android-badge" width="140" src={AndroidBadge} />*/}
      <div className="iphone">
        <img className="iphone-image" src={IPhone} alt="iphone template" />
        <img className="iphone-feature" src={feature.image} alt="current iphone feature" />
      </div>
    </Layout>
  )
}

export default IndexPage
