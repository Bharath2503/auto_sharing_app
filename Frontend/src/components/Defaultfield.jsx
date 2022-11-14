import React from 'react'
import { Form } from 'react-bootstrap';

function Defaultfield(props) {
  return (
    <>
    <Form.Group className="mb-3" controlId={props.controlId}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onchange}/>
    </Form.Group>
    </>
   
  )
}

export default Defaultfield;
