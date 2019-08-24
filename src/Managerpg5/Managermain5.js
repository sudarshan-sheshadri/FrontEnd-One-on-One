import React, {Component} from "react";
import './Managermain5.css'

import { Form, TextArea } from 'semantic-ui-react'
import Managerheader1 from "../Managerpg1/Managerheader1";
import ManagerFooter2 from "../Managerpg2/ManagerFooter2";
import ManagerNav from "../Managerpg1/ManagerNav"
import "../Managerpg1/Managermain.css"
import {Redirect} from "react-router-dom";
import axios from "axios"
import ManagerFooter from "../Managerpg1/ManagerFooter";

class Managermain5 extends React.Component {

    constructor(props) {
        super(props);

        //  this.state.products = [];
        this.state = {};
        this.state.filterText = "";
        this.state.products = [
            {
                id: 1,
                Goals:'Learn react routing',
                Deadline:"12/10/2019"
            }, {
                id: 2,
                Goals:'learn react components',
                Deadline:"12/10/2019"
            }, {
                id: 3,
                Goals:'Learn react Lifecycle',
                Deadline:"12/10/2019"
            }
        ];

    }
    handleUserInput(filterText) {
        this.setState({filterText: filterText});
    };
    handleRowDel(product) {
        var index = this.state.products.indexOf(product);
        this.state.products.splice(index, 1);
        this.setState(this.state.products);
    };

    handleAddEvent(evt) {
        var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
        var product = {
            id: id,
            Goals: "",
            Deadline: ""
        }
        this.state.products.push(product);
        this.setState(this.state.products);

    }

    handleProductTable(evt) {
        var item = {
            id: evt.target.id,
            name: evt.target.name,
            value: evt.target.value
        };
        var products = this.state.products.slice();
        var newProducts = products.map(function(product) {

            for (var key in product) {
                if (key == item.name && product.id == item.id) {
                    product[key] = item.value;

                }
            }
            return product;
        });
        this.setState({products:newProducts});
        //  console.log(this.state.products);
    };
    render() {

        return (
            <div>
                <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)} onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)} products={this.state.products} filterText={this.state.filterText}/>
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

            return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
        });
        return (
            <div className="manbg">
                <Managerheader1/>
                <ManagerNav/>
                <br/>
                <br/>
                <br/>


                <div  className="table1">
                    <table className="ui blue inverted table" style={{width:"60%", height:100, color:"black"}} >
                        <thead>
                        <tr>
                            <th>Goals</th>
                            <th>Deadline</th>
                        </tr>
                        </thead>

                        <tbody style={{color:"black",font:"Helvetica"}}>
                        {product}

                        </tbody>

                    </table>
                </div>
                <br />
                <br/>
                <br/>


                <button onClick={this.setRedirect}
                        style={{ "width" :"100px", margin:"30px"}}
                        className="ui positive button">Add</button>

                <button onClick={this.setRedirect}
                        style={{ "width" :"100px", margin:"30px"}}
                        className="ui blue button">Save</button>


                <br/>
                <br/>
                <br/>
                <br/>
                <ManagerFooter/>
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
            <tr className="eachRow">

                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Goals",
                    value: this.props.product.Goals,
                    id: this.props.product.id
                }}/>
                <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
                    type: "Deadline",
                    value: this.props.product.Deadline,
                    id: this.props.product.id
                }}/>

                <td className="del-cell">
                    <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
                </td>
            </tr>
        );

    }

}
class EditableCell extends React.Component {

    render() {
        return (
            <td>
                <input type='text' name={this.props.cellData.type}
                       id={this.props.cellData.id}
                       value={this.props.cellData.value}
                       onChange={this.props.onProductTableUpdate}/>
            </td>
        );

    }
}


export default Managermain5;