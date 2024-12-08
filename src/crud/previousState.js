import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function PreviousState() {
  const [count, setCount] = useState(1);
  function updateCounter(){
    /*let rand = Math.floor( Math.random()*10);
    setCount((pre)=>{
        console.log(pre);
        if(pre <5){
            return "low value";
        } else {
            return rand;
        }
    });*/
    for(let i =0; i<5; i++){
        //setCount((pre)=>pre+1);
        setCount((pre)=>{
            return pre+1;
        })
    }
  }

  return (
    <div>
      <h2>Previous State</h2> 
      <h2>{count}</h2>
      <button onClick={updateCounter}>Click me to update counter</button>

    </div>
  );
}

export default PreviousState;