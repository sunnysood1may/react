import React, {useEffect, useRef} from "react";

function Child(props) {
  const lastVal = useRef();
  useEffect(()=>{
    lastVal.current = props.count
  })
  const previousProps = lastVal.current;
 
  return (
    <div>
      <h3>current Val : {props.count}</h3>
      <h3>previous Val : {previousProps}</h3>
    </div>
  )
}

export default Child;