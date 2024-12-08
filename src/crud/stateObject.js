import React, { useEffect, useState } from "react";

function StateObject() {
  const [data,setData] = React.useState({
    name:'sunny',age:65
  });
  return (
    <div>
      <h3>State Object with Hooks</h3> 

      <input type="text" placeholder="enter name" value={data.name} 
      onChange={(e)=>{setData({...data, name:e.target.value})}} /><br /><br />
      <input type="text" placeholder="enter age" value={data.age} 
      onChange={(e)=>{setData({name:data.name, age:e.target.value})}} />

      <h4>{data.name}</h4>
      <h4>{data.age}</h4>
    </div>
  );
}

export default StateObject;