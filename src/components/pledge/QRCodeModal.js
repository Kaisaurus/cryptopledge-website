import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardHeader,
  ModalCardTitle,
  ModalCardFooter,
  ModalClose
} from 'bloomer'
import QRCode from 'qrcode.react'

export default class QRCodeModal extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    hideQRCode: PropTypes.func.isRequired
  }
  escFunction = e => e.keyCode === 27 && this.props.hideQRCode()
  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false)
  }
  render() {
    const {
      value,
      isActive,
      organizationName,
      hideQRCode,
      cryptocurrency
    } = this.props
    return (
      <Modal isActive={isActive} onClick={hideQRCode}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>
              {organizationName}'s {cryptocurrency} address
            </ModalCardTitle>
          </ModalCardHeader>
          <ModalCardBody>
            {value.length > 0 && <QRCode value={value} level="H" />}
          </ModalCardBody>
          <ModalCardFooter />
        </ModalCard>
      </Modal>
    )
  }
}
