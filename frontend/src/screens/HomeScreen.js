import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  // 类似于声明周期
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");

      // 赋值
      setProducts(data)
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>最新产品</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
