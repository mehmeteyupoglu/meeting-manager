import React from 'react';
import "./styles.js"; 
import { Jumbotron } from 'reactstrap';

const Header = () => {
    return (
        <div>
            <Jumbotron color="primary" >
                <h1>Vue Conf TR</h1>
                <p>CoZone  Ankara, Turkey  06.12.2020-06.12.2020</p>
                <br/>
                <hr className="my-2" />
            </Jumbotron>
        </div>     
     
    );
}

export default Header;
