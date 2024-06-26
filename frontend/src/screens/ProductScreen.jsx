import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Row,Col,Image,ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';
//import products from "../products";


const ProductScreen = () => {

    const [product, setProduct] = useState([]);

    const { id:productId } = useParams();

    useEffect(() => {

        // Define an asynchronous function 'fetchProducts' to fetch data from the backend
        const fetchProduct = async () => {
          
          // Make an HTTP GET request to the '/api/products' endpoint using Axios
          const { data } = await axios.get(`/api/products/${productId}`);
          
          // Update the 'products' state with the data fetched from the endpoint
          setProduct(data);
        };
        
        // Call the 'fetchProducts' function when the component mounts (empty dependency array)
        fetchProduct();
    
      }, [productId]);

    //const product = products.find((p) => p._id === productId );

    /* console.log(product); */

  return <>

   
    <Link className='btn btn-light my-3' to='/'>
        Back
    </Link>
        <Row>

            <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
            </Col>

            <Col md={6}>

                    <ListGroup variant='flush'>
                        <ListGroupItem>
                        <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                         <Rating value={product.rating} text={`${product.numReviews} reviews`}></Rating>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Row>
                                <Col md={12}><strong><bold>Product Description:</bold></strong></Col>
                                <Col md={12}>{product.description}</Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>

            </Col>
        </Row>

        <Row>
            <Col md={12}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <Row>
                                <Col>Price:</Col>
                                <Col>
                                <strong>${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                        <Row>
                                <Col>Status:</Col>
                                <Col>
                                <strong>
                                    ${product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </strong>
                                </Col>
                            </Row>
                        </ListGroupItem>
                        <ListGroupItem>
                                <Button
                                    className='btn-block'
                                    type='button'
                                    disable={product.countInStock===0}
                                > Add To Cart</Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    
  
  </>
  


}

export default ProductScreen