import React from 'react';
import { Details } from "../../components"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { StyledHome } from "./styles"
import { connect } from "react-redux"

const Homepage = (props) => {
    
    return (
        <StyledHome>
            <div>
                <h1>Registration Page</h1>
                {
                    props.registration.map(item => {
                        return (<Details />) 
                    })
                }
                <div className="amount-button">
                    <Button color="secondary" tag={Link} to="/add-participant">
                        <FontAwesomeIcon icon={faUserPlus} />
                        {" "} Add New Participant
                    </Button>
                    <div className="total-amount">
                        <p>TOTAL</p>
                        <p id="checkout">000.00 $</p>
                    </div>
                </div> 
                <hr />
            </div>
        </StyledHome>
    );
}

const mapStateToProps = (state) => {
    return {
        appState: state.appReducer.appState, 
        registration: state.registration.registration
    }
}

export default connect(mapStateToProps)(Homepage);
