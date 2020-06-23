import React,{useState} from 'react'
import { getData } from '../helper/apicall';
import { Paper, Typography, Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import Profile from '../profile/Profile';


const Home = () => {

    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [player,setPlayer] = useState(1);
    let shikharImage = "data:image/jpeg;base64,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"
    let viratImage = "data:image/jpeg;base64,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"
    let rahulImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRu6ZYccoJW2T7Jb2rwWodD4zBX5N5jUYRGnQlNiXxgkO8b96hS&usqp=CAU"
    let bumrahImage = "data:image/jpeg;base64,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"


    const loadData = () => {
        setLoading(true)
        getData().then(data => {
            if(data.error){
                console.log(data.error)
            } else {
                setData(data)
                console.log(data)
                setLoading(false)
            }
        })
    }

    const LoadProfile = (player) => {
        if(player ===1){
            return(
                <Profile imageUrl={shikharImage} name="Shikhar Dhawan" team="India" />
            )
        } else if(player ===2){
            return(
                <Profile imageUrl={viratImage} name="Viral Kohli" team="India" />
            )
        } else if(player ===3){
            return(
                <Profile imageUrl={rahulImage} name="KL Rahul" team="India" />
            )
        } else if(player ===4){
            return(
                <Profile imageUrl={bumrahImage} name="Jasprit Bumrah" team="India" />
            )
        }
    }

    return(
        <React.Fragment>
        <div className="container">
            <div className="row">
                <div className="col-12">
                <h1 className="text-center" >Players Data</h1>
                </div>
                
            </div>
            <div className="row">
                <div className="col-3">
                <table className="table table-bordered">
                <thead>
                  <tr className="text-center p-3">
                    <th scope="col text-center">Player Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border" style={{backgroundColor:"#f4f6ff"}}>
                    <Button onClick={() => {setPlayer(1)}} className="btn btn-block" ><Typography>Shikhar Dhawan</Typography></Button>
                  </tr> 
                  <tr className="border" style={{backgroundColor:"#f4f6ff"}} >
                  <Button onClick={()=> {setPlayer(2)}} className="btn btn-block" ><Typography>Virat Kohli</Typography></Button>
                </tr> 
                <tr className="border" style={{backgroundColor:"#f4f6ff"}} >
                <Button onClick={()=> {setPlayer(3)}} className="btn btn-block" ><Typography>KL Rahul</Typography></Button>
              </tr>  
              <tr className="border" style={{backgroundColor:"#f4f6ff"}} >
                <Button onClick={()=> {setPlayer(4)}} className="btn btn-block" ><Typography>Jasprit Bumrah</Typography></Button>
              </tr>              
                </tbody>
                </table>
                </div>
                <div className="col-9">
                    {LoadProfile(player)}
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default Home;