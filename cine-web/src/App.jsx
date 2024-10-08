import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCine from "./components/NavBarCine";
import CardFilm from "./components/CardFilm";
import { Container, Col, Row } from "react-bootstrap";
import { getMovie } from './services/Movie';
import { setMovies } from './redux/MovieSlice';

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [localMovies, setLocalMovies] = useState([]); // Stato locale per memorizzare i film
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getMovie();
            dispatch(setMovies(movies));
            setLocalMovies(movies); // Memorizza i film nello stato locale
        };
        fetchMovies();
    }, [dispatch]);

    const handleSearchChange = (event) => setSearchTerm(event.target.value);

    const filteredFilms = localMovies.filter(film =>
        film.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

    return (
        <>
            <NavBarCine />
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
                        {filteredFilms.map((film, index) => (
                            <Col key={index}>
                                <CardFilm titolo={film.title} desc={film.descrizione} img={film.img} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
