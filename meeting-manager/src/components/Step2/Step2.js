import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Formik } from "formik"



const Step2 = () => {
    return (
        <div>
        <Formik
        initialValues={{
            name: "", 
            lastName: "", 
            email: ""
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
        <Form>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="firstName" name="firstName" id="firstName" placeholder="First Name" />
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input type="lastName" name="lastName" id="lastName" placeholder="Last Name" />
            </FormGroup>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
        </Form>
      )}       
        </Formik>
            
        </div>
    );
}

export default Step2;
