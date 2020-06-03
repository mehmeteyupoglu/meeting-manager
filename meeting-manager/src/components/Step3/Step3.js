import React, { Component } from 'react';
import {StyledWorkshop} from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'

class Step3 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        const {workshop, numberOfWorkshops, addWorkshop} = this.props
        console.log(this.props)
        return (
            <StyledWorkshop>
                <div>
                    <div className="tools">
                        <FontAwesomeIcon id="idTools" icon={faTools}/>
                        <h2>Workshop</h2>
                    </div>
                    <div className="workshop">
                        <h3>Deep Dive with Vue3</h3>
                        <hr />
                        <div>
                            <p> {
                                numberOfWorkshops > 0 && ({numberOfWorkshops}) 
                            }
                            $ {workshop}.00</p>
                            <button onClick={addWorkshop}><p>+</p></button>
                        </div>
                    </div>
                </div>
            </StyledWorkshop>
        );
    }
}

export default Step3;

