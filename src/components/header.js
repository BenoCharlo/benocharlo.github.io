import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textDecorationLine: `none` }}>
          <span role="img" aria-label="light">
            🔅
          </span>
          BenoCharlo{" "}
          <span role="img" aria-label="light">
            🔅
          </span>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <Link to="/about" style={{ textDecorationLine: `none` }}>
            About
          </Link>{" "}
          <Link to="/certifications" style={{ textDecorationLine: `none` }}>
            Certifs
          </Link>
        </ul>
      </header>
    </div>
  )
}
export default Header
