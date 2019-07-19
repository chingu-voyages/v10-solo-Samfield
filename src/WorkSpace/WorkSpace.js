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
               <div className="workspace-body">
               <SideBar />
               <Body />
               </div>
            </div>
        )
    }
}

export default WorkSpace;