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

class Managerview extends React.Component {



    state = {
        loading: true,
        person: null,
        id:24
    };

    async componentDidMount() {
        const url = "http://192.168.1.245:8095/viewqanda";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data[0], loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.person) {
            return <div>didn't get a person</div>;
        }
        return (
            <div>
                <div className="manbg">
                    <Managerheader1/>
                    <ManagerNav/>
                    <br/>
                    <br/>

                    <h1 className="ui" style={{color:"black"}}> your employee 'NAME'</h1>
                    <Form>
                        <input value={this.state.q1}/>
                        <TextArea style={{backgroundColor: bgColors.Yellow}}
                                  placeholder='Answers'
                                  value={this.state.a1}


                        />
                    </Form>


                    <Form>
                        <input value={this.state.q2}/>
                        <TextArea style={{backgroundColor: bgColors.Yellow}}
                                  placeholder='Answers'
                                  value={this.state.a2}

                        />
                    </Form>


                    <Form>
                        <input value={this.state.q3}/>
                        <TextArea style={{backgroundColor: bgColors.Yellow}}
                                  placeholder='Answers'
                                  value={this.state.a3}
                                  />
                    </Form>


                    <Form>
                        <input value={this.state.q4}/>
                        <TextArea style={{backgroundColor: bgColors.Yellow}}
                                  placeholder='Answers'
                                  value={this.state.a4}
                                />
                    </Form>



                    <Form>
                        <input value={this.state.q5}/>
                        <TextArea style={{backgroundColor: bgColors.Yellow}}
                                  placeholder='Answers'
                                  value={this.state.a5}
                                 />
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






            </div>
        );
    }
}


export default Managerview