import React from 'react'
import WorkSpaceButton from './WorkSpace/WorkSpaceButton';
import './TaskBar.css'

class TaskBar extends React.Component {

    render(){
        return(
            <div id="task-bar">
                <WorkSpaceButton name="my work space" />
                <WorkSpaceButton name="ecommerce" />
            </div>
        )
    }
}
export default TaskBar;