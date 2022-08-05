import React from 'react'
import { Link } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Container from './container'
import icons from '../img/ctg-icons.svg'
import * as styles from './details.module.css'


const Details = ({title, content}) => (
 
 <section id="details" className='details'>
 <div className={styles.details} >
 
 <h3>{title}</h3>
 
    {content &&
       (<div><p>{renderRichText(content)} </p>
       <img src={icons} /></div>
       
      )}
     
 </div>
 
 </section>
)

export default Details
