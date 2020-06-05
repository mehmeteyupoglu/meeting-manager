import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { connect } from "react-redux"
import { StyledAlert } from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { changeRadio } from "../../state/ducks/appState/actions"


const Step1 = (props) => {

    const { radio, studentAmount, regularAmount} = props.appState
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
                                    <button>
                                        <FontAwesomeIcon icon={faEdit} />
                                    </button>
                                </div>
                            </Label>
                        </FormGroup>
                    </StyledAlert>      
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        appState: state.reducers.appState
    }
}
const mapDispatchToProps = {
    changeRadio
}
export default connect(mapStateToProps, mapDispatchToProps)(Step1);
