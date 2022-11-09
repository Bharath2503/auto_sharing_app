

import React from 'react'

function TextField(props) {
    console.log(props.onchange)
  return (
    <>
    <input type="text" name={props.name} id={props.id} onChange={props.onchange} style={{padding:props.padding}}/>
    </>
   
  )
}

export default TextField
