import React from 'react';

class Info extends React.Component{


    constructor(props){
        super(props);
        this.state = {   
            
        }
    }

    render(){
        return(
        <div>
            <h3>{this.props.location.state.newbook.title}</h3>
            <img  src={this.props.location.state.img} height="200" width="300"/>
            <p>{this.props.location.state.newbook.body}</p>
        </div>
        )}
}

export default Info;