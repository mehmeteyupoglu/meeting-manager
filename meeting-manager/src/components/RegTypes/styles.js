import Styled from "styled-components"
import { Alert } from "reactstrap"

export const StyledAlert = Styled(Alert)`

    background-color: white;  
    border: 2.5px solid #5ea2f7;
    color: #5ea2f7;
    height: 60px; 
    
    Label {
        display: flex; 
        justify-content: space-between;
    }

    .right-side {
        display: flex; 
        justify-content: space-between; 
        align-items: baseline; 
    }

    .right-side button {
        width: 35px; 
        height: 35px; 
        border-radius: 2px; 
        border: gray; 
        margin-left: 5px; 
        display: flex; 
        align-items: center; 
        justify-content: center;  
        color: #5ea2f7;
    }
   
`

export const StyledButtons = Styled.div`
position: fixed;
bottom: 10px;
width: 730px; 

hr {
    border-top: 2px solid #28a745;
}

.nextPrev {
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
}

Button {
    font-size: 12px; 
    font-weight: bold;
    padding: 8px 2px; 
}

#next-button {
    width: 130px; 
    display: flex; 
    flex-direction: row; 
    justify-content: space-between; 
    align-items: center;  
}

`