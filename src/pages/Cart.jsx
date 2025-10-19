import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import img29 from "../assets/img29.png";
import img21 from "../assets/img21.png";
import img23 from "../assets/img20.png";
import img19 from "../assets/img19.png";
import img18 from "../assets/img18.png";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";


const Cart = () => {
  // 🛒 Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black, L",
      seller: "Monatik LLC",
      size: "L",
      color: "Black",
      price: 203.14,
      qty: 1,
      img: img29,
    },
    {
      id: 2,
      name: "WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black, L",
      seller: "Monatik LLC",
      size: "L",
      color: "Black",
      price: 203.14,
      qty: 1,
      img: img21,
    },
    {
      id: 3,
      name: "Vacuum cleaner",
      seller: "Monatik LLC",
      size: "L",
      color: "Black",
      price: 203.14,
      qty: 1,
      img: img23,
    },
    {
      id: 4,
      name: "Helmets",
      seller: "Monatik LLC",
      size: "L",
      color: "Black",
      price: 203.14,
      qty: 1,
      img: img19,
    },
    {
      id: 5,
      name: "WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress, Black, L",
      seller: "Monatik LLC",
      size: "L",
      color: "Black",
      price: 203.14,
      qty: 1,
      img: img18,
    },
  ]);

  // ➕ Add new item to cart
  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  // ➕ Increase quantity
  const handleIncrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // ➖ Decrease quantity
  const handleDecrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  // ❌ Remove item
  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // 💰 Calculate subtotal
  const subtotal = cartItems
    .reduce((sum, item) => sum + item.price * item.qty, 0)
    .toFixed(2);

  // Example new product (simulate “Add to Cart”)
  const newProduct = {
    id: Date.now(),
    name: "New Arrival Elegant Women's Summer Dress",
    seller: "Fashion Hub",
    size: "M",
    color: "Red",
    price: 150.0,
    img: img29,
  };

  return (
    <div>
      <Header />
      <Container
        fluid
        className="mt-4 px-3 px-md-5"
        style={{ fontFamily: "Arial, sans-serif", color: "#111" }}
      >
        <Row className="justify-content-center">
          {/* LEFT SECTION */}
          <Col xs={12} lg={8} className="border-end pe-lg-4 mb-4 mb-lg-0">
            <h4 className="fw-bold mb-4">Shopping Cart</h4>
<hr />
            {/* CART ITEMS */}
            {cartItems.length > 0 ? (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="d-flex flex-column flex-sm-row border-bottom pb-3 mb-3"
                >
                  <img
                    src={item.img}
                    alt="Dress"
                    style={{
                      width: "100%",
                      maxWidth: "150px",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "5px",
                    }}
                    className="me-sm-3 mb-3 mb-sm-0"
                  />

                  <div className="flex-grow-1">
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <p className="text-danger mb-1">
                      Usually ships within 4 to 5 days
                    </p>
                    <p className="mb-1">
                      Sold by:{" "}
                      <a href="#" className="text-primary text-decoration-none">
                        {item.seller}
                      </a>
                    </p>
                    <p className="mb-1">Size: {item.size}</p>
                    <p className="mb-1">Color: {item.color}</p>

                    <div className="d-flex align-items-center flex-wrap mt-2">
                      {/* Quantity Select */}
                      <Form.Select
                        size="sm"
                        className="w-auto me-3 mb-2"
                        value={item.qty}
                        onChange={(e) =>
                          setCartItems((prev) =>
                            prev.map((i) =>
                              i.id === item.id
                                ? { ...i, qty: parseInt(e.target.value) }
                                : i
                            )
                          )
                        }
                      >
                        {[...Array(10)].map((_, index) => (
                          <option key={index} value={index + 1}>
                            Qty: {index + 1}
                          </option>
                        ))}
                      </Form.Select>

                      {/* Decrease & Increase buttons */}
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-2 mb-2"
                        onClick={() => handleDecrease(item.id)}
                      >
                        −
                      </Button>
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="me-3 mb-2"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </Button>

                      {/* Actions */}
                      <Button
                        variant="link"
                        className="text-primary small me-2 mb-2 p-0"
                        onClick={() => handleRemove(item.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>

                  <div className="text-end mt-2 mt-sm-0">
                    <h6 className="fw-bold">
                      SAR {(item.price * item.qty).toFixed(2)}
                    </h6>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-muted">Your cart is empty.</p>
            )}

            {/* SUBTOTAL */}
            <div className="text-end mb-3 fw-bold">
              Subtotal ({cartItems.length} item
              {cartItems.length > 1 ? "s" : ""}):{" "}
              <span>SAR {subtotal}</span>
            </div>

            {/* ADD TO CART DEMO BUTTON */}
            {/* <div className="text-center mb-4">
              <Button
                variant="success"
                onClick={() => handleAddToCart(newProduct)}
              >
                + Add New Product to Cart
              </Button>
            </div> */}

            <p className="text-muted small border-top pt-3">
              The price and availability of items are subject to change. The
              Cart is a temporary place to store your items and reflects their
              most recent price.
              <br />
              Do you have a gift card or promotional code? You’ll be asked for
              it at checkout.
            </p>
          </Col>

          {/* RIGHT SECTION */}
          <Col xs={12} lg={3} className="ms-lg-3">
            <div
              className="border rounded p-3 mb-3 bg-light"
              style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
            >
              <h6 className="fw-bold mb-3">
                Subtotal ({cartItems.length} item
                {cartItems.length > 1 ? "s" : ""}): SAR {subtotal}
              </h6>
              <Link to={'/checkout'}>
              <Button 
              
                variant="warning"
                className="fw-bold w-100"
                style={{
                  backgroundColor: "#FFD814",
                  borderColor: "#FCD200",
                  color: "#111",
                }}
              >
                Proceed to Buy
              </Button>
              </Link>
            </div>

            <div
              className="border rounded p-3"
              style={{ boxShadow: "0 0 4px rgba(0,0,0,0.1)" }}
            >
              <h6 className="fw-bold mb-3">
                Customers Who Bought Items in Your Recent History Also Bought
              </h6>

              {/* Recommended items */}
              {[img29, img21].map((img, i) => (
                <div
                  key={i}
                  className="d-flex flex-sm-row flex-column align-items-center mb-3"
                >
                  <img
                    src={img}
                    alt="Recommended"
                    style={{
                      width: "70px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                    className="me-sm-3 mb-2 mb-sm-0"
                  />
                  <div className="text-center text-sm-start">
                    <p className="small mb-1 text-primary">
                      Trendy Women's Fashion Dress...
                    </p>
                    <p className="small mb-1">
                      <span style={{ color: "#f0c14b" }}>★★★★☆</span> 43
                    </p>
                    <p className="small fw-bold mb-2">SAR 69.70</p>
                    <Button variant="outline-secondary" size="sm">
                      See all buying options
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Cart;
