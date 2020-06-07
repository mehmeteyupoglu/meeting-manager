import React from 'react';
import { StyledDetails } from "./styles"
import TotalDetails from "../TotalDetails"
import AdditionalInfo from "../AdditionalInfo"
import RegistrationDetails from "../RegistrationDetails"

const Details = (props) => {
    
    return (
            <div>
                <StyledDetails>
                    <TotalDetails />
                    <RegistrationDetails />
                    <AdditionalInfo />
                </StyledDetails>
            </div>
    );
}

export default Details;
