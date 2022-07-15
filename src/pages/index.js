import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Hero from '../components/hero'
import EventPreview from '../components/event-preview'

class RootIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulEvent.nodes')

    return (
      <Layout location={this.props.location}>
        Push this stuff!
        <Hero
          // image={author.heroImage.gatsbyImageData}
          // title={author.name}
          // content={author.shortBio}
        />
        <EventPreview posts={posts} />
      </Layout>
    )
  }
}


export default RootIndex

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulEvent(sort: { fields: [date]}) {
      nodes {
        title
        date
        registration
        description {
          raw
        }
      }
    }
    
  }
`
