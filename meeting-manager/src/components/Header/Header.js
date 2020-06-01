import React from 'react';
import "./styles.js"; 
import { Jumbotron } from 'reactstrap';
import {StyledHeader} from "./styles"

const Header = () => {
    return (
        <div>
        <StyledHeader>
            <Jumbotron >
                <h1>Vue Conf TR</h1>
                <p>CoZone  Ankara, Turkey  06.12.2020-06.12.2020</p>
                <br/>
            </Jumbotron>
        </StyledHeader>
        </div>     
     
    );
}

export default Header;
