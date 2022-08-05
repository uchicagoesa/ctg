import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Details from '../components/details'
import EventPreview from '../components/event-preview'


class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulCtgEvent.nodes');
    const [blog] = get(this, 'props.data.allContentfulCtgHero.nodes');
    const [details] = get(this, 'props.data.allContentfulCtgDetails.nodes');
return (

    
      <Layout>

        <Hero
          title={blog.title}
          hero={blog.heroImage.gatsbyImageData}
          tagline={blog.tagLine}
          description={blog.description}
        />
        <Details 
          title={details.title}
          content={details.content}

        />
       
        <EventPreview posts={posts} />
      </Layout>
      )

      
  }

  
  
}

export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulCtgHero(
      filter: { id: { eq: "1a699fd9-7008-5ade-951e-814384665c3d" } }){
      nodes {
        title
        id
        tagLine
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    },
    allContentfulCtgDetails(
      filter: {id: {eq: "0318a1cb-4e5a-54fa-b88e-ae310f4d82d7"}}){
      nodes {
        title
        content {
          raw
        }
      }

    },

     allContentfulCtgEvent(sort: { fields: [date]}) {
      nodes {
        title
        date
        time
        location
        registration
        region
        
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          raw
        }
      }
    }
  }
`