import React,{useState,useEffect} from 'react'
import Product from '../components/Product'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'


const HomeScreen = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            const {data} = await axios.get("/api/products")
            setProducts(data)
     }
     fetchProducts()
    },[])
    return (
        <div>
            <h1>Latest products</h1>
            <Row>
                {products.length>0?products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                )):(<h4>NO PRODUCTS</h4>)}
            </Row>         
        </div>
    )
}

export default HomeScreen
