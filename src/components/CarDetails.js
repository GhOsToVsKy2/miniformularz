import React, {useEffect, useState} from 'react'
import axios from 'axios'

export default function CarDetails() {

    let [info, setInfo] = useState({});

    const link = window.location.href.split('/')[4]
    useEffect(() => {
        axios.get(`https://api.cepik.gov.pl/pojazdy/${link}`)
            .then(res => setInfo(res?.data?.data?.attributes))
            .catch(() => console.log('coś poszło nie tak'));
    }, [])
    return (
        <div>
            {console.log(info)}
        </div>
    )
}
