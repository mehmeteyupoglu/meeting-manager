import React from 'react';
import { connect } from "react-redux"
import "./styles.js"
import {StyledDetails} from "./styles"


const Details = (props) => {
    console.log(props)
    const { workshop } = props.appState
    const { firstName, lastName} = props.registration
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
                                    <h3>{`${item.firstName} `} {item.lastName}</h3>
                                )
                            })
                        }
                    </div>
                    <div>
                        {
                            props.registration.map(item => {
                                return(
                                    <p id="firstName">AMOUNT</p>
                                    )
                            })
                        }
                    </div>
                           
                </div>  
            </div>
            
        </StyledDetails>
        
        
    );
}

const mapStateToProps = (state) => {
    return {
        registration: state.registration.registration, 
        appState: state.appReducer.appState
    }
}

export default connect(mapStateToProps)(Details);
