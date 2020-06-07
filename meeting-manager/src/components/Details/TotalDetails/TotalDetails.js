import React from 'react'
import { connect } from "react-redux"
import { StyledDetails } from "./styles"

function TotalDetails(props) {
    const { workshop, radio, registration_types  } = props.appState
    return (
        <StyledDetails>    
            <div>
                <div className="details-heading">
                    <p>Registration Details for</p>
                    <p>AMOUNT</p>    
                </div>
                <div className="attendees">
                    <div>
                            {
                                props.registration.map(item => {
                                    return(
                                        <h3>{`${item.firstName} `} {`${item.lastName} - ${radio === "student" ? registration_types[0].event_registration_type_title  
                                            : registration_types[1].event_registration_type_title}`} </h3>
                                    )
                                })
                            }
                    </div>
                    <div>
                            {
                                props.registration.map(item => {
                                    return(
                                        <h3 id="firstName">${
                                            radio === "student" ? registration_types[0].event_registration_type_price  
                                            : registration_types[1].event_registration_type_price
                                        }.00
                                        </h3>
                                        )
                                })
                            }
                    </div>           
                </div> 
            </div>
        </StyledDetails>
    )
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration.registration, 
        appState: state.appReducer.appState
    }
}

export default connect(mapStateToProps)(TotalDetails)
