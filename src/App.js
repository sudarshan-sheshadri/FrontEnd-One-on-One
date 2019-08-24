import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";
import NINE from "./nl_logo.png";
// import WelMainbody from "./welcompg/welMainbody";
// import LogMainbody from "./loginpg/logMainbody";
// import SignupMainbody from "./signuppg/signupMainbody";
import {Link} from "react-router-dom";
import LogMainbody from "./loginpg/logMainbody";
import SignupMainbody from "./signuppg/signupMainbody";
import WelMainbody from "./welcompg/welMainbody";
import Managermain from "./Managerpg1/Managermain";
import Managermain2 from "./Managerpg2/Managermain2";
import Managermain3 from "./Managerpg3/Managermain3";
import Managermain4 from "./Managerpg4/Managermain4";
import Managermain5 from "./Managerpg5/Managermain5";
import Managerview from "./Managerview/Managerview"

class App extends React.Component{
  render(){
    return(
        <BrowserRouter>
        <div>
            
                <header>
                    <div>
                        <Route exact path="/" component={WelMainbody} />
                        <Route path="/login" component={LogMainbody} />
                        <Route path="/signup" component={SignupMainbody} />
                        <Route path="/manager" component={Managermain} />
                        <Route path="/month" component={Managermain2} />
                        <Route path="/month/august" component={Managermain3} />
                        <Route path="/month/august/dynamicpg" component={Managermain4} />
                        <Route path="/logout" component={LogMainbody} />
                        <Route path="/month/august/dynamicpg/goal" component={Managermain5} />




                    </div>
                </header>

            

        </div>
                    </BrowserRouter>


    );
  }
}

export default App;
