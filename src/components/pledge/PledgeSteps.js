import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class componentName extends Component {
  static propTypes = {
    steps: PropTypes.array.isRequired,
    currentStep: PropTypes.number.isRequired
  }

  render() {
    const { currentStep, steps } = this.props
    return (
      <React.Fragment>
        {steps.map((step, i) => {
          return (
            <div
              key={i}
              className={`step-item ${
                currentStep > i + 1
                  ? 'is-completed'
                  : currentStep === i + 1 ? 'is-active' : ''
              }`}
            >
              <div className="step-marker">{i + 1}</div>
              <div className="step-details">
                <p className="step-title">{step}</p>
              </div>
            </div>
          )
        })}
        {/* <div className={`step-item ${currentStep > 1 ? 'is-completed' : 'is-active'}`}>
          <div className="step-marker">1</div>
          <div className="step-details">
            <p className="step-title">Calculate CO2e impact</p>
          </div>
        </div>
        <div
          className={`step-item ${
            step > 2 ? (step === 2 ? 'is-active' : '') : 'is-completed'
          }`}
        >
          <div className="step-marker">2</div>
          <div className="step-details">
            <p className="step-title">Choose Organisation</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-marker">3</div>
          <div className="step-details">
            <p className="step-title">Pledge</p>
          </div>
        </div>
        <div className="step-item">
          <div className="step-marker">4</div>
          <div className="step-details">
            <p className="step-title">Share</p>
          </div>
        </div> */}
      </React.Fragment>
    )
  }
}
