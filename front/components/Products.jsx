import React from 'react';
import {Card, Button, Container, Row, Col} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Products = ({products}) => {

    return (
        <Container style={{marginTop:"10px", maxWidth:"90%", display:"flex", justifyContent:"center"}}>
            <Row>
                {products.map(product => {
                    return (
                    <Col xs={3} className="mb-4" key={product._id}>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.brand}</Card.Text>
                        <Card.Text>{product.description}</Card.Text>
                        <Card.Text>{product.price}</Card.Text>
                        <Link to={`/product/${product._id}`}><Button variant="primary" style={{width:"100px", margin:"10px"}}>Mas info</Button></Link>
                        <Link to="/purchase"><img src="shopping-cart.png" alt="add to cart" width="45px" height="50px"></img></Link>
                        </Card.Body>
                    </Card>
                    </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Products;