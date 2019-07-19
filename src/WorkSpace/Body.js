import React from 'react'
import Activity from './Activity'
import './Body.css'

class Body extends React.Component {
    
    render(){
        return (
            <div className="wk-body">
                <Activity />
                
            </div>
        )
    }
}

export default Body;