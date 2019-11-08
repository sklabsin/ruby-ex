import React, { Component } from 'react';
import '../App.css';
import Modal from './Modal'

class ModalClass extends Component {
    state = {
        modal: false
     }



     componentDidMount(){
         console.log(this.props)
     }
      
     selectModal = (info) => {
       this.setState({modal: !this.state.modal}) // true/false toggle
     }
     render() {
        return (
           <div className="App">
               <a  onClick={ this.selectModal } className="btn btn-primary">
              View / Update
          </a>
              <Modal 
                  displayModal={this.state.modal}
                  closeModal={this.selectModal}
                  data={this.props}
              />
           </div>
        );
 }}
export default ModalClass;