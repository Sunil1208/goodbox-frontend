import React from 'react'

const chunkArray = (myArray, chunk_size) =>{
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}
const BowlingData = ({bowling,playerData}) => {
    let arr = []
    Object.entries(playerData.data[0].bowlData).forEach(([key, value]) => {
        console.log(`${key}: ${value}`)
        arr.push(value)
    })
    var result = chunkArray(arr, 14);
    return(
        <table class="table table-responsive table-hover">
              <thead class="thead-light">
                <tr>
                  <th scope="col">{`     `}</th>
                  <th scope="col">Mat</th>
                  <th scope="col">Inns</th>
                  <th scope="col">Balls</th>
                  <th scope="col">Runs</th>
                  <th scope="col">Wkts</th>
                  <th scope="col">BBI</th>
                  <th scope="col">BBM</th>
                  <th scope="col">Avg</th>
                  <th scope="col">Econ</th>
                  <th scope="col">SR</th>
                  <th scope="col">4w</th>
                  <th scope="col">5w</th>
                  <th scope="col">10</th>
                </tr>
            </thead>
            <tbody>
            {result.map((numList,i) => {
                return(<tr key={i} >
                    {
                        numList.map((num,j) => {
                            if(j===0){
                                return (<th key={j} >{num}</th>)
                            }
                            return(<td key={j} >{num}</td>)
                        })
                    }
                </tr>)
                
            })}
            </tbody>
            </table>
    )
}

export default BowlingData;