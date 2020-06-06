import Styled from "styled-components"
export const StyledInput = Styled.div`

.names {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

input[type=text] {
    width: 350px; 
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
    
 
}

#arrowRight {
    font-size: 15px;
    margin-left: 30px;
}

`