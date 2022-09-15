import Meni from "./Meni";

function Raspored(props) {

    const raspored = props.raspored


    return (
        <div>



            <select id="select-dan" className="form-select">
                <option value="">Izaberi dan</option>
                <option value="Ponedeljak">Ponedeljak</option>
                <option value="Utorak">Utorak</option>
                <option value="Sreda">Sreda</option>
                <option value="Cetvrtak">Četvrtak</option>
                <option value="Petak">Petak</option>
                <option value="Subota">Subota</option>
                <option value="Nedelja">Nedelja</option>
            </select>



        </div>
    )
}

export default Raspored;