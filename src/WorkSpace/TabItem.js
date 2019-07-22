import React from 'react'
import './TabItem.css'

class TabItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClose = this.handleClose.bind(this)
    }
    handleClose(){
        alert("do you want to close");
    }
    render() {
        return (
            <div>
                <div className="tab-item nav-item">
                    <button className="nav-link active" >{this.props.name}</button>
                    <button className="btn-close" onClick={this.handleClose}>x</button>
                </div>
            </div>

        )
    }
}
export default TabItem;