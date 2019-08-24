import React from "react"
import NINE from "../nl_logo.png";
import {BrowserRouter,Route,Link} from "react-router-dom";
import './Managermain2.css'

class Managerheader2 extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <header>
                <div>
                    <nav >
                        <div >

                            <img src={NINE} alt="nineleaps"/>


                        </div>
                        <Link to="/logout"  style={{float:"right"}} >Logout</Link>
                    </nav>
                </div>
            </header>







            </BrowserRouter>

        )
    }
}
export default Managerheader2