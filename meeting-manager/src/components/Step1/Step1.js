import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { StyledAlert } from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

const Step1 = (props) => {
    
    const {radio, changeRadio, studentAmount, regularAmount} = props
    console.log(radio)
    return (
        <div>
                <StyledAlert>
                        <FormGroup check>
                        <Label >
                            <Input type="checkbox" 
                            name="student" 
                            value="student" 
                            onClick={changeRadio}  
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
                            onClick={changeRadio} 
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

export default Step1;
