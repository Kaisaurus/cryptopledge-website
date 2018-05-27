import React, { Component } from 'react'
import PropTypes from 'prop-types'
import QRCode from 'qrcode.react'
import { Container, Title, Button } from 'bloomer'
import coolEarthLogo from '../../../static/img/coolearth_logo.svg'

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

export default class Pledge extends Component {
  static propTypes = {}

  render() {
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
              <th>Accepted Cryptocurrency</th>
              <th>Address</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {organizations.map((organization, i) => {
              return organization.addresses.map((item, i) => {
                return (
                  <tr>
                    {i === 0 && (
                      <React.Fragment>
                        <td rowSpan={organization.addresses.length}>
                          <img src={coolEarthLogo} />
                          Cool Earth
                        </td>
                      </React.Fragment>
                    )}

                    <React.Fragment key={i}>
                      <td>{item.cryptocurrency}</td>
                      <td>{item.address}</td>
                      <td>
                        <Button isColor="primary">reveal QR code</Button>
                      </td>
                    </React.Fragment>
                  </tr>
                )
              })
            })}
          </tbody>
        </table>
        {/* <QRCode value="boo" level="H" /> */}
      </Container>
    )
  }
}
