import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'

const EventPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <h2>{post.title}</h2>
            <p>{post.date}</p>
              <div>
                {post.description?.raw && renderRichText(post.description)}
              </div>
              <p><a href={post.registration} target="_blank">Register &raquo;</a>
              </p>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default EventPreview
