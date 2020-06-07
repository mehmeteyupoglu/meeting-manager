import React from 'react';
import { Form, FormGroup, Label, Input, Button, FormFeedback } from 'reactstrap';
import { Formik } from "formik";
import { StyledInput, StyledButtons } from "./styles"; 
import * as Yup from "yup";
import { connect } from "react-redux"
import { register } from "../../state/ducks/registration/actions"
import {Link} from "react-router-dom"
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


let validationSchema = Yup.object().shape({
    firstName: Yup.string().required('Name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Enter a valid email'),
  });
  
let initialValues = {
    firstName: "", 
    lastName: "", 
    email: ""
  }


const RegForm = (props) => {
    return (
        <div>
           <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                    props.register(values)
        }}
        >
        {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form onSubmit={handleSubmit}>
            <StyledInput>
                <div className="names">
                    <FormGroup  >
                        <Label for="firstName">First Name</Label>
                        <Input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        placeholder="" 
                        onChange={handleChange}
                        value={values.firstName}   
                        invalid={errors.firstName} 
                        />
                        {
                        errors.firstName && <FormFeedback>{errors.firstName}</FormFeedback>
                        }
                    
                    </FormGroup>
                    <FormGroup >
                        <Label  for="lastName">Last Name</Label>
                        <Input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        placeholder=""
                        onChange={handleChange}
                        value={values.lastName} 
                        invalid={errors.lastName}    
                        />
                        {
                            errors.lastName && <FormFeedback>{errors.lastName}</FormFeedback>
                        }
                        
                    </FormGroup>
                </div>
            </StyledInput>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    id="exampleEmail" 
                    placeholder="" 
                    onChange={handleChange}
                    value={values.email} 
                    invalid={errors.email}   
                    />
                    {
                        errors.email && <FormFeedback>{errors.email}</FormFeedback>
                    }
                </FormGroup>

                <StyledButtons>
                        <hr id="my-hr" />
                        <div className="nextPrev">
                                <Button 
                                    color="secondary" 
                                    tag={Link}
                                    to="/step-1"
                                    >
                                    Previous
                                </Button>{' '}
                                
                                    <Button 
                                        id="next-button" 
                                        color="success"
                                        tag={Link}
                                        to="/step-3" 
                                        type="submit"
                                        onClick={() => props.register(values)} 
                                        >
                                        Next Step
                                        <FontAwesomeIcon id="arrowRight" icon={faArrowAltCircleRight} />
                                    </Button>{' '}        
                        </div> 
                    </StyledButtons>
        </Form>
                    
      )}                            
        </Formik>           
    </div>
    );
}

const mapDispatchToProps = {
    register
}
export default connect(null, mapDispatchToProps) (RegForm);
