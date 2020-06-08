import Styled from "styled-components"

export const StyledDetails = Styled.div`

margin: 50px 0 50px; 

h3 {
    font-size: 16px; 
    font-weight: 800; 
    margin: 0
} 

.details-heading {
    font-size: 15px;  
    display: flex;
    justify-content: space-between;     
}

.attendees {
    font-size: 15px;
    font-weight: 200;   
    display: flex;  
    justify-content: space-between;

    div{
        display: flex; 
        flex-direction: column; 
    }
    
}
`