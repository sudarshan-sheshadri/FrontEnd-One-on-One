import React from "react"
import NINE from "../nl_logo.png";
import {Link,BrowserRouter} from "react-router-dom";


class WelHeader extends React.Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-light">
                    <img src={NINE} alt="nineleaps" style={{float:"left"}}/>
                    <div className="navbar-nav ml-auto">



                        <Link to="/signup" className="nav-item nav-link" style={{fontSize: "20px"}}>Signup</Link>
                        <Link to="/login" className="nav-item nav-link" style={{fontSize: "20px"}}>Login</Link>


                    </div>
                </nav>

            </header>
        )
    }
}
export default WelHeader