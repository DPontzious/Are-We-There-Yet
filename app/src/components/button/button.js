import React from 'react';
import { Button } from 'reactstrap';
import "./style.css"


function button(props)
{
  return (
    <div>
      <Button color="info" id={props.id}>{props.text}</Button>
    </div>
  );
};

export default button;
