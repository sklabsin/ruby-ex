import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class AddTask extends Component {
    constructor(){

        super();
        this.state = {
            "taskname": "",
            "description": "",
            "status": ""
        };

        this.onChange =  this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]:e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newTask = {
             taskname: this.state.taskname,
             description: this.state.description,
             status: this.state.status
        };



        
        console.log(newTask);


        axios({
            method: 'post',
            url: 'http://localhost:8080/api/board',
            data:newTask
          });
    }


    render() {
        return (
            <div className="addTask">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to="/" className="btn btn-light">

                                <i className="fa fa-chevron-left" aria-hidden="true"> Back to Board</i>
                            </Link>
                            <h4 className="display-4 text-center">Add /Update Project Task</h4>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" 
                                        name="taskname" 
                                        placeholder="Task Name"
                                        value={this.state.taskname} 
                                        onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" 
                                        placeholder="Decription" 
                                        name="description"
                                        value={this.state.description}
                                        onChange={this.onChange}
                                    />
                                            
                                </div>
                                <div className="form-group">
                                    <select className="form-control form-control-lg" 
                                    name="status"
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    >
                                        <option value="">Select Status</option>
                                        <option value="TO_DO">TO DO</option>
                                        <option value="IN_PROGRESS">IN PROGRESS</option>
                                        <option value="DONE">DONE</option>
                                    </select>
                                </div>
                                <input type="submit" value="Submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;