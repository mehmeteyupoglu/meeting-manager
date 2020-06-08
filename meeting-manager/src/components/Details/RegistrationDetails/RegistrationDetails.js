import React from 'react';
import { StyledDetails } from "./styles"
import { connect } from 'react-redux';

const RegistrationDetails = (props) => {
    console.log(props)
    const { event_registration_firstname, event_registration_lastname } = props.registration[0]
    const { event_workshop_price } = props.appState.workshops[0]
    const { workshop, radio, registration_types  } = props.appState
    const firstName = props.registration[0].event_registration_firstname
    const lastName = props.registration[0].event_registration_lastname
    return (
        <div>
            <StyledDetails>
                <h3>Registration Details</h3>
                <hr />
                <div className="attendees">
                    <div className="names">
                        {
                             `${event_registration_firstname} ${event_registration_lastname} - ${radio === "student" ? registration_types[0].event_registration_type_title  
                                            : registration_types[1].event_registration_type_title}`
                        }     
                    </div>
                    <div>
                        
                        {
                            `$ ${radio === "student" ? registration_types[0].event_registration_type_price  
                                            : registration_types[1].event_registration_type_price}.00`
                        }
                    </div>           
                </div> 
            </StyledDetails>
        </div>
    );
}


const mapStateToProps = (state) => {
    return {
        appState: state.appReducer.appState, 
        registration: state.registration.registration
    }
}
export default connect(mapStateToProps)(RegistrationDetails);
