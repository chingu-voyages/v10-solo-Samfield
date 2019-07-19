import React from 'react'
import Navigation from './Menu/Navigation'
import SideBar from './SideBar'
import Body from './Body'
import './WorkSpace.css';

class WorkSpace extends React.Component {

    render()
    {
        return (
            <div className="workspace">
               <Navigation />
               <div className="container-fluid">
               <div className="row">
               <SideBar />
               <Body />
               </div>
               </div>
            </div>
        )
    }
}

export default WorkSpace;