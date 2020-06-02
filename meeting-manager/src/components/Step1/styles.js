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