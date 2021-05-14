import React, { useState } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { Link } from 'react-router-dom';


export default function CarCard(car) {
    return (
        <div>
            {car?.car?.attributes?.marka}
            <Link to={`/car-details/${car?.car?.id}`}>Zobacz więcej</Link>
        </div>
    )
}
