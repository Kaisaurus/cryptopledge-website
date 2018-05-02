import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarBurger,
  NavbarMenu,
  NavbarEnd,
  Title
} from 'bloomer'

export default class MainNavBar extends React.Component {
  state = {
    showMobileMenu: false
  }
  handleBurgerClick = () => {
    this.setState({ showMobileMenu: !this.state.showMobileMenu })
  }
  render() {
    const { showMobileMenu } = this.state
    return (
      <Navbar className="is-primary">
        <Container>
          <NavbarBrand>
            <Link className="navbar-item" to="/">
              <Title isSize={5}>Crypto Pledge</Title>
            </Link>

            <NavbarBurger
              isActive={showMobileMenu}
              onClick={this.handleBurgerClick}
            />
          </NavbarBrand>
          <NavbarMenu isActive={showMobileMenu}>
            <NavbarEnd>
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/pledge">
                Pledge
              </Link>
              <Link className="navbar-item" to="/research">
                Research
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
            </NavbarEnd>
          </NavbarMenu>
        </Container>
      </Navbar>
    )
  }
}
