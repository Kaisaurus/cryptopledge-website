import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend
} from 'recharts'
import moment from 'moment'
import { cryptocurrenciesManual } from '../../util/static'

export default class CO2PerTransactionGraph extends Component {
  static propTypes = {
    CO2Data: PropTypes.array.isRequired,
    CO2DataStatus: PropTypes.string.isRequired,
    getCO2Data: PropTypes.func.isRequired
  }

  render() {
    const { CO2Data, CO2DataStatus, getCO2Data } = this.props
    CO2DataStatus === 'init' && getCO2Data()
    const data = CO2DataStatus === 'fulfilled' && CO2Data
    // Object.entries(CO2Data.btc).map(([date, value]) => ({ date, value }))
    return (
      <div>
        {CO2DataStatus === 'fulfilled' && (
          // <LineChart width={400} height={400} data={dataE}>

          //   <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          // </LineChart>
          <LineChart
            width={600}
            height={300}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              // tickFormatter={timeStr => moment(timeStr).format('HH:mm')}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="date"
              tickFormatter={date => date}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="value" stroke="#82ca9d" />
          </LineChart>
        )}
      </div>
    )
  }
}
