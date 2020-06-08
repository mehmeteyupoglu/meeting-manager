import React from 'react';
import { StyledWorkshop, StyledButtons } from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import { register, addWorkshop } from "../../state/ducks/registration/actions"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Workshop = (props) => {
    console.log(props)
    const { wNum, workshops } = props.appState
    const { addWorkshop, register } = props

    return (
        <div>
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
                            <p>{
                                wNum > 0 && `(${wNum}) X `
                            }</p>
                            <p> 
                            $ {workshops[0].event_workshop_price*wNum}.00</p>
                            <button id="addWorkshop" onClick={() => {addWorkshop(workshops)}}><p>+</p></button>
                        </div>
                    </div>
                </div>
            </StyledWorkshop>
            <StyledButtons>
                        <hr id="my-hr" />
                        <div className="nextPrev">
                                <Button 
                                    color="secondary" 
                                    tag={Link}
                                    to="/step-2"
                                    >
                                    Previous
                                </Button>{' '}
                                
                                    <Button 
                                        id="next-button" 
                                        color="success"
                                        tag={Link}
                                        to="/"  
                                        >
                                        Submit
                                        <FontAwesomeIcon id="arrowRight" icon={faArrowAltCircleRight} />
                                    </Button>{' '}
                                       
                        </div> 
                    </StyledButtons>   
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        appState: state.appReducer.appState, 
        registration: state.registration.registration
    }
}

const mapDispatchToProps = {
    addWorkshop, register
}

export default connect(mapStateToProps, mapDispatchToProps) (Workshop);
