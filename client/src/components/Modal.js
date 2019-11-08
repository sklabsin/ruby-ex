// import React from 'react';




import React, { Component } from 'react';

class Modal extends Component {

    constructor(props){
        super(props);


    }


    closeModal(e) {
        e.stopPropagation()
        this.props.closeModal()
    }
    
    render() {
    const {taskname, description, status, data } = this.props;
    
    console.log(this.props.displayModal)

    const divStyle = { 
        display: this.props.displayModal ? 'block' : 'none'
    };     


   


        return (
        <div 
            className="modal"
            onClick={ this.props.closeModal }
            style={divStyle} >          
            <div 
                className="modal-content"
                onClick={ e => e.stopPropagation() } >    
                       
                <span 
                    className="close"
                    onClick={ this.props.closeModal }>&times;
                </span>  
                <div>
                    <div>   
                    <form className="commentForm" >
                    {/* <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.taskname}
                    // onChange={this.handleAuthorChange}
                    />
                    <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.description}
                    // onChange={this.handleTextChange}
                    />
                    <input type="submit" value="Post" /> */}
                </form>
                    </div>
                
                </div>   
                
            </div> 
            <div>
              
            </div>      
        </div>
     );
    }
}

export default Modal;

// const Modal = props => {  

// //    this.state={
// //     taskname:'',
// //     description:''
// //    };



       
//     const divStyle = { 
//         display: props.displayModal ? 'block' : 'none'
//    };     function closeModal(e) {
//       e.stopPropagation()
//       props.closeModal()
//    }



//     return (
//         <div 
//             className="modal"
//             onClick={ closeModal }
//             style={divStyle} >          
//             <div 
//                 className="modal-content"
//                 onClick={ e => e.stopPropagation() } >    
                       
//                 <span 
//                     className="close"
//                     onClick={ closeModal }>&times;
//                 </span>  
//                 <div>
//                 <form className="commentForm" >
//                     {/* <input
//                     type="text"
//                     placeholder="Your name"
//                     value={this.state.taskname}
//                     // onChange={this.handleAuthorChange}
//                     />
//                     <input
//                     type="text"
//                     placeholder="Say something..."
//                     value={this.state.description}
//                     // onChange={this.handleTextChange}
//                     />
//                     <input type="submit" value="Post" /> */}
//                 </form>
//                 </div>   
                
//             </div> 
//             <div>
              
//             </div>      
//         </div>
//      );
// }

// export default Modal;