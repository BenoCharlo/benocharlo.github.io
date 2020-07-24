import React, { useEffect, useState, useContext } from "react"
import { ThemeContext } from "../utils/themeContext"
import Header from "./header"
import SEO from "../components/seo"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { ThemeProvider } from "styled-components"
import ThemeToggleBtn from "./themeToggle"
import MobileNav from "./mobilenav"

const LayoutWrapper = styled.div`
  margin: 0;
  transition: ${props => props.theme.transition};
  background-color: ${props => props.theme.bgColor};
  padding: 15px;
  min-height: 100vh;
  h1,
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
    margin: 5rem auto;
    width: 100%;
    padding: 12px 0px 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    max-width: 880px;
  }

  @media screen and (max-width: 1500px) {
    main {
      max-width: 700px;
    }
  }
`

export default function Layout({ children }) {
  let [mobileNavIsOpen, toggleMobileNav] = useState(false)

  const theme = useContext(ThemeContext)

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
    <ThemeProvider theme={theme.currentTheme}>
      <LayoutWrapper>
        <SEO {...data.site.siteMetadata} />
        <Header />
        <MobileNav mobileNavIsOpen={mobileNavIsOpen} action={mobileNavAction} />
        <main>{children}</main>
        {/* <ThemeToggleBtn /> */}
      </LayoutWrapper>
    </ThemeProvider>
  )
}
