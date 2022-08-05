import React, { useImperativeHandle, useRef } from "react"
import { Link } from "gatsby"
import * as styles from "./menu.module.css"

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
      <div
        role="button"
        tabIndex="0"
        className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
        onClick={() => this.close()}
        onKeyDown={() => this.close()}
        >
        <Link to="/"><h1>Home</h1></Link>
        <Link to="/#details"><h1>Details</h1></Link>
        <Link to="/#events"><h1>Dates / Locations</h1></Link>
        <Link to="/#footer"><h1>Join Mailing Lists</h1></Link>
      </div>
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <Menu ref={menuRef} {...props} />
})