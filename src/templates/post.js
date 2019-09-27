import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({
  data: {
    strapiPost: { id, slug, content },
  },
}) => {
  return (
    <Layout>
      <div>
        <h1>
          #{id}: {slug}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    strapiPost(slug: { eq: $slug }) {
      id
      slug
      content
      forms {
        id
      }
    }
  }
`
