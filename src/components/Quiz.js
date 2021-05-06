import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import { useRecoilState } from 'recoil'
import {odpowiedzi} from './../index' 

const pytania = [
    { numer: 1, tytul: 'marka', text: 'nie wiem jakie pytania zadawać, ale tu bedzie o marke', odp1: 'Audi', odp2:'BMW' , odp3:'Ford' , },
    { numer: 2, tytul:'rok_produkcji' , text:'damy tu przedziały czasowe?' , odp1:'1990-2005' , odp2:'2005-2015' , odp3:'2015-dziś', },
    { numer: 3, tytul: 'rodzaj_paliwa', text: 'bedzie trzeba się dowiedzieć jakie są 3 najpopularniejsze', odp1: 'Benzyna', odp2: 'Gaz', odp3:'Elektryczny' , }
]

export default function Quiz() {
    const [aktualne, setAktualne] = useState(0)
    const [odp, setOdp] = useState([])
    const [arr, setArr] = useState( [pytania[aktualne].odp1, pytania[aktualne].odp2, pytania[aktualne].odp3 ])
    const [gotowy, setGotowy] = useState(false)
    const [ odpowiedz, setOdpowiedz ] = useRecoilState( odpowiedzi )
   
    useEffect( () => {
        setArr([pytania[aktualne].odp1, pytania[aktualne].odp2, pytania[aktualne].odp3 ])
    }, [ aktualne ] )

    useEffect( () => {
        setOdpowiedz( odp )
    }, [ odp ] )
  
    const odpGuzior = (odpowiedz, pytanie) => {
        setOdp(e => [...e, odpowiedz])
    if( aktualne < pytania.length -1 ){
        setAktualne( aktualne + 1 )
    }else{
        setGotowy( true )
    }
   }
  
   return (
        <div>
            <p> Pytanie {pytania[aktualne].numer} z {pytania.length} </p>
            <h3> {pytania[aktualne].text} </h3>
            {arr.map( (a, i) =>
                <button key={i} onClick={e => odpGuzior( a, pytania[aktualne].tytul )} > { a } </button>
            )}
            { gotowy ? <Redirect to='/quiz-wynik'/> : null }
        </div>
    )
}
