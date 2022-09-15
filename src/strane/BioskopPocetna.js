

function BioskopPocetna() {
    return (
        <div>

            <h3 id="welcome-heading" className="text-primary">Dobro došli u ITECH bioskop</h3>

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

export default BioskopPocetna;