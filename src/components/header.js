import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Header = ({ data }) => {
  return (
    <div style={{ margin: `1.5rem auto`, maxWidth: 1150, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h5 style={{ display: `inline` }}>🔅BenoCharlo 🔅</h5>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <Link to="/about">About</Link>{" "}
          <Link to="/certifications">Certifs</Link>
        </ul>
      </header>
    </div>
  )
}
export default Header
