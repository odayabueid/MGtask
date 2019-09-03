import React from 'react';
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';

class News extends React.Component{
    constructor(props){
        super(props);
        this.state = {   
            newsArr:[],
            img:"",
            newbook:"",
            redirect:false,
            search:"",
            ind:""
        }
    }
    componentWillMount(){
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then(data => data.json())
          .then((data) => {
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

    Search(event){
        this.setState({
          search : event.target.value
        })
      }

    renderRedirect = () =>{
        if(this.state.redirect){
            return <Redirect to = {{
                pathname:"info/",
                state:{newbook:this.state.newbook,
                    img:this.state.img,
                    ind:this.state.ind
                    }
            }}/>
        }
      }

      render(){
        let filtered =this.state.newsArr.filter(
            (fil) =>{
              return fil.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            })
        return(
            <div>
                {this.renderRedirect()}
                <form class="form-inline" style={{display: 'flex',flexWrap: 'wrap',}}>
                    <TextField
                      id="outlined-search"
                      label="Search field"
                      type="search"
                      style={{margin :"auto" , marginTop:"20px",marginRight:"theme.spacing(1)",width:"30%"}}
                      margin="normal"
                      variant="outlined"
                      onChange= {this.Search.bind(this)}
                    />
                </form>
                {filtered.map((news,index) =>
                    <div onClick={(e) => {
                        this.setState({newbook:news,ind:index},()=>{
                        this.details()
                        })}}>

                        <div className="card" style={{height:"20rem" ,width: "21rem" ,float:"left",margin:"10px"}}>
                            <img className="card-img-top" src={`https://picsum.photos/id/${index}/100/100`} alt="Card image cap" height="200" width="300"/>
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