import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Formik } from "formik";
import { StyledInput } from "./styles"; 
import * as Yup from "yup";

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

const Step2 = (props) => {
    return (
        <div>
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
            console.log(values);
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
                        />
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
                        />
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
                    />
                </FormGroup>
                <Button type="submit">Add</Button>
        </Form>
      )}       
        </Formik>
            
        </div>
    );
}

export default Step2;
