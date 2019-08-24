import React from "react"
import NINE from "../nl_logo.png";
import {BrowserRouter,Link} from "react-router-dom";


class Managerheader1 extends React.Component {
    render() {
        return (
            <BrowserRouter>
            <header>
                <div>
                    <nav>
                        <div className="">
                            <img style={{float:"left"}} src={NINE} alt="nineleaps"/>

                           <Link to = "/logout" style={{float:"right"}} >Logout</Link>
                        </div>

                    </nav>

                </div>
            </header>
            </BrowserRouter>

        )
    }
}
export default Managerheader1