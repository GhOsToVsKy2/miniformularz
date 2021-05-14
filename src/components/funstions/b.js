import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CarCard from '../CarCard';

export default function Bi(val) {

    let [apiCars, setApiCars] = useState([]);


    useEffect(() => {
        const date = new Date();
        const year = (date.getFullYear() - 2).toString();
        const month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1).toString() : (date.getMonth() + 1).toString();
        const day = date.getDate() + 1 < 10 ? "0" + date.getDate().toString() : date.getDate().toString();
        axios.get(`https://api.cepik.gov.pl/pojazdy?wojewodztwo=XX&data-od=${year + month + day}&limit=10`)
            .then(res => {
                setApiCars(apiCars.concat(res.data.data));
            })
            .catch(() => console.log('coś poszło nie tak'))
        for(let i = 2; i <= 32; i+=2){
            axios.get(`https://api.cepik.gov.pl/pojazdy?wojewodztwo=${i < 10 ? "0" : ""}${i}&data-od=${year + month + day}&limit=10&filter['marka']=${val[0]}&filter['rodzaj-paliwa']=${val[1]}`)
            .then(res => {
                setApiCars(apiCars.concat(res.data.data));
            })
            .catch(() => console.log('coś poszło nie tak'))
        }
    }, [])

    return (
        <div>
            <CarCard car={apiCars[0]}/>
            <CarCard car={apiCars[1]} />
            <CarCard car={apiCars[2]} />
        </div>
    )
}
