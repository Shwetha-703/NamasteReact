import Profile from "./Profile";
import {Component} from "react";
import {Outlet} from "react-router-dom";

/*const About = () =>{
    return(
        <div className="contactAboutUs">
            <h1>
                about #namaste react
            </h1>
            <p>Namaste!! Namma!! Namaskar!!</p>
            <p>
                <a href="https://react.dev/">React</a> is a declarative, component-based library, you can learn once, and write anywhere
            </p>
            <Profile />
        </div>
    )
}*/

class About extends Component{

    constructor(){
        super();
    }

    componentDidMount(){
        //console.log("(P)ComponentDidMount");
    }


    componentWillUnmount(){
        //console.log("(P) Component unmounted");
    }

    render(){
        //console.log("(P)render");
        return(
            <div className="contactAboutUs">
                <h1>
                    about #namaste react
                </h1>
                <p>Namaste!! Namma!! Namaskar!!</p>
                <p>
                    <a href="https://react.dev/">React</a> is a declarative, component-based library, you can learn once, and write anywhere
                </p>

                {/*<Outlet/>8*/}
                <Profile name={"Namaste to you"} /> 

            </div>
        )
    }
}

export default About;