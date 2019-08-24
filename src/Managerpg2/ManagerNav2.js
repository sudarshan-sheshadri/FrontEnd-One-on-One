import React from 'react'
import {BrowserRouter, Route, Link} from "react-router-dom";
import './ManagerNav2.css'



class ManagerNav2 extends React.Component {
    render() {
        return (
            <BrowserRouter>


                <div className="sidenav">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                            <Link to="/manager" className="item" style={{fontSize:"20px"}}>Manager</Link>
                            <Link to="/hr" className="item" style={{fontSize:"20px"}}>HR</Link>
                            <Link to="/manager" className="item"style={{fontSize:"20px"}}>Feedback</Link>
                            <Link to="/goal" className="item" style={{fontSize:"20px"}}>Goal</Link>

                </div>

            </BrowserRouter>
        )
    }
}
export default  ManagerNav2