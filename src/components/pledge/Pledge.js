import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode.react'
import { Container, Title } from 'bloomer'

const dummy = {}

export default class Pledge extends Component {
  static propTypes = {}

  render() {
    return (
      <Container hasTextAlign="centered">
        <Title size={2}>You can donate to the followng address </Title>
        <QRCode value="boo" level="H" />
      </Container>
    )
  }
}
