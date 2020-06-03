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
        margin: 15px 35px 0; 
    }
    hr {
        width: 90%; 
    }

    div {
        display: flex; 
        justify-content: flex-end; 
        align-items: center; 
        margin: 0 32px 10px 0; 
        p {
            margin: 0 10px; 
        }
        button {
            display: flex; 
            justify-content: center; 
            align-items: center; 
            width: 20px; 
            height: 20px; 
            border: 1px; 
            border-radius: 2px; 
            p {
                color: green; 
            }
        }
    }
    
}

`