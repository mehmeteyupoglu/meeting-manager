import React, { Component } from 'react';
import { connect } from "react-redux"
import {Step1, Step2, Step3} from "../../components"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import {StyledMain, StyledButtons} from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { next, previous, changeRadio } from "../../state/ducks/appState/actions"

class AddParticipant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            step: 1, 
            radio: true, 
            studentAmount: 30, 
            regularAmount: 45, 
            workshop: 50,
            numberOfWorkshops: 0, 
        }
    }

    showStep = () => {
        const {step, numberOfWorkshops, workshop} = this.props.appState
        const { addWorkshop } = this.props.appState
        
        if (step === 1) {
            return <Step1 />
        }
        else if (step === 2) {
            return <Step2 />
        }

        else if (step === 3) {
            return <Step3 />
        }
    }

    addWorkshop = () => {
        const {numberOfWorkshops} = this.state

        this.setState({
            numberOfWorkshops: numberOfWorkshops + 1
        })
    }

    render() {
        const {step} = this.props.appState
        const {next, previous} = this.props
        const {showStep} = this
        
        return ( 
                <div>
                    {     
                        step === 1 
                        || step === 2 ? 
                        <StyledMain>
                            <FontAwesomeIcon id="idIcon" icon={faIdCard} />
                                <h1>Registration Types & Fees</h1>
                        </StyledMain> 
                        : 
                        null     
                    }
                    
                    {showStep()}
                    <StyledButtons>
                        <hr id="my-hr" />
                        <div className="nextPrev">
                                <Button 
                                    color="secondary" 
                                    onClick={previous}
                                    tag={Link}
                                    to="/"
                                    >
                                    Previous
                                </Button>{' '}

                                <Button 
                                    id="next-button" 
                                    color="success" 
                                    onClick={next} 
                                    disabled={step > 3}
                                    type={
                                        step === 2 && "submit"
                                    }
                                    >
                                    Next Step
                                    <FontAwesomeIcon id="arrowRight" icon={faArrowAltCircleRight} />
                                </Button>{' '}       
                        </div> 
                    </StyledButtons>
                </div>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        appState: state.appReducer.appState
    }
}

const mapDispatchToProps = {
    next, 
    previous, 
    changeRadio
}

export default connect(mapStateToProps, mapDispatchToProps)(AddParticipant);


