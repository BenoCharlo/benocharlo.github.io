import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import personalImage from "../images/My_photo.jpg"

const Image = styled.img`
  background-image: url(${personalImage});
  width: 290px;
  height: 360px;
  display: flex;
  margin: 0 105px 15px 300px;
`

export default function About({ data }) {
  return (
    <Layout>
      <h1 style={{ marginLeft: `350px` }}> About me</h1>
      <Image src={personalImage} />
      <p>
        I am Beno-Charles Kwassi DOKODJO, a data scientist living in Paris. I am
        currently working at{" "}
        <a
          style={{ textDecorationLine: `none` }}
          target="_blank"
          rel="noopener"
          href="https://www.capgemini.com/service/invent/"
        >
          Capgemini Invent
        </a>
        , a consulting firm in Paris. Thank you for reading my blog.
      </p>
      <p>
        I graduated from{" "}
        <a
          style={{ textDecorationLine: `none` }}
          target="_blank"
          rel="noopener"
          href="http://ensai.fr/"
        >
          ENSAI
        </a>{" "}
        in 2018. When I am not working for Invent, I compete on data science
        platforms most of my time, build my personal blog (still in progress). I
        am also upskilling a lot about quantitative trading and techniques in
        ethics in AI (differential privacy, federated learning, fairness, secure
        multiparty computation).
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
