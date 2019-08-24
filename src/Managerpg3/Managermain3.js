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
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#d3d3d3",
};

class Managermain3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:24,
            q1:'1. How is everything going today? Tell me about this last week?',
            a1 :'',
            q2:'2. What has gone well/not so well for you in this month?',
            a2 :'',
            q3:'3. What challenges have you faced?',
            a3 :'' ,
            q4:'4. How are you/your team progressing towards established goals?',
            a4 :'',
            q5:'5. What are you committing to between now and the next time we meet?',
            a5 :''

        }
    }

    handelAnswerchange1 = (event)=>{
        this.setState({
            a1:event.target.value
        })
    };


    handelAnswerchange2 = (event)=>{
        this.setState({
            a2:event.target.value
        })
    };

    handelAnswerchange3 = (event)=>{
        this.setState({
            a3:event.target.value
        })
    };

    handelAnswerchange4 = (event)=>{
        this.setState({
            a4:event.target.value
        })
    };

    handelAnswerchange5 = (event)=>{
        this.setState({
            a5:event.target.value
        })
    };


    setRedirect = (event) => {
        event.preventDefault();
        console.log(this.state)

        const response = axios({
            method: 'post',
            url: // 'http://192.168.1.90:8095/adddata',
                'http://192.168.1.245:8095/qanda_static',
            data: this.state


        });
        this.setState({
            redirect: true
        })
        //window.location.reload();
    };


    render() {
        {
            if (this.state.redirect) {
                return <Redirect to="/month/august/dynamicpg"/>;

            }
        }


        return (
            <div className="manbg">
                <Managerheader1/>
                <ManagerNav/>
                <br/>
                <br/>

                <h1 className="ui" style={{color:"black"}}> your employee 'pranay'</h1>
                <Form>
                    <input value={this.state.q1}/>
                    <TextArea style={{backgroundColor: bgColors.Yellow}}
                              placeholder='Answers'
                              value={this.state.a1}
                              onChange={this.handelAnswerchange1}

                    />
                </Form>


                <Form>
                    <input value={this.state.q2}/>
                    <TextArea style={{backgroundColor: bgColors.Yellow}}
                              placeholder='Answers'
                              value={this.state.a2}
                              onChange={this.handelAnswerchange2}
                    />
                </Form>


                <Form>
                    <input value={this.state.q3}/>
                    <TextArea style={{backgroundColor: bgColors.Yellow}}
                              placeholder='Answers'
                              value={this.state.a3}
                              onChange={this.handelAnswerchange3}/>
                </Form>


                <Form>
                    <input value={this.state.q4}/>
                    <TextArea style={{backgroundColor: bgColors.Yellow}}
                              placeholder='Answers'
                              value={this.state.a4}
                              onChange={this.handelAnswerchange4}/>
                </Form>



                <Form>
                    <input value={this.state.q5}/>
                    <TextArea style={{backgroundColor: bgColors.Yellow}}
                              placeholder='Answers'
                              value={this.state.a5}
                              onChange={this.handelAnswerchange5}/>
                </Form>
                <br/>
                <br/>
                <br/>
                <br/>


                <button onClick={this.setRedirect}
                        style={{ "width" :"200px", margin:"60px"}}
                        className="ui positive button">Save & Next</button>
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