import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './bulmaswatch.scss'

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet title="CryptoPledge - A commitment to positive impact" />
    <section className="hero is-white">
      <div className="hero-head">
        <Navbar />
      </div>
    </section>
    {children()}
    <Footer />
  </React.Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
