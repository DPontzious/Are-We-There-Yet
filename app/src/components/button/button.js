import React from 'react';
import { Button } from 'reactstrap';
import "./style.css"


function button(props) {
  return (
    <Button color="info" id={props.id}>{props.text}</Button>
  );
};

export default button;
