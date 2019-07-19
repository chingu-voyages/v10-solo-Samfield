import React from 'react'
import './SideBar.css'

class SideBar extends React.Component {
    
    render(){
        return (
            <div className="workspace-side-bar col-3">
                <input type="search" placeholder="Filter" className="filter" />
                <div className="sidebar-tabs" >
                    <div className="sidebar-tab-item active">History</div>
                    <div className="sidebar-tab-item">Collection</div>
                </div>
            </div>
        )
    }
}

export default SideBar;