import React from "react"
import Layout from "../components/layout"

export default function About({ data }) {
  return (
    <Layout>
      {/* <h1>About {data.site.siteMetadata.title} Pandas Eating Lots</h1> */}
      <p>
        I am Beno-Charles DOKODJO, a data scientist living in Paris. I am
        currently working at Capgemini Invent, a consulting firm in Paris area.
        I graduated from Ensai in 2018.
      </p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
