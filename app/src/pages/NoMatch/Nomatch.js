import React from "react";
// import { withState } from "recompose";
import { Row, Container, Button } from 'reactstrap';
import "./style.css"

function NoMatch() {
    return (
        <Container>
            <div className="containerForNoMatch">
                <Row>
                    <h1 className="fourOnefour">404</h1>
                </Row>
                <Row>
                    <h1 className="titleNot">Looks like you took a wrong turn.</h1>
                </Row>
                <Row>
                    < button id="notFoundButton"> < a href="/" >Get Directions</a></button>
                </Row>
            </div>
        </Container >


    )
}
export default NoMatch;