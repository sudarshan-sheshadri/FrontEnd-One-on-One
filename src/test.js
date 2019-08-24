import React from 'react'
import 'semantic-ui/dist/semantic.min.css';


var bgColors = {
    "Default": "#81b71a",
    "Blue": "#00B1E1",
    "Cyan": "#",
    "Green": "#8CC152",
    "Red": "#E9573F",
    "Yellow": "#d3d3d3",
};


class Testnew extends React.Component {
    constructor(props) {
        super(props);
        this.state = { values: [] };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    createUI(){
        return this.state.values.map((el, i) =>
            <div key={i}>
                <tr className=" ui blue inverted table ">
                    <th className=""></th>
                    <th className=""></th>
                    <th className=""></th>
                </tr>







            </div>
        )
    }

    handleChange(i, event) {
        let values = [...this.state.values];
        values[i] = event.target.value;
        this.setState({ values });
    }

    addClick(){
        this.setState(prevState => ({ values: [...prevState.values, '']}))
    }

    removeClick(i){
        let values = [...this.state.values];
        values.splice(i,1);
        this.setState({ values });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.values.join(', '));
        event.preventDefault();
    }

    render() {
        return (
            <div>


                <form onSubmit={this.handleSubmit}>
                    {this.createUI()}



                    <table className={' ui blue inverted table '}>

                        <thead className="">
                        <tr className="">
                            <th className="">Food</th>
                            <th className="">Calories</th>
                            <th className="">Protein</th>
                        </tr>
                        </thead>
                        <tbody className="">
                        <tr className="">
                            <td className="">Apples</td>
                            <td className="">200</td>
                            <td className="">0g</td>
                        </tr>
                        <tr className="">
                            <td className="">Orange</td>
                            <td className="">310</td>
                            <td className="">0g</td>
                        </tr>
                        </tbody>








                    </table>







                    <div style={{ "width" :"200px"}} className="ui buttons">
                        <input className="ui green button"  type='button' value='Add More' onClick={this.addClick.bind(this)}/>
                        <input className="ui red button"  type='button' value='Remove' onClick={this.removeClick.bind(this)}/>
                    </div>
                    <div className='ui'>
                        <button className="ui green button">Save</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Testnew