import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import CardFilm from "./CardFilm.jsx";
import * as React from "react";

function HomeView() {
    return (
        <>
            <div>
                <h1>I film più popolari</h1>
                <Container>
                    <Row>
                        {filmData.map((film) =>
                            <Col>
                                <CardFilm titolo={film.title} desc={film.desc} img={film.img}>

                                </CardFilm>
                            </Col>
                        )}


                    </Row>
                </Container>

            </div>

        </>
    )
}

export default HomeView;
