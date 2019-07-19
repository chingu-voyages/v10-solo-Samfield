import React from 'react'
import MenuButton from './MenuButton'
import MenuTitleBar from './MenuTitleBar';
import './Navigation.css'

class Navigation extends React.Component {

    render(){
        return (
            <div id="board-nav">
                <MenuTitleBar />
                <MenuButton />
            </div>
        )
    }
}

export default Navigation;