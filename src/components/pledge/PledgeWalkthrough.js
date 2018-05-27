import React, { Component } from 'react'
import CarbonCalculator from './CarbonCalculator'
import Pledge from './Pledge'
import Share from './Share'
import PledgeSteps from './PledgeSteps'
import { Card, CardHeader, CardContent } from 'bloomer'
import { CardFooter } from 'bloomer/lib/components/Card/Footer/CardFooter'
import { Button } from 'bloomer/lib/elements/Button'
import PropTypes from 'prop-types'

const steps = [
  'Calculate CO2e impact',
  // 'Choose Organisation',
  'Pledge',
  'Share'
]

export default class PledgeWalkthrough extends Component {
  static propTypes = {
    CarbonCalculatorByAddress: PropTypes.func.isRequired,
    CarbonCalculatorManual: PropTypes.func.isRequired,
    ChooseOrganisation: PropTypes.func.isRequired
  }
  state = {
    currentStep: 1
  }
  handelNextStep = () => {
    this.state.currentStep < steps.length &&
      this.setState(prevState => ({
        currentStep: prevState.currentStep + 1
      }))
  }
  handelPrevStep = () => {
    this.state.currentStep > 1 &&
      this.setState(prevState => ({
        currentStep: prevState.currentStep - 1
      }))
  }
  jumpToStep = i => event => {
    event.preventDefault()
    this.setState({ currentStep: i })
  }
  render() {
    const {
      pledgeData,
      CarbonCalculatorByAddress,
      organizations,
      CarbonCalculatorManual,
      ChooseOrganisation
    } = this.props
    const { currentStep } = this.state

    return (
      <React.Fragment>
        <div className="steps" id="steps">
          <PledgeSteps
            currentStep={currentStep}
            jumpToStep={this.jumpToStep}
            steps={steps}
          />
          <div className="steps-content">
            <Card>
              {currentStep === 1 && (
                <CarbonCalculator
                  pledgeData={pledgeData}
                  CarbonCalculatorByAddress={CarbonCalculatorByAddress}
                  CarbonCalculatorManual={CarbonCalculatorManual}
                />
              )}
              {/* {currentStep === 2 && (
                <ChooseOrganisation organizations={organizations} />
              )} */}
              {currentStep === 2 && <Pledge />}
              {currentStep === 3 && <Share />}

              {/* <div className="step-content has-text-centered">
                <h1 className="title is-4">Your account is now created!</h1>
              </div> */}
              <CardFooter>
                <div className="steps-actions">
                  <div className="steps-action">
                    <Button onClick={this.handelPrevStep}>Previous</Button>
                  </div>
                  <div className="steps-action">
                    <Button onClick={this.handelNextStep}>Next</Button>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
