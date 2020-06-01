import React from 'react';
import {Header, Main} from "./components"
import { Container, Row, Col } from 'reactstrap';


function App() {
  return (
    
    <Container className="themed-container" > 
      <Row>
          <Col sm="12" md={{ size: 8, offset: 2 }}>
            <Header />
            <Main />
          </Col>
      </Row>
    </Container>

  );
}

export default App;
