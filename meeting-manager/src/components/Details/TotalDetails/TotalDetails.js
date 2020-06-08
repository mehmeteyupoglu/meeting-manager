import React from 'react'
import { connect } from "react-redux"
import { StyledDetails } from "./styles"

function TotalDetails(props) {
    console.log(props)
    const { workshops, radio, registration_types  } = props.appState
    const firstName = props.registration[0].event_registration_firstname
    const lastName = props.registration[0].event_registration_lastname
    const price = <h3 id="firstName">${
        (radio === "student" ? registration_types[0].event_registration_type_price  
        : registration_types[1].event_registration_type_price) + workshops[0].event_workshop_price
        }.00
    </h3> 

    
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
                                        <h3>{`${firstName} `} {`${lastName}`} </h3>
                               
                            }
                    </div>
                    <div>       
                             {
                                 price
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
