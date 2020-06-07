import Styled from "styled-components"

export const StyledDetails = Styled.div`

.details-heading {
    font-size: 15px;  
    display: flex;
    justify-content: space-between;     
}

.attendees {
    font-size: 15px;  
    display: flex;  
    justify-content: space-between;

    div{
        display: flex; 
        flex-direction: column; 
    }

    h3 {
        font-size: 20px; 
        font-weight: 800; 
    }

    #firstName {
        font-weight: 700; 
        color: #ff7500;  
    }
   
    #checkout {
        font-weight: 700; 
        color: #ff7500; 
    }   
.names {
    display: flex; 
    flex-direction: column; 
} 
}
`