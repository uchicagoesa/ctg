import React from 'react'
import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <section id="footer">
  <Container as="footer">
    <div className={styles.container} >
      Sign up for our mailing lists: &nbsp;&nbsp;
      
      <a target="_blank" href="https://apply.college.brown.edu/register/?id=ba6e1b28-15de-43f1-8f7c-4444c7958180">Brown</a>&nbsp;&nbsp;
      <a target="_blank" href="https://apply.college.columbia.edu/register/request">Columbia</a>&nbsp;&nbsp;
      <a target="_blank" href="https://prospects.uchicago.edu/register/?id=43a61f54550842e3a7539edb90d99402">UChicago</a>&nbsp;&nbsp;
      <a target="_blank" href="https://admissions.vanderbilt.edu/request/">Vanderbilt</a>

    </div>
  </Container>
  </section>
)

export default Footer
