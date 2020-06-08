import React from 'react';
import { StyledDetails } from "./styles"
import { connect } from "react-redux"

const AdditionalInfo = (props) => {
    const { event_registration_firstname, event_registration_lastname } = props.registration[0]
    const { event_workshop_title, event_workshop_price } = props.appState.workshops[0]
    return (
        <div>
            <StyledDetails>
                <h3>Additional Information</h3>
                <hr />
                <div className="attendees">
                        <div className="names">
                            {
                                event_workshop_title
                            }   
                        </div>
                        <div>
                            {
                                `$${event_workshop_price}.00`
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

export default connect(mapStateToProps)(AdditionalInfo);
