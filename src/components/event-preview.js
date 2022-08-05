import React from 'react'
// import { Link } from 'gatsby'
// import { GatsbyImage } from 'gatsby-plugin-image'
// import { renderRichText } from 'gatsby-source-contentful/rich-text'
import moment from 'moment';

import Container from './container'
// import Tags from './tags'
import * as styles from './event-preview.module.css'
// import { reduce } from 'lodash';


const EventPreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null


  return (
    <section id="events" className="events">
        
    <Container id='geoius'>
    <h3>Dates / Locations</h3>
    </Container>

    <Container>
      <h4>Southern Region</h4>
      <ul className={styles.eventList}>
        {posts.map((post) => {
          if((post.region) == "Southern Region"){
            return (
            <li key={post.slug}>
            <h5>{post.title}</h5>

            {(() => {
          const options = post.title;
            
          if(options.includes("FL")){
            //console.log(options)
            return (<small>*Deans Panel</small>);
          }
        })()}

            <p><b>Date:</b> {moment(post.date).format('MMMM Do YYYY')}</p>
            <p><b>Time:</b> {post.time}</p>
            <p><b>Location:</b> {post.location}</p>
            {/* <p><b>Region:</b> {post.region}</p> */}
              {/* <div>
                {post.description?.raw && renderRichText(post.description)}
              </div> */}
              <button className="event-register"><a href={post.registration} target="_blank">RSVP</a>
              </button>
            </li>
            )
          }} )}</ul>
      </Container>

    <Container>
    <h4>Southwest</h4>
      <ul className={styles.eventList}>
        {posts.map((post) => {
          if((post.region) == "Southwest (🚫 Texas)"){
            return (
            <li key={post.slug}>
            <h5>{post.title}</h5>
            <p><b>Date:</b> {moment(post.date).format('MMMM Do YYYY')}</p>
            <p><b>Time:</b> {post.time}</p>
            <p><b>Location:</b> {post.location}</p>
            {/* <p><b>Region:</b> {post.region}</p> */}
              {/* <div>
                {post.description?.raw && renderRichText(post.description)}
              </div> */}
              <button className="event-register"><a href={post.registration} target="_blank">RSVP</a>
              </button>
            </li>
            )
          }} )}</ul>
      </Container>
     
      <Container>
      <h4>Texas</h4>

      <ul className={styles.eventList}>
        {posts.map((post) => {
          if((post.region) == "Texas"){
            return (
            <li key={post.slug}>
            <h5>{post.title}</h5>
            <p><b>Date:</b> {moment(post.date).format('MMMM Do YYYY')}</p>
            <p><b>Time:</b> {post.time}</p>
            <p><b>Location:</b> {post.location}</p>
            {/* <p><b>Region:</b> {post.region}</p> */}
              {/* <div>
                {post.description?.raw && renderRichText(post.description)}
              </div> */}
              <button className="event-register"><a href={post.registration} target="_blank">RSVP</a>
              </button>
            </li>
            )
          }} )}</ul>
      </Container>
      <Container>
      <h4>Pacific Northwest</h4>

      <ul className={styles.eventList}>
        {posts.map((post) => {
          if((post.region) == "Pacific Northwest"){
            return (
            <li key={post.slug}>
            <h5>{post.title}</h5>
            <p><b>Date:</b> {moment(post.date).format('MMMM Do YYYY')}</p>
            <p><b>Time:</b> {post.time}</p>
            <p><b>Location:</b> {post.location}</p>
            {/* <p><b>Region:</b> {post.region}</p> */}
              {/* <div>
                {post.description?.raw && renderRichText(post.description)}
              </div> */}
              <button className="event-register"><a href={post.registration} target="_blank">RSVP</a>
              </button>
            </li>
            )
          }} )}</ul>
      </Container>

      

      

      <Container>
    <h4>Virtual Sessions</h4>
      <ul className={styles.eventList}>
        {posts.map((post) => {
          if((post.region) == "Virtual Events"){
            return (
            <li key={post.slug}>
            <h4>{post.title}</h4>
            <p><b>Date:</b> {moment(post.date).format('MMMM Do YYYY')}</p>
            <p><b>Time:</b> {post.time}</p>
            <p><b>Location:</b> {post.location}</p>
            {/* <p><b>Region:</b> {post.region}</p> */}
              {/* <div>
                {post.description?.raw && renderRichText(post.description)}
              </div> */}
              <button className="event-register"><a href={post.registration} target="_blank">RSVP</a>
              </button>
            </li>
            )
          }} )}</ul>
      </Container>



         
    </section>
  )
}

export default EventPreview
