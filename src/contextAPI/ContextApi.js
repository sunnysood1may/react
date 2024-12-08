import React from "react";
import { CommonContext } from "./CommonContext";
import Main from "./Main";
import UpdateBtn from "./UpdateBtn";
import Header from "./Header";
import Footer from "./Footer";

class ContextApi extends React.Component {
    constructor(){
        super();
        this.updateColor=(color)=>{
            this.setState({
                color:color
            })
        }
        this.state={
            color:'green',
            updateColor:this.updateColor
        }
    }
    render(){
        return (
            <CommonContext.Provider value={this.state}>     
                <CommonContext.Consumer>
                {
                    ({color})=>(
                        <h2 style={{backgroundColor:color}}>Complete and easy example for ContextAPI</h2>
                    )
                }
                </CommonContext.Consumer>                  
                <Header />
                <Main />
                <UpdateBtn />
                <Footer />
            </CommonContext.Provider>     
        );
    }
}

export default ContextApi;