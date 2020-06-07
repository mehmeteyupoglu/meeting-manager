import React from 'react';
import { StyledDetails } from "./styles"
const AdditionalInfo = () => {
    return (
        <div>
            <StyledDetails>
                <h3>Additional Information</h3>
                <hr />
                <div className="attendees">
                        <div className="names">
                            hello    
                        </div>
                        <div>
                            world
                        </div>           
                    </div>
            </StyledDetails>
        </div>
    );
}

export default AdditionalInfo;
