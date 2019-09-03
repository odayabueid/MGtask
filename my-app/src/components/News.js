import React from 'react';
import { Redirect } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

class News extends React.Component{


    constructor(props){
        super(props);
        this.state = {   
            newsArr:[],
            img:"",
            newbook:"",
            redirect:false
        }
    }


    componentWillMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(data => data.json())
          .then((data) => {
             console.log(data)
             this.setState({
                newsArr:data
             })
           }).catch((err)=>{
            console.log(err)
           })
      }
      componentDidMount(){
        fetch("https://picsum.photos/100/100?rand=2")
          .then((data) => {
             console.log(data)
             this.setState({
                 img:data.url
             })
           }).catch((err)=>{
            console.log(err)
           })
      }

      details(){
        this.setState({
          redirect:true
        })
      }

      renderRedirect = () =>{
        if(this.state.redirect){
          return <Redirect to = {{
            pathname:"info/",
            // username:this.state.username,
            state:{newbook:this.state.newbook,
                    img:this.state.img
            }
          }}/>
        }
      }

      render(){
        return(
        <div>
            {this.renderRedirect()}
            {this.state.newsArr.map(news =>
            <div onClick={(e) => {
                  this.setState({newbook:news},()=>{
                    this.details()

                  })
                  
            }}>
            <div className="card" style={{height:"20rem" ,width: "21rem" ,float:"left",margin:"10px"}}>
                <img className="card-img-top" src={this.state.img} alt="Card image cap" height="200" width="300"/>
                <div className="card-body">
                    <p><span style={{fontWeight:"bold"}}>title: </span><span style={{color:"green"}}>{news.title}</span></p>
                </div>
            </div>
            </div>
            )}
          




        


        </div>)
        
    }

}




export default News;