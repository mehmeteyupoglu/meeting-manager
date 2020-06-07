import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { connect } from "react-redux"
import { Formik } from "formik"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import { changeRadio } from "../../state/ducks/appState/actions"
import { Link } from "react-router-dom"
import { StyledAlert, StyledButtons } from "./styles.js"

let initialValues = {
    name: "", 
}

const RegTypes = (props) => {

    const { radio, registration_types} = props.appState
    const { changeRadio } = props

    return (
        <div>
            <Formik 
                initialValues={initialValues}
                onSubmit={(values) => {
                    console.log(`Values for step1 ===>  ${values}`)
            }} 
            validator={() => ({})}           
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
                                    <p>$ {registration_types[0].event_registration_type_price}.00</p>
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
                                    <p>$ {registration_types[1].event_registration_type_price}.00</p>
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
                                        type="submit"
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

const mapStateToProps = (state) => {
    return {
        appState: state.appReducer.appState
    }
}
const mapDispatchToProps = {
    changeRadio
}

export default connect(mapStateToProps, mapDispatchToProps) (RegTypes);
