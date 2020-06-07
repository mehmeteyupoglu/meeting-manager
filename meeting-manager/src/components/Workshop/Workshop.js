import React from 'react';
import { StyledWorkshop, StyledButtons } from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'
import { connect } from "react-redux"
import { addWorkshop } from "../../state/ducks/appState/actions"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Workshop = (props) => {
    
    const { wNum } = props.appState
    const { event_workshop_price } = props.appState.workshops[0]
    const { addWorkshop } = props

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
                            $ {event_workshop_price*wNum}.00</p>
                            <button id="addWorkshop" onClick={addWorkshop}><p>+</p></button>
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
        appState: state.appReducer.appState
    }
}

const mapDispatchToProps = {
    addWorkshop
}

export default connect(mapStateToProps, mapDispatchToProps) (Workshop);
