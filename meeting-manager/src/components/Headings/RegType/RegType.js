import React from 'react';
import "./styles"
import {StyledHeading} from "./styles"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'

const RegType = () => {
    return (
        <StyledHeading>
            <div>
                <FontAwesomeIcon id="userId" icon={faIdCard} />
                <h1>Registration Types and Fees</h1>
            </div>
        </StyledHeading>
        
    );
}

export default RegType;
