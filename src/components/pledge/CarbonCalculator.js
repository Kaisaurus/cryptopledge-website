import React, { Component } from 'react'
import { Tabs, Tab, TabList, TabLink } from 'bloomer'
import CarbonCalculatorByAddress from './CarbonCalculatorByAddress'
import CarbonCalculatorManual from './CarbonCalculatorManual'
import { CardContent } from 'bloomer/lib/components/Card/CardContent'

export default class CarbonCalculator extends Component {
  state = {
    method: 'address',
    cryptocurrency: 'btc'
  }

  render() {
    const { method } = this.state
    return (
      <React.Fragment>
        <Tabs>
          <TabList>
            <Tab
              isActive={method === 'address'}
              onClick={() => this.setState({ method: 'address' })}
            >
              <TabLink>
                <span>By Address</span>
              </TabLink>
            </Tab>
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
