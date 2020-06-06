import React from "react"
import { Link } from "gatsby"

const Header = ({}) => {
  return (
    <div>
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
