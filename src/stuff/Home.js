import React, { Component } from 'react'
const axios = require('axios');

function api() {
    axios({
        method:"get",
        url:"https://api.cepik.gov.pl/pojazdy?wojewodztwo=14&data-od=20190430&limit=10"
    }).then(response => console.log(response?.data?.data))
}

class Home extends Component {
    
    render() {
        return (
            <div>
                <h1>Home</h1>
                <div>{api()}</div>
            </div>
        )
    }
}
export {Home}