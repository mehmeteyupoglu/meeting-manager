import React from 'react';
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from "react-redux"
import { StyledAlert, StyledButtons } from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { previous, changeRadio } from "../../state/ducks/appState/actions"
import {Link} from "react-router-dom"

const RegTypes = (props) => {

    const { radio, studentAmount, regularAmount, step} = props.appState
    const { changeRadio } = props

    return (
        <div>
           <StyledAlert>
                        <FormGroup check>
                            <Label >
                                <Input type="checkbox" 
                                name="student"
                                value="student" 
                                onClick={(e) => {
                                    changeRadio(e.target.value)
                                    }}  
                                checked={radio === "student"}
                                />{' '}
                                Student
                                
                                <div className="right-side">
                                    <p>$ {studentAmount}.00</p>
                                    <button>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </div>
                            </Label>
                        </FormGroup>
                        </StyledAlert>
                        <StyledAlert>
                    
                        <FormGroup check>
                            <Label >
                                <Input type="checkbox" 
                                name="regular" 
                                value="regular" 
                                onClick={(e) => {
                                    changeRadio(e.target.value)
                                    }}  
                                checked={radio === "regular"}
                                />{' '}
                                Regular
                                
                                <div className="right-side">
                                    <p>$ {regularAmount}.00</p>
                                    <button type="submit">
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </div>
                            </Label>
                        </FormGroup>
                    </StyledAlert>   
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
                                        tag={Link}
                                        to="/step-2"  
                                        >
                                        Next Step
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
    changeRadio
}

export default connect(mapStateToProps, mapDispatchToProps) (RegTypes);
