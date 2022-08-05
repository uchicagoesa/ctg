import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import * as styles from './hero.module.css'


const Hero = ({ title, tagline, hero, description}) => (

  <div className={styles.hero}>
    <div className={styles.details}>
   
      <h1>{title}</h1>
      {hero && (
      <GatsbyImage className={styles.image} alt={title} image={hero} />
    )}

     <div>
      <h2>{tagline}</h2>
      {description &&
       (<div className={styles.content}>{renderRichText(description)}</div>
      )}
      <a href="#events"><button>RSVP for a local event</button></a>
      </div>
    </div>

    
  </div>
  

)

export default Hero
