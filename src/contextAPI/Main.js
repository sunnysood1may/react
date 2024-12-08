import React from "react";
import { CommonContext } from "./CommonContext";

class Main extends React.Component {
    render(){
        return (
            <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h2 style={{backgroundColor:color}}>Hello, this is main page</h2>
                    )
                }
            </CommonContext.Consumer>     
        );
    }
}

export default Main;