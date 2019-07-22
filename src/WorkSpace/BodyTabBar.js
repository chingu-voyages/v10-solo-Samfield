import React from 'react'
import TabItem from './TabItem';
import './BodyTabBar.css'
class BodyTabBar extends React.Component {

    render() {
        return (
            <div>
                <div className="ws-b-tabbar">
                    <ul className="nav nav-tabs">
                            <TabItem name="get it all" />
                            <TabItem name="Post it all" />
                            <TabItem name="put it all" />
                    </ul>
                </div>
            </div>
        )
    }
}

export default BodyTabBar;