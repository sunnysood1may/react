import React from "react";
import { CommonContext } from "./CommonContext";

function UpdateBtn() {
    return (
        <CommonContext.Consumer>
        {
            ({updateColor})=>(
                <div>                
                <button onClick={()=>updateColor('yellow')}>Update color</button>
                <button onClick={()=>updateColor('blue')}>Update color</button>
                </div>
            )
        }
        </CommonContext.Consumer>     
    );  
}

export default UpdateBtn;