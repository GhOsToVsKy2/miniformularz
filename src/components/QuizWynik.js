import React from 'react'
import { useRecoilState } from 'recoil'
import {odpowiedzi} from './../index' 


export default function QuizWynik() {
    const [ odpowiedz, setOdpowiedz ] = useRecoilState( odpowiedzi )
    return (
        <div>
            <b>udzielone odpowiedzi:</b>
            <ul>
                <li> marka: {odpowiedz[0]} </li>
                <li> rok produkcji: {odpowiedz[1]} </li>
                <li> rodzaj paliwa: {odpowiedz[2]} </li>
            </ul>
            <h2> sorka ze to jest w arrayu a nie w obiekcie ładnym z kluczami ale był problem z połączeniem iteracji tych pytań i nadawaniem nazwy klucza zmienną </h2>
        </div>
    )
}
