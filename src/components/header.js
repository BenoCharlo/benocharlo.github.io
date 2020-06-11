import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Linkedin from "../images/svg/LinkedinSVG"
import Github from "../images/svg/GithubSVG"
import fadeInUpward from "../styles/_animations/fadeInUpward"
import styled from "styled-components"

const HeaderLinks = styled.ul`
  transition: ${props => props.theme.transition};
  .a {
    animation: ${fadeInUpward} 1s;
    transition: 0.2s;
  }
  .a:hover {
    transoform: translateY(-10px);
  }
`

export default function Header() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            authorLinkedIn
            authorGithub
          }
        }
      }
    `
  )

  return (
    <div>
      <header style={{ marginBottom: `1.5rem`, color: `black` }}>
        {/* <ul style={{ listStyle: `none`, marginLeft: 0 }}> */}
        <HeaderLinks style={{ listStyle: `none`, marginLeft: 0 }}>
          <Link to="/" style={{ textDecorationLine: `none` }}>
            <span role="img" aria-label="sunlight">
              🔅
            </span>
            BenoCharlo{" "}
          </Link>{" "}
          <a
            target="_blank"
            href={data.site.siteMetadata.authorLinkedIn}
            aria-label="My LinkedIn profile"
            rel="noopener"
          >
            <Linkedin />
          </a>{" "}
          <a
            target="_blank"
            href={data.site.siteMetadata.authorGithub}
            rel="noopener"
            aria-label="My Github page"
          >
            <Github />
          </a>
          <ul style={{ listStyle: `none`, float: `right` }}>
            <Link to="/about" style={{ textDecorationLine: `none` }}>
              About
            </Link>{" "}
            <Link to="/certifications" style={{ textDecorationLine: `none` }}>
              Certifs
            </Link>
          </ul>
        </HeaderLinks>
      </header>
    </div>
  )
}
