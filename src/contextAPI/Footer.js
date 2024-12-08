import React from "react";
import { CommonContext } from "./CommonContext";

class Footer extends React.Component {
    render(){
        return (
            <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h2 className="footer" style={{backgroundColor:color}}>Footer page</h2>
                    )
                }
            </CommonContext.Consumer>     
        );
    }
}

export default Footer;