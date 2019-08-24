import React from 'react'
import 'semantic-ui/dist/semantic.min.css';
import './Managermain2.css'
import Managerheader1 from '../Managerpg1/Managerheader1'
import ManagerNav from "../Managerpg1/ManagerNav";
import ManagerFooter from "../Managerpg1/ManagerFooter";
import {BrowserRouter,Redirect} from "react-router-dom";
//import Managermain3 from "../Managerpg3/Managermain3"



class Managermain2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {


        }
    }


    setRedirect=() =>
    {
        this.setState({
            redirect:true
        })
        //window.location.reload();
    };


    render() {
        {
            if (this.state.redirect) {
                return <Redirect to="/month/august"/>;
                return <Redirect to="/janu"/>;
                return <Redirect to="/feb"/>;
                return <Redirect to="/mar"/>;
                return <Redirect to="/april"/>;
                return <Redirect to="/may"/>;
                return <Redirect to="/june"/>;
                return <Redirect to="/july"/>;
                return <Redirect to="/sept"/>;
                return <Redirect to="/october"/>;
                return <Redirect to="/november"/>;
                return <Redirect to="/december"/>;
            }
        }

        return (
            <div className="manbg">
                <Managerheader1/>
                <ManagerNav/>

                <br/>
                <br/>
                <br/>
                <h1 style={{color:"black"}}  className="ui" >Your Employee is 'Pranay' </h1>
                <br/>
                <br/>



{/*<div className="dropdown">*/}
{/*     <select value="Select year" className="ui" >*/}

{/*                        <option style={{color:"black"}} className="item">2017</option>*/}
{/*                        <option style={{color:"black"}} className="item">2018</option>*/}
{/*                            <option style={{color:"black"}} className="item">2019</option>*/}
{/*                            <option style={{color:"black"}} className="item">2020</option>*/}
{/*                        </select>*/}
{/*</div>*/}



<br/>
<BrowserRouter>

    <nav>

          <div className="calender">


                <button onClick={this.setRedirect} name="month" value="jan"style={{margin:"30px"}} className="buttonGrey">JAN</button>
                <button onClick={this.setRedirect} name="month"  value="feb" style={{margin:"30px"}} className="buttonGrey">FEB</button>
                <button onClick={this.setRedirect} name="month" value="mar" style={{margin:"30px"}} className="buttonGrey">MAR</button>
                <button onClick={this.setRedirect} name="month"value="apr" style={{margin:"30px"}} className="buttonGrey">APR</button>
                <button onClick={this.setRedirect} name="month"value="may" style={{margin:"30px"}} className="buttonGrey">MAY</button>
                <button onClick={this.setRedirect} name="month" value="jun"  style={{margin:"30px"}} className="buttonGrey">JUN</button> <br/>
                <button onClick={this.setRedirect} name="month" value="jul" style={{margin:"30px"}} className="buttonGrey">JUL</button>
                <button onClick={this.setRedirect} name="month" value="aug" style={{margin:"30px"}} className="buttonGreen" >AUG  </button>
                <button onClick={this.setRedirect} name="month" value="sept" style={{margin:"30px"}} className="buttonRed">SEPT</button>
                <button onClick={this.setRedirect} name="month" value="oct" style={{margin:"30px"}} className="buttonRed">OCT</button>
                <button onClick={this.setRedirect} name="month" value="nov" style={{margin:"30px"}} className="buttonRed">NOV</button>
                <button onClick={this.setRedirect} name="month" value="dec" style={{margin:"30px"}} className="buttonRed">DEC</button>

                <br/>
                <br/>




            </div>
    </nav>
</BrowserRouter>
                <br/>
                <br/>
                <br/>
<ManagerFooter/>
        </div>
        )
    }
}

        export default Managermain2