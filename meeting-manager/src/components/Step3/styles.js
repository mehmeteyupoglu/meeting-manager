import Styled from "styled-components"

export const StyledWorkshop = Styled.div`

.tools {
    padding: 100px 0 10px; 
    color: #5ea2f7;
    display: flex; 
    align-items: stretch; 
    
}

h2 {
    font-size: 20px; 
    font-weight: 800; 
    margin-left: 10px;
    
}

#idTools {
    font-size: 25px; 
}

.workshop {
    border: 2px solid #5ea2f7; 
    border-radius: 2px;  
    h3 {
        font-size: 20px;
        font-weight: 800; 
        color: #4d5c65; 
        padding: 15px 15px 0; 

    }
    hr {
        width: 90%; 
    }

    div {
        display: flex; 
        justify-content: flex-end; 
        align-items: baseline
        p {
            margin: 0 10px; 
        }
    }
    
}

`