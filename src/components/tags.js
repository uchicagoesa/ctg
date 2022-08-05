import React from 'react'

import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <small className={styles.tags}>
      tagger
      {/* {tags.map((tag) => (
        <div key={tag} className={styles.tag}>
          {tag}
        </div>
      ))} */}
    </small>
  )

export default Tags
