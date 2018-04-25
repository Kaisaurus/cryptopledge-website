import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import MainFooter from '../components/MainFooter'
import './bulmaswatch.scss'

const TemplateWrapper = ({ children }) => (
  <React.Fragment>
    <Helmet title="CryptoPledge - A commitment to positive impact" />
    {children()}
    <MainFooter />
  </React.Fragment>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
