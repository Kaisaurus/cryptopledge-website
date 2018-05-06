import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode.react'

export default class Pledge extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <QRCode value="boo" level="H" />
      </div>
    )
  }
}
