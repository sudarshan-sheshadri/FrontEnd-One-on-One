import React from 'react'
import './logMainbody.css'
import axios from 'axios';
import LogHeader from './logHeader'
import { Redirect } from "react-router-dom";


class LogMainbody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: 'ranjan'
        }

    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);

        axios

            .post('http://192.168.1.245:8095/login', this.state)

            .then(response => {
                console.log(response)
                return response;
                // if(this.state.password == 'ranjan')
                // {
                //     // this.setState({
                //     //     redirect:true})
                //     localStorage.setItem("empname",this.response.empname)
                //     localStorage.setItem("id",this.response.id)
                //     localStorage.setItem("phone",this.response.phone)
                //     localStorage.setItem("email",this.response.email)
                //     localStorage.setItem("designation",this.response.designation)

                // }
                // else{
                //     alert('Wrong password')

                // }

            })
            .then(res => {
                console.log(JSON.stringify(res.data))
                localStorage.setItem("empname", res.data.empname)
                localStorage.setItem("id", res.data.id)
                localStorage.setItem("phone", res.data.phone)
                localStorage.setItem("email", res.data.email)
                localStorage.setItem("designation", res.data.designation)
                this.props.history.push('/manager')
            })
            .catch(error => {
                console.log(error);
                this.props.history.push('/manager')
            })
    };


    setRedirect = () => {



    };


    render() {
        const { email, password } = this.state;
        if (this.state.redirect) {
            return <Redirect to="/manager" />;
        }
        return (
            <div className="firstbg">
                <div className="form-signin">
                    <LogHeader />
                    <form onSubmit={this.submitHandler}>

                        <h1 className='head'>ONE-ON-ONE</h1>
                        <div className="container">
                            <div className="card card-container">
                                <h1 className="log">LOGIN</h1>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email ID"
                                    value={email} onChange={this.changeHandler}
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={password} onChange={this.changeHandler}
                                />
                                <button
                                    className="btn btn-lg btn-primary btn-block btn-signin" onClick={this.submitHandler}
                                >Sign in</button>

                            </div>{/* /card-container */}

                        </div>
                    </form>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>

        );
    }

}
export default LogMainbody