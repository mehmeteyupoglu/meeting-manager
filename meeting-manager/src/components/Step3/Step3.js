import React from 'react';
import {StyledWorkshop} from "./styles.js"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools } from '@fortawesome/free-solid-svg-icons'


const Step3 = () => {
    return (
        <StyledWorkshop>
            <div>
                <div className="tools">
                    <FontAwesomeIcon id="idTools" icon={faTools}/>
                    <h2>Workshop</h2>
                </div>
                <div className="workshop">
                    <h3>Deep Dive with Vue3</h3>
                    <hr />
                    <div>
                        <p>$</p>
                        <button>+</button>
                    </div>
                    
                </div>
            </div>
        </StyledWorkshop>
    );
}

export default Step3;
