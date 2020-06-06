import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Moment from "react-moment"
import styled from "styled-components"

const BlogListWrapper = styled.div`
  border-bottom: 4px solid ${props => props.theme.textColor};
  transition: ${props => props.theme.transition};
  margin: 40px 0 25px;
  a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
    h2 {
      margin: 10px 0 10px;
      font-size: 1.8rem;
    }
    h3 {
      font-size: 1rem;
      font-weight: 300;
      margin: 8px 0 15px;
    }
    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      margin: 0;
      height: auto;
      .listingTag {
        margin: 0 8px 5px 0;
        font-size: 0.8rem;
        h5 {
          color: ${props => props.theme.accentColor};
        }
      }
    }
    h3 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 20px;
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
        color: ${props => props.theme.bgColor};
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
      <div>
        <h1>Publications</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <BlogListWrapper>
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title} </h2>
                <h3>
                  Published:{" "}
                  <Moment date={node.frontmatter.date} format="MMMM DD, YYYY" />
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          </BlogListWrapper>
        ))}
      </div>
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
