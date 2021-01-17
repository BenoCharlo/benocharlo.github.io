import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import styled from "styled-components"
import RightArrow from "../images/svg/RightArrowSVG"
import indexImage from "../images/landing_page_imgs/lome-plage.jpg"

const IndexImage = styled.div`
  background-image: url(${indexImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  ${"" /* width: 900px; */}
  height: 1000px;

  @media screen and (max-height: 800px) {
    height: 800px;
  }

  @media screen and (max-height: 500px) {
    height: 500px;
  }
`

const BlogListWrapper = styled.div`
  background-color: ${props => props.theme.bgColor};
  transition: ${props => props.theme.transition};
  margin: 20px 0 25px;
  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    h2 {
      margin: 5px 0 10px;
      font-size: 1.8rem;
      color: black;
    }
    h3 {
      font-size: 1rem;
      font-weight: 300;
      margin: 8px 0 15px;
    }
    h4 {
      font-size: 0.9rem;
      margin: 8px 0 15px;
      color: black;
    }
    h5 {
      font-size: 0.85rem;
      margin: 3px 0 15px;
      color: black;
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      color: purple;
      margin-bottom: 5px;
      height: auto;
      .listingTag {
        font-size: 0.8rem;
        h5 {
          color: red;
        }
      }
    }
    p {
      margin-bottom: 20px;
      color: black;
    }
    .readMore {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      width: 102px;
      height: 37px;
      margin: -10px 0 -10px;
      padding: 8px;
      background-color: lightgray;
      transition: 0.3s;
      p {
        background-color: rgba(0, 0, 0, 0);
        color: black;
        margin: 0;
        font-size: 0.85rem;
      }
      .rightArrow {
        height: 15px;
        .icon {
          transition: ${props => props.theme.transition};
          fill: ${props => props.theme.bgColor};
        }
      }
    }
  }
  &:hover {
    .readMore {
      box-shadow: 0 1px 4px #4d4d4d;
    }
  }
`

export default function Home({ data }) {
  return (
    <div>
      <div></div>
      <IndexImage src={indexImage} />
      <div>
        <Layout>
          <h1>Posts</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <BlogListWrapper>
              <div key={node.id}>
                <Link to={node.fields.slug}>
                  <h2>{node.frontmatter.title} </h2>
                </Link>
                <h4>Published: {node.frontmatter.date}</h4>
                {/* <h5>{node.frontmatter.tags}</h5> */}
                <p>{node.frontmatter.description}</p>
              </div>
              <Link to={node.fields.slug}>
                <div className="readMore">
                  <p>Read more</p>
                  <RightArrow />
                </div>
              </Link>
            </BlogListWrapper>
          ))}
        </Layout>
      </div>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        url
        image
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            tags
            description
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
