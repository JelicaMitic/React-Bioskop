import Meni from "../komponente/Meni";
import Raspored from "../komponente/Raspored";


function BioskopPocetna() {

    const rasporedFilmova = [
        { dan: 'Ponedeljak', naziv: 'Film 1', trajanje: 90 },
        { dan: 'Ponedeljak', naziv: 'Film 2', trajanje: 95 },
        { dan: 'Utorak', naziv: 'Film 3', trajanje: 90 },
        { dan: 'Utorak', naziv: 'Film 4', trajanje: 85 },
        { dan: 'Sreda', naziv: 'Film 5', trajanje: 90 },
        { dan: 'Sreda', naziv: 'Film 6', trajanje: 100 },
        { dan: 'Cetvrtak', naziv: 'Film 7', trajanje: 75 },
        { dan: 'Petak', naziv: 'Film 8', trajanje: 105 },
        { dan: 'Subota', naziv: 'Film 9', trajanje: 90 },
        { dan: 'Subota', naziv: 'Film 10', trajanje: 110 },
        { dan: 'Nedelja', naziv: 'Film 11', trajanje: 130 },
    ]

    return (
        <div>

            <h3 id="welcome-heading" className="text-primary">Dobro došli u ITECH bioskop</h3>

            <Raspored raspored={rasporedFilmova} />


        </div>
    )
}

export default BioskopPocetna;