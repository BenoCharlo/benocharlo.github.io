import React, { useEffect, useState } from "react"
import Header from "./header"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import MobileNav from "./mobilenav"

const LayoutWrapper = styled.div`
  margin: 0;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  padding: 15px;
  min-height: 100vh;
  h1 {
    margin-bottom: 3px;
  }
  ,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  li {
    transition: ${props => props.theme.transition};
    color: ${props => props.theme.textColor};
    background-color: ${props => props.theme.bgColor};
  }

  main {
    transition: ${props => props.theme.transition};
    background-color: ${props => props.theme.bgColor};
    width: 50vw;
    padding: 12px 0px 24px;
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    //align-items: center;
    // max-width: 10000px;
  }
`

export default function Layout({ children }) {
  let [mobileNavIsOpen, toggleMobileNav] = useState(false)

  const mobileNavAction = () => {
    toggleMobileNav(
      mobileNavIsOpen ? (mobileNavIsOpen = false) : (mobileNavIsOpen = true)
    )
  }

  // adds smooth scrolling
  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
  })
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
    // <div
    //   className="container"
    //   style={{ margin: `2rem auto`, maxWidth: 850, padding: `0 1rem` }}
    // >
    <LayoutWrapper>
      <SEO {...data.site.siteMetadata} />
      <Header />
      <MobileNav mobileNavIsOpen={mobileNavIsOpen} action={mobileNavAction} />
      <main>{children}</main>
    </LayoutWrapper>
    // </div>
  )
}
