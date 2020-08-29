import React, { useState } from 'react'
import { Form, Container, Col, Button } from 'react-bootstrap';

const Search = (props) => {

    const [search, setSearch] = useState('')

    return (
        <Container>
            <Form className="mt-2">
                <Form.Row className="align-items-center">
                    <Col sm={10} className="my-1">
                        <Form.Control
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="search the pokemon" />
                    </Col>
                    <Col sm={2} className="my-1">
                        <Button block onClick={(e) => ''}>
                            Search
                        </Button>
                    </Col>
                </Form.Row>
            </Form>


        </Container>
    )
}

export default Search
