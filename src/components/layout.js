import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "./header"

export default function Layout({ children }) {
  return (
    <div
      className="container"
      style={{ margin: `1.5rem auto`, maxWidth: 850, padding: `0 1rem` }}
    >
      <Header />
      {children}
    </div>
  )
}
