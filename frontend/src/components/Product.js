import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({product}) => {
    return (
        <Card className="my-3 py-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top"></Card.Img>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title>{product.name}</Card.Title>
                </a>
                <Card.Text as="div">
                    <Rating value={product.rating} text={`${product.numReviews}条评论`}></Rating>  
                </Card.Text>
                <Card.Text as='h3'>
                    ￥{product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
