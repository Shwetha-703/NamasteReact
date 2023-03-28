import React from "react";
import ReactDOM from "react-dom/client";

/* React.createElement => React Element = JS Object => HTMLElement.Render(element) */
//const heading = React.createElement("h1", {id:"h1"}, "Namaste from React!!🚀");

/* JSX syntax */

const TitleComponent = () =>  (
                                <h1 id = "h1" className="className"> 
                                    Namaste from React using JSX!!🚀 
                                </h1>
                              )

const HeadingComponent = () => (
    <>
        <div id="container">

            
            <TitleComponent/>
            {TitleComponent()} 
            <TitleComponent></TitleComponent>


            <h1 id="h1"> Namma React Functional Component!! 🏗 </h1>
        </div>
        <div id="container2">
            <TitleComponent/>
            <h1 id="h1"> Namma React Functional Component!! 🏗 </h1>
        </div>
    </> // this is react fragment, can also be written as <React.Fragment></React.Fragment>
)

//JSX elements can only have one parent tag. But if multiple tags are required, then use react fragments.

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
