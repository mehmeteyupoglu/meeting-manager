import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from "formik"



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
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input 
                type="firstName" 
                name="firstName" 
                id="firstName" 
                placeholder="First Name" 
                onChange={handleChange}
                value={values.firstName}    
                />

            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input 
                type="lastName" 
                name="lastName" 
                id="lastName" 
                placeholder="Last Name" 
                onChange={handleChange}
                value={values.lastName}    
                />

            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input 
                type="email" 
                name="email" 
                id="exampleEmail" 
                placeholder="with a placeholder" 
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
