import React from'react'
import './testmanmain.css'
import remov from './Managerpg1/red_remov.png'



const Row = ({id, title, remove}) => (
    <div className="row">

        <div>{id}</div>
        <div>{title}</div>
        <div className="remove">
            <img src={remov} href="#"  onClick={() => remove(id)}></img>
        </div>
    </div>
);

class Table extends React.Component {
    state = {
        data: [
            {id: 'NL111', title: 'Name 1', },
            {id: 'NL222', title: 'Name 2', },
            {id: 'NL333', title: 'Name 3', },
        ],
    };


    compareBy = (key) => {
        return function(a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    };

    sortBy = (key) => {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
    };

    remove = (rowId) => {
        // Array.prototype.filter returns new array
        // so we aren't mutating state here
        const arrayCopy = this.state.data.filter((row) => row.id !== rowId);
        this.setState({data: arrayCopy});
    };

    render() {
        const rows = this.state.data.map( (rowData) => <Row remove={this.remove} {...rowData } />);

        return (
            <div style={{color:"black"}} className="table">
                <div style={{color:"black"}} className="header">
                    <div  style={{color:"black"}} className="remove"></div>
                    <div style={{width:"30%"}} onClick={() => this.sortBy('id')} >Emp ID</div>
                    <div onClick={() => this.sortBy('title')}>Names</div>

                </div>
                <div className="body">
                    {rows}
                </div>
            </div>
        );

    }
}
export default Table