import React from "react";
import { CommonContext } from "./CommonContext";

class Header extends React.Component {
    render(){
        return (
            <CommonContext.Consumer>
            {
                ({color})=>(
                    <h2 style={{backgroundColor:color}}>Header page</h2>
                )
            }
            </CommonContext.Consumer>     
        );
    }
}

export default Header;