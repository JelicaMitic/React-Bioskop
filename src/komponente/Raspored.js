import { useState } from 'react'
import Tabela from './Tabela';

function Raspored(props) {

    const raspored = props.raspored
    const filmoviNaDan = props.filmoviNaDan

    const [dan, setDan] = useState('');

    function postaviDan(e) {
        setDan(e.target.value);
    }



    return (
        <div>


            <select id="select-dan" className="form-select" onChange={postaviDan} value={dan}>
                <option value="">Izaberi dan</option>
                <option value="Ponedeljak">Ponedeljak</option>
                <option value="Utorak">Utorak</option>
                <option value="Sreda">Sreda</option>
                <option value="Cetvrtak">Četvrtak</option>
                <option value="Petak">Petak</option>
                <option value="Subota">Subota</option>
                <option value="Nedelja">Nedelja</option>
            </select>

            <button onClick={() => props.prikaz(dan)} className='btn btn-primary' id='btn-prikazi'>Pogledaj filmove</button>

            {filmoviNaDan.length > 0 ? <Tabela filmovi={filmoviNaDan} /> : ''}


        </div>
    )
}

export default Raspored;