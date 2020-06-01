import React from 'react';
import { Details } from "../../components"
import { Button } from "reactstrap"
import { Link } from "react-router-dom"


const Homepage = () => {
    return (
        <div>
            <h1>Registration</h1>
            <Details />
            <Button color="secondary" tag={Link} to="/add-participant">Add Participant</Button>
        </div>
    );
}

export default Homepage;
