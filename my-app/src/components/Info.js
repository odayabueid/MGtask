import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';


class Info extends React.Component{
    constructor(props){
        super(props);
        this.state = {   
            comms:[]
        }
    }

    componentWillMount(){
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
          .then(data => data.json())
          .then((data) => {
             console.log(data)
             this.setState({
                comms:data
             })
           }).catch((err)=>{
            console.log(err)
           })
      }

    render(){
        return(
            <div>
                <Card style={{width:"70%"}}>
                    <CardActionArea>
                        <CardMedia
                            style={{height: 500}}
                            image={`https://picsum.photos/id/${this.props.location.state.ind}/100/100`}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                            <span style={{color:"red"}}>Title:</span> {this.props.location.state.newbook.title}
                            </Typography>
                            <Typography gutterBottom variant="h6" component="h4">
                            <span style={{color:"red"}}>Details:</span> {this.props.location.state.newbook.body}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            {this.state.comms.map(comm =>
                <div>
                    <Card style={{maxWidth: 320 ,height: 250,float:"left",margin:"10px"}}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" style={{ backgroundColor:"#E72C32"}}>
                                    MG
                                </Avatar>
                            }
                            title={comm.name}
                            subheader="September 14, 2018"
                            subheader={comm.email}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {comm.body}
                                </Typography>
                            </CardContent>
                    </Card>
                </div>)}
            </div>
        )}
}

export default Info;