import React from 'react'
import './welMainbody.css'
import WelHeader from './welHeader'
class WelMainbody extends React.Component {
    render() {
        return (
            <div className="firstbg">
                <WelHeader/>

                <h1 className='title' style={{color:"black"}}>WELCOME TO <br /> ONE ON ONE</h1>
            </div>
        )
    }
}
    export default WelMainbody