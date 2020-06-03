import React, { Component } from 'react';
import {Step1, Step2, Step3} from "../../components"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import {StyledMain, StyledButtons} from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
class AddParticipant extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            step: 1, 
            radio: null, 
        }
    }

    next = () => {
        const {step, radio} = this.state
        radio && 
        this.setState({
            step: step + 1
        })
    }

    previous = () => {
        const {step} = this.state
        step > 1 &&
        this.setState({
            step: step - 1
        })
    }

    changeRadio = (e) => {
        const {value} = e.target
        this.setState({
            radio : value
        })
    }

    showStep = () => {
        const {step} = this.state
        const {changeRadio, next, previous} = this
        if (step === 1) {
            return (<Step1 
            step={step} 
            changeRadio={changeRadio}
            next={next}
            previous={previous}    
        />)
        }

        else if (step === 2) {
            return (<Step2     
        />)
        }

        else if (step === 3) {
            return (<Step3     
        />)
        }

    }

    render() {
        const {step} = this.state
        const {next, previous, showStep} = this
        return ( 
            
                <div>
                    {     
                        step === 1 
                        || step === 2 
                        ? <StyledMain>
                        <FontAwesomeIcon id="idIcon"icon={faIdCard} />
                                <h1>Registration Types & Fees</h1>
                        </StyledMain> 
                        : null     
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

export default AddParticipant;


