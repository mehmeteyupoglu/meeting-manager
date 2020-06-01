import React from 'react';
import { Alert, FormGroup, Label, Input } from 'reactstrap';

const Step1 = (props) => {
    const {radio} = props
    const {changeRadio} = props
    return (
        <div>
                    <Alert color="primary">
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" 
                            name="student" 
                            value="student" 
                            onClick={changeRadio}  
                            checked={radio === "student"}
                            />{' '}
                            Student
                            
                            <p>45$</p>

                        </Label>
                        </FormGroup>
                    </Alert>
                    <Alert color="primary">
                        <FormGroup check>
                        <Label check>
                            <Input type="radio" 
                            name="regular" 
                            value="regular" 
                            onClick={changeRadio} 
                            checked={radio === "regular"}
                            />{' '}
                            Regular
                            
                            <p>35$</p>

                        </Label>
                        </FormGroup>
                    </Alert>
                    <hr className="my-2" />
                     
        </div>
    );
}

export default Step1;
