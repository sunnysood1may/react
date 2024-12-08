import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Child from "./child";

function PreviousProps() {
  const [count,setCount] = React.useState(0);
  return (
    <div>
      <h2>Previous Props</h2> 
      <Child count={count} />
      <button onClick={()=>setCount( Math.floor(Math.random()*10) )}>Update Counter</button>
    </div>
  );
}

export default PreviousProps;