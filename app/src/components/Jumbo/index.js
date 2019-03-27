import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import "./style.css";

const jumbo = (props) => {
  return (
    <div>
      <Jumbotron fluid>
        <Container fluid>
          ARE WE THERE YET?
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbo;
