import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import * as styles from './navigation.module.css'
import ShieldBrown from '../img/shield-brown.svg'
import ShieldColumbia from '../img/shield-columbia.svg'
import ShieldUChicago from '../img/shield-uchicago.svg'
import ShieldVanderbilt from '../img/shield-vanderbilt.svg'
import Menu from "./menu"


class Navigation extends React.Component {

//const Navigation = () => (

render() {
  return (
<header>



  <nav role="navigation" className={styles.container} aria-label="Main">

  
   
      <a href="https://admission.brown.edu/" target="_blank"><img className={styles.icon} src={ShieldBrown} /></a>
      <a href="https://undergrad.admissions.columbia.edu/" target="_blank"><img className={styles.icon} src={ShieldColumbia} /></a>
      <a href="https://collegeadmissions.uchicago.edu/" target="_blank"><img className={styles.icon} src={ShieldUChicago} /></a>
      <a href="https://admissions.vanderbilt.edu/" target="_blank"><img className={styles.icon} src={ShieldVanderbilt} /></a>
   
    <button onClick={() => this.toggleMenu()}><FontAwesomeIcon icon={faBars} /></button>
<Menu ref={el => (this.childMenu = el)} />
  </nav>




  </header>

  
)


}

toggleMenu() {
  this.childMenu.open();
}
}


export default Navigation
