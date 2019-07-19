import React from 'react'
import './WorkSpaceButton.css'

class WorkSpaceButton extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            close: false,
        }
    }
    handleClick(e) {
        alert(e.target.textContent + " workspace clicked")
        
    }
    handleClose(e) {
        alert(this.props.name + " close button clicked")
        this.setState(
            { close: true }
        )

    }
    render() {
        return (
            <div>
                <div className="workspace-btn" >
                    <div onClick={this.handleClick}>{this.props.name}</div>
                    <button className="btn-close" onClick={this.handleClose}>x</button>
                </div>
            </div>
        )
    }
}
export default WorkSpaceButton;