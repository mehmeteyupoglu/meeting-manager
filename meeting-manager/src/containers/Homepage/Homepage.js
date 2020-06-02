import React from 'react';
import { Details } from "../../components"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Homepage = () => {
    return (
        <div>
            <h1>Registration Page</h1>
            <Details />
            <Button color="secondary" tag={Link} to="/add-participant">
            <FontAwesomeIcon icon={faUserPlus} />
            {" "} Add New Participant
             </Button>
        </div>
    );
}

export default Homepage;
