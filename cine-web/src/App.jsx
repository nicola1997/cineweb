import * as React from 'react';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux'; // Importa useDispatch e useSelector
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarCine from "./components/NavBarCine.jsx";
import CardFilm from "./components/CardFilm.jsx";
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import {getMovie} from './services/Movie.ts';
import {setMovies} from './redux/MovieSlice.js'; // Importa l'azione setMovies

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const dispatch = useDispatch(); // Crea una funzione dispatch per inviare azioni

    // Effetto per chiamare getMovie al montaggio del componente
    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getMovie();
            dispatch(setMovies(movies)); // Salva i film nello stato Redux
        };

        fetchMovies(); // Chiama la funzione per ottenere i film
    }, [dispatch]); // Aggiungi dispatch come dipendenza
    // Seleziona i film dallo stato Redux
    const filmData = useSelector((state) => state.movies);

    // Funzione per gestire il cambiamento dell'input di ricerca
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtra i film in base al termine di ricerca
    const filteredFilms = filmData && filmData.length > 0
        ? filmData.filter(film => film.title.toLowerCase().includes(searchTerm.toLowerCase()))
        : []; // Se filmData è undefined o vuoto, restituisci un array vuoto


    return (
        <>
            <NavBarCine/>
            <div>
                <h1>I Film più Popolari</h1>
                <input
                    type="text"
                    placeholder="Cerca un film..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    style={{marginBottom: '20px', padding: '10px', width: '100%'}}
                />
                <Container>
                    <Row>
                        {filteredFilms.map((film, index) =>
                            <Col key={index}>
                                <CardFilm titolo={film.title} desc={film.descrizione} img={film.img}/>
                            </Col>
                        )}
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default App;
