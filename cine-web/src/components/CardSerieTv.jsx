import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { serieData } from "../data.js";
import CardFilm from "./CardFilm.jsx";
import Container from "react-bootstrap/Container";
import NavBarCine from "./NavBarCine.jsx";
import '../App.css';

function CardSerieTv() {
    const [searchTerm, setSearchTerm] = useState("");

    // Funzione per gestire il cambiamento dell'input di ricerca
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtra i film in base al termine di ricerca
    const filteredFilms = serieData.filter(film =>
        film.titolo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <NavBarCine />
            <h1>Serie TV popolari</h1>
            <input
                type="text"
                placeholder="Cerca un film..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
            <Container>
                <Row>
                    {filteredFilms.map((film, index) => (
                        <Col md={4} key={index}>
                            <CardFilm titolo={film.titolo} desc={film.desc} img={film.img} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default CardSerieTv;
