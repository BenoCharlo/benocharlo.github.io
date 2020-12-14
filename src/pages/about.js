import React from "react"
import { graphql } from "gatsby"
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

export default function About({ data }) {
  return (
    <Layout>
      <H1> About me</H1>
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
        in 2018. When I am not working for Invent, I build my personal blog
        (still in progress). I am also upskilling a lot about cloud-ased
        architectures (AWS) and techniques in ethics and privacy in AI
        (differential privacy, federated learning, fairness, secure multiparty
        computation). I am a fan of Django, React.js frameworks for building
        end-to-end applications.
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
