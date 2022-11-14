import React from 'react';
import { Button } from 'react-bootstrap';

function Defaultbutton(props) {
    console.log(props.onchange)
  return (
    <>
    <Button type="button" name={props.name} variant={props.variant} value={props.value} id={props.id} onChange={props.onchange} style={{width:props.width}}>{props.value}</Button>
    </>
   
  )
}

export default Defaultbutton;
