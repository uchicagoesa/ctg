import React from 'react'

import * as styles from './tags.module.css'

const Id = ({ id }) =>
  id?.length > 0 && (
    <small className={styles.tags}>
      {id.map((identity) => (
        <div key={identity} className={styles.tag}>
          {identity}
        </div>
      ))}
    </small>
  )

export default Id
