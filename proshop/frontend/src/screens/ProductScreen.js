import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row,Col,Card,Button, ListGroup,Image} from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'
const ProductScreen = ({match}) => {
    const [product,setProduct] = useState({})
    useEffect(()=>{
        const fetchProduct = async ()=>{
            const {data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[])

    return (
        <>
            <Link to="/" className="btn btn-light p-2 my-3">Go Home</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid></Image>
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: <strong>${product.price}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {`${product.description}`}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                        <Row>
                        <Col>Price:</Col>
                        <Col><strong>${product.price}</strong></Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Row>
                            <Col>Status: </Col>
                            <Col>{product.countInStock>0?"In Stock":"Out Of Stock"}</Col>
                        </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button className="btn-block" type="button" disabled={product.countInStock === 0?true:false}>ADD TO CART</Button>
                        </ListGroup.Item>
                    </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
