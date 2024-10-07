import React from "react";
import {serieData} from "../data.js";

function FinderInput(props){
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // Filtra i film in base al termine di ricerca
    const filteredFilms = serieData.filter(film =>
        film.titolo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div>
            <input
                type="text"
                placeholder="Cerca un film..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
            />
        </div>

    )
}
export default FinderInput