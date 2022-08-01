import {useState} from 'react'


function Number(props) {

  return (
    <div>
      <h1 className="number">
        {props.counter}</h1>
    </div>
  );
}

export default Number;
