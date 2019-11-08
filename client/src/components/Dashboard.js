import React, { Component } from 'react';
import {Link} from "react-router-dom";
import ModalClass from './ModalClass';
class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state={
            tasks:[],
            TODO:[],
            INPROGRESS:[],
            DONE:[],
            modal: false
        }



    }

    selectModal = (info) => {
        this.setState({modal: !this.state.modal}) // true/false toggle
      }

    

    componentDidMount() {
  
        fetch('http://localhost:8080/api/board/all')
          .then(response => response.json())
          .then(data => {

            this.setState({ tasks: data });
            if(data.length>0)
                this.handleResponse();
          })
          .catch(console.log);
      }

      handleResponse() {
        var temptodo=[];
        var tempinpr=[];
        var tempdone=[];
        const all = this.state.tasks;

        all.forEach(item => {
            
            if(item.status ==="TO_DO"){
                temptodo.push(item);
            }
            else if(item.status ==="IN_PROGRESS"){
                tempinpr.push(item);
            }
            else if(item.status ==="DONE"){
                tempdone.push(item);
            }

        });


        this.setState({
            TODO: temptodo,
            INPROGRESS:tempinpr,
            DONE:tempdone
        })
      }

    render() {

        const TODO = this.state.TODO;
        const INPROGRESS = this.state.INPROGRESS;
        const DONE = this.state.DONE;
        
        if(this.state.tasks.length===0)
            return null;
        return (

            <div className="container">
                <Link to="/addTask" className="btn btn-primary mb-3">
                <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                <div className="container">
                    <div key={1} className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>
                            <DisplayTodo data={TODO}/>
                        </div>
                        <div key={2} className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            <DisplayInprogs data={INPROGRESS}/>
                        </div>
                        <div key={3} className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            <DisplayDone data={DONE}/>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
function DisplayTodo(props){
    const item = props.data.map((number, index) => {

        if(number.status ==="TO_DO")
            return <ListItem key={index} value={number} />
        else {
            // const temp =[];
            return <div></div>
        }
    });
    
    return (
        <ul >
      {item}
    </ul>
    );
   
}

function DisplayInprogs(props){
    const item = props.data.map((number, index) => {
        
        if(number.status ==="IN_PROGRESS") {
            return <ListItem key={index} value={number} />
        }
        else {
            console.log(number.status)
            return <div></div>
            }
    });
    


    return (
        <ul >
      {item}
    </ul>
    );
   
}

function DisplayDone(props){
    const item = props.data.map((number, index) => {

        if(number.status ==="DONE")
            return <ListItem key={index} value={number} />
        else {
            // const temp =[];
            return <div></div>
        }
    });
    


    return (
        <ul >
      {item}
    </ul>
    );
   
}

function ListItem(props) {
    const value = props.value;

    return (
      // Wrong! There is no need to specify the key here:
      <div key={value.id} className="card mb-1 bg-light">
        
      <div className="card-header text-primary">
      </div>
      <div className="card-body bg-light">
          <p className="card-text text-truncate ">
              {value.description}
          </p>
          <div>
          <ModalClass data={value}/>
          </div>
           
         

            <button className="btn btn-danger ml-4">
              Delete
          </button>
        
      </div>
  </div>
    );
  }

export default Dashboard;