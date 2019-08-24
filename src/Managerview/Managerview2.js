import React from 'react'
import Managerheader1 from './Managerheader1'
//import NINE from "../nl_logo.png";
import 'semantic-ui/dist/semantic.min.css';
//import {Button} from 'semantic-ui-react';
import  './Managermain.css'
import remov from './red_remov.png'
import ManagerNav from './ManagerNav'
//import login from './login.png';
import ManagerFooter from "./ManagerFooter";
import {Link} from "react-router-dom";
//import {Redirect} from "react-router-dom";
//import axios from 'axios';


class Managermain extends React.Component {

    constructor(props) {
        super(props);

        //  this.state.products = [];
        this.state = {
            data: [],
        };
        //this.state.filterText = "";
        // this.state.products = [
        //     {
        //         id: 1,
        //         price: 'name1',
        //         name: 'NL111'
        //     },
        //     {
        //         id: 2,
        //
        //         name: 'NL222',
        //         price: 'name2',
        //     },
        //     {
        //         id: 3,
        //         name: 'NL333',
        //         price: 'name3',
        //
        //
        //     },
        //
        // ];

    }

    // submitHandler = e => {
    //     e.preventDefault();
    //     console.log(this.state);
    //
    //
    //     const response = axios({
    //         method: 'post',
    //         url: 'http://192.168.1.245:8095/login',
    //         data: this.state
    //     });
    // }

    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
        alert ("are you sure, you want to delete ?")
    };

    handleAddEvent() {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = {
            id: id,
            name: "",
            price:"",
        };
        this.state.products.push(product);
        this.setState(this.state.products);

    }

    componentDidMount=()=>{
        this.autho();
    }

    autho() {
        //const {navigate} = this.props.navigation;
        var url = `http://192.168.1.245:8095/mng_list`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'content-Type': 'application/json',
                'Accept': 'application/json',
            },
        }).then(response => response.json())
            .then(res => {
                console.log(res[0])
                console.log('res', JSON.stringify(res));
                this.setState({data:res});

            })
    }
    // handleProductTable(evt) {
    //     var item = {
    //         id: evt.target.id,
    //         name: evt.target.name,
    //         value: evt.target.value
    //     };
    //     var products = this.state.products.slice();
    //     var newProducts = products.map(function(product) {
    //
    //         for (var key in product) {
    //             if (key == item.name && product.id == item.id) {
    //                 product[key] = item.value;
    //
    //             }
    //         }
    //         return product;
    //     });
    //     this.setState({products:newProducts});
    //     //  console.log(this.state.products);
    // };

//redirect

    setRedirect=() =>
    {
        this.setState({
            redirect:true
        })
        //window.location.reload();
    };


    render() {
        const {data}=this.state;
        console.log(data.length);
        console.log(data);

        return (

            <div className="manbg">
                <div>
                    <Managerheader1/>
                    <ManagerNav/>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>

                {/*<ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}*/}
                {/*              onRowAdd={this.handleAddEvent.bind(this)}*/}
                {/*              onRowDel={this.handleRowDel.bind(this)}*/}
                {/*              // products={this.state.products}*/}
                {/*              // filterText={this.state.filterText}*/}
                {/*    />*/}
                <h2 className="ui" style={{width:"50%",color:"black"}}>List of Reportees</h2>
                <table style={{width:"50%",color:"black"}} className="ui">
                    <thead>

                    <tr>
                        <th>EMPLOYEE ID</th>
                        <th>EMPLOYEE NAME</th>

                    </tr>
                    </thead>
                    <tbody style={{color:"black"}}>
                    {
                        data.map(row => (
                            <tr style={{color:"black"}}>
                                <td>{row.id}</td>
                                <td>  <Link to ="/month">{row.empname}</Link></td>


                            </tr>
                        ))
                    }
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/> <br/>
                <br/>
                <br/>


                <ManagerFooter/>
            </div>
        );

    }

}

class ProductTable extends React.Component {

    render() {
        var onProductTableUpdate = this.props.onProductTableUpdate;
        var rowDel = this.props.onRowDel;
        var filterText = this.props.filterText;
        var product = this.props.products.map(function(product) {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            return (<ProductRow onProductTableUpdate={onProductTableUpdate}
                                product={product}
                                onDelEvent={rowDel.bind(this)}
                                key={product.id}/>)
        });
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className={'ui'} >
                    <div className={' ui blue inverted table '}
                         style={{color:"black"}} >



                        <tbody>
                        <th>Emp ID</th>
                        <th>Name</th>

                        {product}

                        </tbody>

                    </div>


                    <button type="button"
                            onClick={this.props.onRowAdd}
                            className="btn btn-success pull-right">Add</button>
                    gt

                    <button type="button"
                            onClick={this.setRedirect}
                            className="btn btn-success pull-right">Next</button>


                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>


        );

    }

}

class ProductRow extends React.Component {
    onDelEvent() {
        this.props.onDelEvent(this.props.product);

    }
    render() {

        return (
            <tr className="eachRow"  style={{color:"black"}}>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "name",
                    value: this.props.product.name,
                    id: this.props.product.id

                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "price",
                    value: this.props.product.price,
                    id: this.props.product.id
                }}/>

                <td className="d">
                    <img src={remov}
                         onClick={this.onDelEvent.bind(this)}

                         className="del-btn"/>
                </td>
            </tr>
        );

    }

}
class EditableCell extends React.Component {

    render() {
        return (
            <td>
                <input  name={this.props.cellData.type}
                        id={this.props.cellData.id}
                        value={this.props.cellData.value}
                        onChange={this.props.onProductTableUpdate}/>
            </td>

        );

    }

}



export default Managermain