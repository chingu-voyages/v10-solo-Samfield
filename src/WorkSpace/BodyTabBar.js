import React from 'react'
import './BodyTabBar.css'
class BodyTabBar extends React.Component {

    render() {
        return (
            <div>
                <div className="ws-b-tabbar">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <button className="nav-link active" href="#">Active</button>
                        </li>
                        <li class="nav-item">
                            <button className="nav-link" href="#">Link</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" href="#">Link</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link disabled" href="#">Disabled</button>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default BodyTabBar;