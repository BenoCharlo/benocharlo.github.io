import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import personalImage from "../images/My_photo.jpg"

const Image = styled.img`
  background-image: url(${personalImage});
  width: 50%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
const H1 = styled.h1`
  font-size: 1.5em;
  text-align: center;
`

export default function Certifs({ data }) {
  return (
    <Layout>
      <H1> Certifications</H1>
      <Image src={personalImage} />
      <p>
        I am Beno-Charles Kwassi DOKODJO, a data scientist living in Paris. I am
        currently working at{" "}
        <a
          style={{ textDecorationLine: `none` }}
          target="_blank"
          rel="noopener noreferrer"
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
          rel="noopener noreferrer"
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
