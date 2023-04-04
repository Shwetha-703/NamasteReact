import React from "react";

class Profile extends React.Component{

    constructor(props){
        super();
        //console.log("(C)Profile constructor");
        this.state={
            userInfo:{
                login : ""
            }
        }
    }

    async componentDidMount(){

        const data = await fetch("https://api.github.com/users/shwetha-703");
        const json = await data.json();
        
        this.setState({
            userInfo : json
        })
        
        //console.log("(C)ComponentDidMount");
    }

    componentDidUpdate(){
        //console.log("(C) COmponent did update");
    }

    componentWillUnmount(){
        //console.log("(C) Component unmounted");
    }

    render(){
        //console.log("(C)Profile render")
        return(
            <div className="font-thin">
                <h2> {this.props.name} </h2>
                <h3> User Name : Shweta </h3>
                <h3> User Location : Bangalore</h3>
                <h3> User Login : {this.state.userInfo.login}</h3>
            </div>
        )
        
    }
}

export default Profile;