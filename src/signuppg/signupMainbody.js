import React from 'react'
import './signupMainbody.css'
import SignupHeader from './signupHeader'
import {Redirect} from 'react-router-dom'
//import {browserHistory} from "react-router";

import axios from 'axios';
//import LogMainbody from "../loginpg/logMainbody";



export default class SignupMainbody extends React.Component {


    constructor(props) {
        super(props);
        this.state = {

            fields: {},
            errors: {},

        };

        this.handleChange = this.handleChange.bind(this);
        this.submitUserRegistrationForm = this.submitUserRegistrationForm.bind(this);


    };

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });

    }


    submitUserRegistrationForm(e) {
        e.preventDefault();
        console.log(this.state)


        axios
                        .post('http://192.168.1.245:8095/employee', this.state)
                        .then(response =>{
                            if(response.data.status === "true"){
                                this.props.handleSuccessfulAuth(response.data);
                            }
                        }).catch(error =>{
                        console.log(error)
                    });


    }


    validateForm() {

        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if (!fields["username"]) {
            formIsValid = false;
            errors["username"] = "*Please enter your username.";


            if (typeof fields["username"] !== "undefined") {
                if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
                    formIsValid = false;
                    errors["username"] = "*Please enter alphabet characters only.";
                }


                if (!fields["email"]) {
                    formIsValid = false;
                    errors["email"] = "*Please enter your email-ID.";


                    if (typeof fields["email"] !== "undefined") {
                        //regular expression for email validation
                        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
                        if (!pattern.test(fields["email"])) {
                            formIsValid = false;
                            errors["email"] = "*Please enter valid email-ID.";
                        }


                        if (!fields["password"]) {
                            formIsValid = false;
                            errors["password"] = "*Please enter your password.";


                            if (typeof fields["password"] !== "undefined") {
                                if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                                    formIsValid = false;
                                    errors["password"] = "*Please enter secure and strong password.";
                                }


                                if (!fields["confirmPassword"]) {
                                    formIsValid = false;
                                    errors["confirmPassword"] = "*Please enter your password.";


                                    if (typeof fields["confirmPassword"] !== "undefined") {
                                        if (!fields["confirmPassword"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                                            formIsValid = false;
                                            errors["confirmPassword"] = "*Please enter secure and strong password.";
                                        }


                                        if (!fields["phone"]) {
                                            formIsValid = false;
                                            errors["phone"] = "*Please enter your mobile no.";


                                            if (typeof fields["phone"] !== "undefined") {
                                                if (!fields["phone"].match(/^[0-9]{10}$/)) {
                                                    formIsValid = false;
                                                    errors["phone"] = "*Please enter valid mobile no.";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        this.setState({
            errors: errors
        });

        if (this.state.fields.password !== this.state.fields.confirmPassword)
        {
            alert("Passwords do not match!");
        }
        else

            return formIsValid;

    }

    handleOnClick = () => {
        if (this.validateForm()) {
            let fields = {};
            fields["username"] = "";
            fields["email"] = "";
            fields["password"] = "";
            fields["confirmPassword"] = "";
            fields["phone"] = "";
            this.setState({fields:fields});
            alert("Form submitted");


            this.setState({
                redirect:true
            })

        }
        else {
            alert("Fill it correctly");
        }
    };





    render() {
        //const {formIsValid} =  this.state;

        if (this.state.redirect ) {
                return <Redirect push to="/login/35"/>;
            }

        return (

            <div>
                <SignupHeader/>
                <div className="firstbg">

                <form onSubmit= {this.submitUserRegistrationForm}>
                    <h1 className='head'>ONE-ON-ONE</h1>
                    <div className="container">
                        <div className="card card-container">

                            <p id="profile-name" className="profile-name-card"/>
                            <form  name="userRegistrationForm" className="form-signin" onSubmit= {this.submitUserRegistrationForm}>
                                <h1 className="log">SIGN UP</h1>


                                <input
                                    //className="{formErrors.username.length > 0 ? "error" : null}"
                                    type="text"
                                    id="inputUsername"
                                    name="username"
                                    className="form-control"
                                    placeholder="UserName"
                                    value={this.state.fields.username}
                                    onChange={this.handleChange}
                                    //{this.state.errors.username}
                                    //onChange={(e) => this.handleChange(e)}
                                       required autoFocus/>

                                <div className="errorMsg">{this.state.errors.username}</div>



                                <input type="email"
                                       id="inputEmail"
                                       name="email"
                                       className="form-control"
                                       placeholder="Email"
                                       value={this.state.fields.email}
                                       onChange={this.handleChange}
                                       //onChange={(e) => this.handleChange(e)}
                                       required/>
                                <div className="errorMsg">{this.state.errors.email}</div>



                                <input type="password"
                                       id="inputPassword"
                                       name="password"
                                       className="form-control"
                                       placeholder="Password"
                                       value={this.state.fields.password}
                                       onChange={this.handleChange}
                                       //onChange={(e) => this.handleChange(e)}
                                       required/>
                                <div className="errorMsg">{this.state.errors.password}</div>




                                <input type="password"
                                       id="inputConfirmPassword"
                                       name="confirmPassword"
                                       className="form-control"
                                       placeholder="Confirm Password"
                                       value={this.state.fields.confirmPassword}
                                       onChange={this.handleChange}
                                       //onChange={(e) => this.handleChange(e)}
                                       required/>
                                <div className="errorMsg">{this.state.errors.confirmPassword}</div>


                                <input type="text"
                                       name="phone"

                                       id="inputMobileNum"
                                       className="form-control"
                                       placeholder="Phone"
                                       value={this.state.fields.phone}
                                       onChange={this.handleChange}


                                       required/>
                                <div className="errorMsg">{this.state.errors.phone}</div>

                                    <br/>
                                    <button  className="btn btn-lg btn-primary btn-block btn-signin"
                                             onClick={this.handleOnClick}
                                             type="submit">
                                        Sign up
                                    </button>

                            </form>

                        </div>
                        {/* /card-container */}
                    </div>
                </form>
                </div>
            </div>


        );
    }

}

//export default signupMainbody;