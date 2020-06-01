import React, { Component } from 'react';
import {Step1, Step2, Step3} from "../../components"
import { Button } from "reactstrap"
import {StyledMain} from "./styles"

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
    
    componentDidUpdate() {
        console.log(this.state.step)
        console.log(this.state.radio)
    }

    render() {
        
        return ( 
            
                <div>
                    {
                        
                        this.state.step === 1 
                        || this.state.step === 2 
                        ? <StyledMain>
                        <h1>Registration Types & Fees</h1>
                        </StyledMain> 
                        : null  
                        
                    }
                    
                    {this.showStep()}
                    <div className="nextPrev">
                            <Button 
                            color="secondary" 
                            onClick={this.previous}
                            >
                            Previous
                            </Button>{' '}
                            <Button color="success" onClick={this.next} disabled={this.state.step > 3}>Next Step</Button>{' '}
                    </div> 
                </div> 
            
        );
    }
}

export default AddParticipant;


