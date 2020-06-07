import React from 'react';
import { StyledDetails } from "./styles"
import { connect } from 'react-redux';

const RegistrationDetails = (props) => {
    console.log(props)
    const { firstName, lastName } = props.registration[0]
    return (
        <div>
            <StyledDetails>
                <h3>Registration Details</h3>
                <hr />
                <div className="attendees">
                    <div className="names">
                        {
                            props.registration.map(item => {
                                return `${item.firstName} ${item.lastName}`
                            })
                        }     
                    </div>
                    <div>
                        {

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
