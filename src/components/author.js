import React from 'react'

import * as styles from './tags.module.css'

const Author = ({ author }) =>
  author?.length > 0 && (
    <small className={styles.tags}>
      {author.name.map((writer) => (
        <div key={writer} className={styles.tag}>
          {writer}
        </div>
      ))}
    </small>
  )

export default Author
