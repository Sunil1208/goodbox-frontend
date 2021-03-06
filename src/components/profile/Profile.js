import React,{useState,useEffect} from 'react'
import { Paper, Typography, Button } from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import BattingData from '../battingData/BattingData';
import BowlingData from '../bowlingData/BowlingData';
import { getData } from '../../apicall';



const Profile = ({imageUrl,name,team,paramName}) => {

    const [playerData,setPlayerData] = useState([]);
    const [loading,setLoading] = useState(false);
    const [isDataSet,setIsDataSet] = useState(false)

    const loadData = () => {
        setLoading(true)
        getData(paramName).then(result => {
            console.log(result)  
            if(result?.error){
                console.log(result.error)
            } else {
                setPlayerData(result)
                setLoading(false)
                setIsDataSet(true)
            }
        })
    }

    // useEffect(() => {
    //     loadData()
    // },[])

    

    const handleChange = () => {
        loadData()        
        // console.log(playerData)
        // let tempData = playerData
        // console.log(`Temp data is `)
        // console.log(tempData.data)
        
    }


    return (
        <Paper elevation={3} >
            <div className="container">
                <div className="row">
                    <div className="col-8 pt-3">
                        <Typography className="font-weight-bold" >{name}</Typography>
                        <Typography className="font-weight-bold" >{team}</Typography>
                        
                        
                    </div>
                    <div className="col-4">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-3 text-left">
                        
                        <button onClick={handleChange}  className="btn mt-3"><RefreshIcon/>Refresh</button>
                        
                        </div>
                    </div>
                        
                    </div>
                </div>
                <div className="row mb-0">
                    <div className="col-lg-6 col-xs-6 col-md-12 mb-0">
                    {isDataSet && (
                        <p ><span className="font-weight-bold">Last updated at :</span> {playerData.data[0].last_update}</p>
                    )}
                    </div>
                </div>
                <hr className="mt-0" ></hr>
                
                    <div className="row">
                    <div className="col-8 mt-3">
                    {isDataSet ? (
                        <React.Fragment>
                        <Typography><strong>Full name :</strong> {playerData.data[0].full_name}</Typography>
                        <Typography><strong>Born :</strong> {playerData.data[0].born}</Typography>
                        <Typography><strong>Current age :</strong> {playerData.data[0].age}</Typography>
                        <Typography><strong>Major teams :</strong> {playerData.data[0].teams}</Typography>
                        <Typography><strong>Playing role :</strong> {playerData.data[0].role}</Typography>
                        <Typography><strong>Batting style :</strong> {playerData.data[0].batting_style}</Typography>
                        <Typography><strong>Bowling style :</strong> {playerData.data[0].bowling_style}</Typography>
                        </React.Fragment>
                    ): (
                        <Typography>Please hit the refresh button to load the data</Typography>
                    )}
                    </div>
                    <div className="col-4 text-right p-2 mt-0">
                    <img src={imageUrl} className="img-fluid" alt="Shikhar Dhawan" ></img>
                    </div>
                </div>
                <hr></hr>
                {isDataSet && (
                    <React.Fragment>
                <div className="row"  style={{color:"#6D6D6D"}}>
                    <p className="ml-3">Batting and fielding averages</p>
                </div>
                <div className="row">
                <div className="col-12">
                <BattingData batting = {playerData.data[0].batData} playerData={playerData}/>
                </div>
                </div>
                <div className="row"  style={{color:"#6D6D6D"}}>
                    <p className="ml-3">Bowling averages</p>
                </div>
                <div className="row">
                <div className="col-12">
                <BowlingData batting = {playerData.data[0].bowlData} playerData={playerData}/>
                </div>
                </div>
                    </React.Fragment>
                )}
            </div>
        </Paper>
    )
}

export default Profile;
