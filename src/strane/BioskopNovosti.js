

function BioskopNovosti() {
    return (
        <div>

            <h1 className="text-primary" id="usk-h1">Uskoro u bioskopima</h1>


            <div className="div-uskoro">


                <div className="div-item-uskoro">
                    <img className="slika-item" src="https://www.cineplexx.rs//media/rs/inc/movies_licences/ticket_223.jpg" />
                    <h2 className="text-center">Karta za raj</h2>
                    <h5 className="text-center">komedija, romantični/ljubavni</h5>
                    <h6 className="text-center">Početak prikazivanja: <span className="mute">29.9.2022</span></h6>
                </div>

                <div className="div-item-uskoro">
                    <img className="slika-item mx-3" src="https://www.cineplexx.rs//media/rs/inc/movies_licences/B1_AROUND-THE-WORLD-IN-80-DAYS_SRB223.jpg" />
                    <h2 className="text-center mx-1">Put oko sveta za 80 dana</h2>
                    <h5 className="text-center">animirani, avantura, komedija</h5>
                    <h6 className="text-center">Početak prikazivanja: <span className="mute">22.9.2022</span></h6>
                </div>

                <div className="div-item-uskoro">
                    <img className="slika-item" src="https://www.cineplexx.rs//media/rs/inc/movies_licences/smile_rs223.jpg" />
                    <h2 className="text-center">Osmeh</h2>
                    <h5 className="text-center">horor</h5>
                    <h6 className="text-center">Početak prikazivanja: <span className="mute">29.9.2022</span></h6>
                </div>



            </div>


        </div>
    )
}

export default BioskopNovosti;