

function Tabela(props) {

    const filmovi = props.filmovi;

    return (
        <div>
            <table className='table table-bordered table-hover' id='rasp-tab'>
                < thead >
                    <tr className="table-primary">
                        <th>Dan</th>
                        <th>Naziv</th>
                        <th>Trajanje</th>
                    </tr>
                </thead >
                <tbody className="table-active">
                    {filmovi.map(film => {
                        return (
                            <tr key={film.id}>
                                <td>{film.dan}</td>
                                <td>{film.naziv}</td>
                                <td>{film.trajanje}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table >
        </div>
    )
}

export default Tabela;