import * as React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCine from "./components/NavBarCine.jsx";
import CardFilm from "./components/CardFilm.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {filmData, serieData} from './data.js';
import {useState} from "react";

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    // Funzione per gestire il cambiamento dell'input di ricerca
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtra i film in base al termine di ricerca
    const filteredFilms = filmData.filter(film =>
        film.titolo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return (
        <>
            <NavBarCine>
            </NavBarCine>
            <div>
                <h1>I Film più Popolari</h1>
                <input
                    type="text"
                    placeholder="Cerca un film..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
                />
                <Container>
                    <Row>
                        {filteredFilms.map((film,index) =>
                            <Col key={index}>
                                <CardFilm titolo={film.titolo} desc={film.desc} img={film.img}>

                                </CardFilm>
                            </Col>
                        )}


                    </Row>
                </Container>

            </div>
        </>
    )
}

export default App;
