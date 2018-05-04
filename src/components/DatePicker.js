import React, { Component } from 'react'
// import bulmaCalendar from 'bulma-calendar/dist/bulma-calendar.min'
import ReactDatePicker from 'react-datepicker'
import moment from 'moment'

import 'react-datepicker/dist/react-datepicker.css'

export default class DatePicker extends Component {
  state = {
    startDate: moment()
  }
  handleChange = date => {
    this.setState({
      startDate: date
    })
  }
  render() {
    console.log(moment())
    // const datePicker = new bulmaCalendar(this.datePickerElem, {
    //   startDate: new Date(), // Date selected by default
    //   dateFormat: 'yyyy-mm-dd', // the date format `field` value
    //   lang: 'en', // internationalization
    //   overlay: false,
    //   closeOnOverlayClick: true,
    //   closeOnSelect: true,
    //   // callback functions
    //   onSelect: null,
    //   onOpen: null,
    //   onClose: null,
    //   onRender: null
    // })
    return (
      <React.Fragment>
        {/* <input ref={this.datePickerElem} class="input" type="text" /> */}
        <ReactDatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </React.Fragment>
    )
  }
}
