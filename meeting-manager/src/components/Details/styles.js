import Styled from "styled-components"

export const StyledDetails = Styled.div`

border: 1px solid rgb(177, 172, 172); 
    border-radius: 2px; 
    padding: 10px; 
    margin: 20px 0;
    min-height: 85px; 

.details-heading {
    font-size: 15px;  
    display: flex;
    justify-content: space-between; 
    
}

.attendees {
    div{
        display: flex; 
        flex-direction: column; 
    }
    font-size: 15px;  
    display: flex;  
    justify-content: space-between;

    h3 {
        font-size: 20px; 
        font-weight: 800; 
    }
    
}

`