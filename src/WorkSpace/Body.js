import React from 'react'
import Activity from './Activity'
import BodyTabBar from './BodyTabBar'
import './Body.css'

class Body extends React.Component {
    
    render(){
        return (
            <div className="wk-body col-9">

                <BodyTabBar />
                <Activity />
                
            </div>
        )
    }
}

export default Body;