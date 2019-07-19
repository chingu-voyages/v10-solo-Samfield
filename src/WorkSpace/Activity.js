import React from 'react'
import './Activity.css'

class Activity extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.handleUrl = this.handleUrl.bind(this);
        this.state = {
            url: ''
        }
    }
    handleChange(e) {
        this.setState({
            url: e.target.value
        })
    }
    handleUrl() {
        // this.state.url.
        alert(this.state.url)
    }
    render() {
        return (
            <div>
                <div>
                    <form className="form-inlne">
                        <div className="row">
                            <div className="col-8">
                                <div className="input-group">
                                    <select className="input-group-btn api-btn" >
                                        <option>GET</option>
                                        <option>POST</option>
                                        <option>PUT</option>
                                    </select>
                                    <input type="text" onChange={this.handleChange} value={this.state.url} className="form-control input-block" />
                                </div>

                            </div>
                            <div className="col-2">
                                <div className="btn-group" role="group">
                                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                        <button type="button" className="btn btn-primary">Send</button>
                                        <div className="btn-group" role="group">
                                            <button id="btnGroupDrop1" type="button" className="btn btn-primary dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="caret"></span>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" style={{minWidth: 0+'rem', padding:' 0',margin:0 }}>
                                                <button className=" btn btn-primary pull-left">Save as</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-1">
                                <div className="btn-group" role="group">
                                    <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                                        <button type="button" className="btn btn-secondary">Save</button>
                                        <div className="btn-group" role="group">
                                            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="caret"></span>
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1" style={{minWidth: 0+'rem', padding:' 0',margin:0 }}>
                                                <button className=" btn btn-primary pull-left">Save as</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <textarea className="api-response" disabled>Hello world</textarea> */}
            </div>
        )
    }
}
export default Activity;