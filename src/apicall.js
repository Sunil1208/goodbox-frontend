const { API } = require("./backend");

export const getData = (paramName) => {
    return fetch(`${API}/players/${paramName}/`,{
        method:"GET",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
        // body:JSON.stringify(playerUrl)
    })
    .then(res => {
        return res.json()
    })
    .catch(err => console.log(err))
}