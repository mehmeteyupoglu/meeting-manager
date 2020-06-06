import Styled from "styled-components"

export const StyledMain = Styled.div`

color: #5ea2f7; 
margin: 40px 0 30px; 
display: flex; 
align-items: stretch; 
 

h1 {
    font-size: 20px;
    font-weight: 800; 
    margin-left: 10px;  
}

#idIcon {
    font-size: 25px; 
    
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