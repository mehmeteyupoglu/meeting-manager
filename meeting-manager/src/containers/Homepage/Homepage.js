import React from 'react';
import { Details } from "../../components"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { StyledHome } from "./styles"

const Homepage = () => {
    return (

        <StyledHome>
            <div>
                <h1>Registration Page</h1>
                <Details />

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

export default Homepage;
