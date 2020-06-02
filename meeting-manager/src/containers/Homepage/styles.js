import Styled from "styled-components"

export const StyledHome = Styled.div`

h1 {
    color: #5ea2f7;
    font-size: 20px;
    font-weight: 800; 
    margin: 50px 0 ;  
}

.amount-button {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
}

Button {
    height: 30px; 
}

.total-amount {
    display: flex;  
    flex-direction: column; 
    justify-content: center;
    align-items: center;   
    #checkout {
        font-weight: 700; 
        color: #ff7500; 
    }

    p:nth-of-type(1) {
        margin-left: 10px;   
      }
    
}

`