import React from "react"
import Header from "./header"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            url
            image
          }
        }
      }
    `
  )
  return (
    <div
      className="container"
      style={{ margin: `2rem auto`, maxWidth: 850, padding: `0 1rem` }}
    >
      <SEO {...data.site.siteMetadata} />
      <Header />
      {children}
    </div>
  )
}
