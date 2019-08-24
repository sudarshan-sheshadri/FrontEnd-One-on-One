import React from 'react'
//import {BrowserRouter, Route, Link} from "react-router-dom";
import './ManagerNav.css'



class ManagerNav extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <br/>
                <br/>
                <br/>
                <br/>
                <div id="menuToggle">


                    <input type="checkbox"/>



                    <span></span>
                    <span></span>
                    <span></span>


                    <ul   id="menu">
                        <a href="#">
                            <br/>
                            <br/>
                            <li >Employee</li>
                            <br/>
                            <br/>
                        </a>
                        <a href="#">
                            <br/>
                            <br/>
                            <li>Feedback</li>
                            <br/>
                            <br/>
                        </a>
                        <a href="#">
                            <br/>
                            <br/>
                            <li></li>
                            <br/>
                            <br/>
                        </a>
                        <a href="#">
                            <br/>
                            <br/>
                            <li>Goals</li>
                            <br/>
                            <br/>
                        </a>

                    </ul>
                </div>
            </nav>
        )
    }
}


export default  ManagerNav