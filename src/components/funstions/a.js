import React from 'react'

export default function A(val) {
    const odp = [ val.odp1, val.odp2, val.odp3 ]

    return (
        <div>
            <h1> Pytanie {val.numer}: </h1>
            <h2> {val.tytul} </h2>
            <h3> {val.text} </h3>

        </div>
    )
}
