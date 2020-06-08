import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Moment from "react-moment"
import styled from "styled-components"

const BlogListWrapper = styled.div`
  transition: ${props => props.theme.transition};
  margin: 40px 0 25px;
  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    h2 {
      margin: 10px 0 10px;
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
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      margin: 0;
      color: purple;
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
      width: 142px;
      height: 47px;
      margin: -10px 0 15px;
      padding: 8px;
      background-color: ${props => props.theme.accentColor};
      transition: 0.3s;
      p {
        background-color: rgba(0, 0, 0, 0);
        color: black;
        margin: 0;
      }
      .rightArrow {
        height: 18px;
        .icon {
          transition: ${props => props.theme.transition};
          fill: ${props => props.theme.bgColor};
        }
      }
    }
  }
  &:hover {
    .readMore {
      box-shadow: 0 3px 9px #4d4d4d;
    }
  }
`

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Publications</h1>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <BlogListWrapper>
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>{node.frontmatter.title} </h2>
              <h4>
                Published:{" "}
                <Moment date={node.frontmatter.date} format="MMMM DD, YYYY" />
              </h4>
              <ul>
                <h5>{node.frontmatter.tags}</h5>
              </ul>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        </BlogListWrapper>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
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
