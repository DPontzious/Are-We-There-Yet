import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import "./style.css";

function input(props)
{
  return (
          <Form>
            <FormGroup>
              <Input
                type={props.type}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}/>
            </FormGroup>
          </Form>
        );
}

export default input;