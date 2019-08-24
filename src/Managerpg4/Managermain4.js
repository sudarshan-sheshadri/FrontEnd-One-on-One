import React from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import Managerheader1 from "../Managerpg1/Managerheader1";
import ManagerFooter2 from "../Managerpg2/ManagerFooter2";
import ManagerNav from "../Managerpg1/ManagerNav"
import "../Managerpg1/Managermain.css"
import {Redirect} from "react-router-dom";
import axios from "axios"

var bgColors = {
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#",
    "Green": "#CCFFCC",
    "Red": "#E9573F",
    "Yellow": "#d3d3d3",
};

class Managermain3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:24,
            q1:'',
            a1 :'',
            r1:''


        }
    }

    handelQuestchange = (event)=>{
        this.setState({
            q1:event.target.value
        })
    };


    handelAnswerchange = (event)=>{
        this.setState({
            a1:event.target.value
        })
    };


    handelRemarkchange = (event)=>{
        this.setState({
            r1:event.target.value
        })
    };



    setRedirect = (event) => {
        event.preventDefault();
        console.log(this.state)

        const response = axios({
            method: 'post',
            url: // 'http://192.168.1.90:8095/adddata',
                'http://192.168.1.245:8095/qanda_dynamic',
            data: this.state


        });
        this.setState({
            redirect1: true
        })
        //window.location.reload();
    };

    setRedirectGoal = (event) => {
        event.preventDefault();
        console.log(this.state)

        this.setState({
            redirect2: true
        })
        //window.location.reload();
    };




    render() {


        {
            if (this.state.redirect2) {
                return <Redirect to="/month/august/dynamicpg/goal"/>;

            }
        }

        return (
            <div className="manbg">
                <Managerheader1/>
                <ManagerNav/>
                <br/>
                <br/>

                <h1 className="ui" style={{color:"black"}}> your employee 'Pranay'</h1>
                <Form>
                    <input value={this.state.q1}
                           placeholder='Question?'
                           onChange={this.handelQuestchange}

                                    />




                    <TextArea style={{backgroundColor: bgColors.Yellow}}
                              placeholder='Answers'
                              value={this.state.a1}
                              onChange={this.handelAnswerchange}

                    />



                    <TextArea style={{backgroundColor: bgColors.Green , height: "50px"}}
                              placeholder='Remark'
                              value={this.state.r1}
                              onChange={this.handelRemarkchange}

                    />

                </Form>




                <button onClick={this.setRedirect}
                        style={{ "width" :"200px", margin:"30px"}}
                        className="ui positive button">Save </button>

                <button onClick={this.setRedirect}
                        style={{ "width" :"200px", margin:"30px"}}
                        className="ui blue button">View all</button>
LogMainbody
                <button onClick={this.setRedirectGoal}
                        style={{ "width" :"200px", margin:"30px"}}
                        className="ui button">Next</button>
<br/>
<br/>
<br/>
<br/>
<br/>

                <ManagerFooter2/>
            </div>
        )
    }

}

export default Managermain3