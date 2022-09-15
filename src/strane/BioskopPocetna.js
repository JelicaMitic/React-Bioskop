import Raspored from "../komponente/Raspored";
import { useState } from 'react'


function BioskopPocetna() {

    const [danFilmovi, setDanFilmovi] = useState([]);


    const rasporedFilmova = [
        { id: 1, dan: 'Ponedeljak', naziv: 'Film 1', trajanje: 90 },
        { id: 2, dan: 'Ponedeljak', naziv: 'Film 2', trajanje: 95 },
        { id: 3, dan: 'Utorak', naziv: 'Film 3', trajanje: 90 },
        { id: 4, dan: 'Utorak', naziv: 'Film 4', trajanje: 85 },
        { id: 5, dan: 'Sreda', naziv: 'Film 5', trajanje: 90 },
        { id: 6, dan: 'Sreda', naziv: 'Film 6', trajanje: 100 },
        { id: 7, dan: 'Cetvrtak', naziv: 'Film 7', trajanje: 75 },
        { id: 8, dan: 'Petak', naziv: 'Film 8', trajanje: 105 },
        { id: 9, dan: 'Subota', naziv: 'Film 9', trajanje: 90 },
        { id: 10, dan: 'Subota', naziv: 'Film 10', trajanje: 110 },
        { id: 11, dan: 'Nedelja', naziv: 'Film 11', trajanje: 130 },
    ]


    function prikaziRaspored(dan) {
        setDanFilmovi([])
        rasporedFilmova.forEach(element => {
            if (element.dan == dan)
                setDanFilmovi(current => [...current, element]);
        });
    }




    return (
        <div>

            <h3 id="welcome-heading" className="text-primary">Dobro došli u ITECH bioskop</h3>

            <Raspored raspored={rasporedFilmova} prikaz={prikaziRaspored} filmoviNaDan={danFilmovi} />




        </div>
    )
}

export default BioskopPocetna;