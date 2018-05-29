import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Container, Title, Button } from 'bloomer'
import coolEarthLogo from '../../../static/img/coolearth_logo.svg'
import QRCodeModal from './QRCodeModal'

const organizations = [
  {
    name: 'Cool Earth',
    addresses: [
      {
        cryptocurrency: 'Bitcoin (BTC)',
        address: '1EiGFTC2avw8CpfTUbVgUyaNQHFanebHyG'
      },
      {
        cryptocurrency: 'Ethereum (ETH)',
        address: '0x3c8cB169281196737c493AfFA8F49a9d823bB9c5'
      },
      {
        cryptocurrency: 'Bitcoin Cash (BTH)',
        address: '14qqTCX4iCagmyuYF4Ymkbpeyz7yWwkf6S'
      },
      {
        cryptocurrency: 'Litecoin (LTC)',
        address: 'LNVkMYhaJuJE8i6vxUBr1E3ght44tw7JJn'
      }
    ]
  }
]

const defaultState = {
  QRCodeIsActive: false,
  QRCodeValue: '',
  QRCodeCryptocurrency: '',
  organizationName: ''
}

export default class Pledge extends Component {
  static propTypes = {}

  state = defaultState

  revealQRCode = (organizationName, QRCodeValue, QRCodeCryptocurrency) => e => {
    this.setState({
      organizationName,
      QRCodeIsActive: true,
      QRCodeValue,
      QRCodeCryptocurrency
    })
  }
  hideQRCode = e => {
    this.setState(defaultState)
  }
  render() {
    const {
      organizationName,
      QRCodeValue,
      QRCodeIsActive,
      QRCodeCryptocurrency
    } = this.state
    return (
      <Container hasTextAlign="centered">
        <Title isSize={4}>
          At the moment Cool Earth is the only organisation which accepts
          cryptocurrency donations{' '}
        </Title>
        <table className="table is-narrower is-hoverable">
          <thead>
            <tr>
              <th>Organization</th>
              <th>Cryptocurrency</th>
              <th>Address</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {organizations.map((organization, i) => {
              return organization.addresses.map((item, i) => {
                return (
                  <tr key={i}>
                    {i === 0 && (
                      <React.Fragment>
                        <td rowSpan={organization.addresses.length}>
                          <img src={coolEarthLogo} />
                        </td>
                      </React.Fragment>
                    )}

                    <td>{item.cryptocurrency}</td>
                    <td>{item.address}</td>
                    <td>
                      <Button
                        isColor="primary"
                        onClick={this.revealQRCode(
                          organization.name,
                          item.address,
                          item.cryptocurrency
                        )}
                      >
                        reveal QR code
                      </Button>
                    </td>
                  </tr>
                )
              })
            })}
          </tbody>
        </table>
        <QRCodeModal
          value={QRCodeValue}
          isActive={QRCodeIsActive}
          hideQRCode={this.hideQRCode}
          cryptocurrency={QRCodeCryptocurrency}
          organizationName={organizationName}
        />
      </Container>
    )
  }
}
