import React from "react"
import { Link } from "gatsby"
import cuid from "cuid"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data: { allStrapiPost } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Posts</h1>
    {allStrapiPost.edges &&
      allStrapiPost.edges.map(({ node: { id, title, slug } }) => (
        <Link key={cuid()} to={`/${slug}/`}>
          {title}
        </Link>
      ))}
  </Layout>
)

export default IndexPage

export const query = graphql`
  query getPosts {
    allStrapiPost {
      edges {
        node {
          id
          title
          slug
          content
          forms {
            id
          }
        }
      }
    }
  }
`
