import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from "formik"
import { StyledInput } from "./styles"



const Step2 = () => {
    return (
        <div>
        <Formik
        initialValues={{
            firstName: "", 
            lastName: "", 
            email: ""
        }}
        onSubmit={(values) => {
            console.log(values)
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
        </Form>
      )}       
        </Formik>
            
        </div>
    );
}

export default Step2;
