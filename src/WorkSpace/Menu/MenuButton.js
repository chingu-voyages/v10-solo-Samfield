import React from 'react'
import './MenuButton.css';

class MenuButton extends React.Component {

    constructor(props){
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleFullScreen = this.handleFullScreen.bind(this);
        this.handleMinimize = this.handleMinimize.bind(this);
    }

    handleMinimize(){
        alert('Minimize button click')
    }
    handleFullScreen(){
        alert('fullscreen button click')
    }
    handleClose(){
        alert('close button click')
    }
    render(){
        return (
            <div className="menu-btn">
                <button className="btn-minimize" onClick={this.handleMinimize}>_</button>
                <button className="btn-fullscreen" onClick={this.handleFullScreen}>|_|</button>
                <button className="btn-close" onClick={this.handleClose}>X</button>
            </div>
        )
    }
}

export default MenuButton;