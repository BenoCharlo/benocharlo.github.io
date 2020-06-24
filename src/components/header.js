import React, { useEffect, useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Linkedin from "../images/svg/LinkedinSVG"
import Github from "../images/svg/GithubSVG"
import fadeInUpward from "../styles/_animations/fadeInUpward"
import styled from "styled-components"
import "../styles/hamburgers.css"

const HeaderWrapper = styled.header`
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  background-color: white;
  transition: background-color ${props => props.theme.transition},
    box-shadow 0.3s;
  box-shadow: ${props => (props.isScrolled ? "0px 0px 8px #4d4d4d" : "none")};
  display: flex;

  .navContainer {
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0.5rem auto;
    width: 50%;
    
      a{
        font-size: 1.2rem;
        font-weight: 200;
        text-decoration: none;
        outline: none;        
      }
      a+a {
        margin-left: 5px;
      }
      .activeElement{
        animation: ${fadeInUpward} "0.5s";
        transition: 0.2s;
        &:hover {
          transform: translateY(-10px)
        }
      }
      .activeText{
        border-bottom: 3px solid black 
        // ${props => props.theme.textColor};
      }
      h2 {
        // color: black;
        // ${props => props.theme.textColor};
        font-size: 0.563rem;
        text-align: center;
        letter-spacing: 4.4px;
        // margin: 0;
      }
    }
    nav {
      margin: 40px 0 0 370px;
      margin-right: 0.5rem auto;
      ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
        li {
          margin-right: 0;
          list-style-type: none;
          justify-content: space-around;
          a {
            font-family: "Helvetica", "sans-serif";
            font-weight: 800;
            font-size: 1.2rem;
            letter-spacing: 0.5px;
            text-decoration: none;
            padding: 0 2px 6px;
            border-bottom: 1.5px solid transparent;
            margin: 0;
          }
          a:hover {
            border-bottom: 1.5px solid black
            // ${props => props.theme.textColor};
          }
          .activePage {
            border-bottom: 1.5px solid black
            // ${props => props.theme.textColor};
          }
        }
      }
    }
  }

  @media (max-width: 980px) {
    .navContainer {
      nav {
        display: none;
      }
    }
  }
  @media (min-width: 880px) {
    height: 80px;
    .navContainer {
      height: 80px;
      #logo {
        width: 205px;
        height: auto;
        .headerLogoSVG {
          transition: ${props => props.theme.transition};
          fill: ${props => props.theme.textColor};
          width: 100%;
        }
        h2 {
          font-size: 0.69rem;
          letter-spacing: 5.8px;
        }
      }
    }
  }
`

export default function Header() {
  let [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 30 ||
        document.documentElement.scrollTop > 30
      ) {
        setIsScrolled((isScrolled = true))
      } else {
        setIsScrolled((isScrolled = false))
      }
    })
  }, [])

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
      <HeaderWrapper isScrolled={isScrolled}>
        <div className="navContainer">
          <Link to="/" acitveClassName="activeText">
            <span role="img" aria-label="sunlight">
              🔅
            </span>
            BenoCharlo{" "}
          </Link>{" "}
          <a
            className="activeElement"
            target="_blank"
            href={data.site.siteMetadata.authorLinkedIn}
            aria-label="My LinkedIn profile"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>{" "}
          <a
            className="activeElement"
            target="_blank"
            href={data.site.siteMetadata.authorGithub}
            rel="noopener noreferrer"
            aria-label="My Github page"
          >
            <Github />
          </a>
          <nav>
            <ul>
              <li>
                <Link to="/about" activeClassName="activePage">
                  About
                </Link>{" "}
              </li>
            </ul>
          </nav>
        </div>
      </HeaderWrapper>
    </div>
  )
}
