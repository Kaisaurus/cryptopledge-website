import React from 'react'
import Link from 'gatsby-link'

export default class Navbar extends React.Component {
  state = {
    isActive: false
  }
  toggleMenu = state => {
    this.setState({ isActive: state })
  }
  render() {
    const { isActive } = this.state
    return (
      <nav className="navbar is-primary">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <h2>Crypto Pledge</h2>
            </Link>

            <a
              className="navbar-burger burger"
              onClick={() => this.toggleMenu(!isActive)}
            >
              <span />
              <span />
              <span />
            </a>
          </div>
          <div className={isActive ? 'is-active' : '' + ' navbar-menu'}>
            <div className="navbar-end">
              <Link
                className="navbar-item"
                to="/about"
                onClick={() => this.toggleMenu(false)}
              >
                About
              </Link>
              <Link
                className="navbar-item"
                to="/pledge"
                onClick={() => this.toggleMenu(false)}
              >
                Pledge
              </Link>
              <Link
                className="navbar-item"
                to="/research"
                onClick={() => this.toggleMenu(false)}
              >
                Research
              </Link>
              <Link
                className="navbar-item"
                to="/blog"
                onClick={() => this.toggleMenu(false)}
              >
                Blog
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
