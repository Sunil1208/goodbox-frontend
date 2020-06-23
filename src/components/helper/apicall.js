const { API } = require("../../backend");

export const getData = () => {
    return fetch(`${API}/players`,{
        method:"GET"
    })
    .then(response => {
        return response.json()
    })
    .catch(err => console.log(err))
}