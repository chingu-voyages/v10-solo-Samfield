import React from 'react'
import WorkSpace from './WorkSpace/WorkSpace'
import TaskBar from './TaskBar'
import './ApiBoard.css'

class ApiBoard extends React.Component {

    render()
    {
        return (
            <div id="api-board">
               <WorkSpace /> 
               <TaskBar/>
            </div>
        )
    }
}

export default ApiBoard;