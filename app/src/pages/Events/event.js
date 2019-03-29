import React from "react";
import Input from "../../components/Forms/input";
import Button from "../../components/button/button";
export function RecipeList({ children }) {
    return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function RecipeListItem({
    title,
    ingredients,
}) {
    return (
        <li className="list-group-item">
            <Container>
                <Row>
                    <Col size="xs-4 sm-2">
                    </Col>
                    <Col size="xs-8 sm-9">
                        <h3>{title}</h3>

                    </Col>
                </Row>
            </Container>
        </li>
    );
}