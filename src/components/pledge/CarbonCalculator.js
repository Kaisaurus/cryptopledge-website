import React, { Component } from 'react'
import { CardContent, Tabs, Tab, TabList, TabLink } from 'bloomer'
import PropTypes from 'prop-types'

export default class CarbonCalculator extends Component {
  static propTypes = {
    CarbonCalculatorByAddress: PropTypes.func.isRequired,
    CarbonCalculatorManual: PropTypes.func.isRequired
  }
  state = {
    method: 'manual'
  }
  render() {
    const {
      pledgeData,
      CarbonCalculatorByAddress,
      CarbonCalculatorManual
    } = this.props
    const { method } = this.state
    return (
      <React.Fragment>
        <Tabs>
          <TabList>
            {/* <Tab
              isActive={method === 'address'}
              onClick={() => this.setState({ method: 'address' })}
            >
              <TabLink>
                <span>By Address</span>
              </TabLink>
            </Tab> */}
            <Tab
              isActive={method === 'manual'}
              onClick={() => this.setState({ method: 'manual' })}
            >
              <TabLink>
                <span>Manual</span>
              </TabLink>
            </Tab>
          </TabList>
        </Tabs>
        <CardContent>
          <span className={method === 'manual' ? 'is-hidden' : ''}>
            <CarbonCalculatorByAddress />
          </span>
          <span className={method === 'address' ? 'is-hidden' : ''}>
            <CarbonCalculatorManual />
          </span>
        </CardContent>
      </React.Fragment>
    )
  }
}
