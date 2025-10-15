import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import img1 from "../assets/img18.png";
import img2 from "../assets/img19.png";
import img3 from "../assets/img20.png";
import img4 from "../assets/img21.png";
import img5 from "../assets/img29.png";
import  tabby from '../assets/tabby.png'
import card from '../assets/card.png'

const Checkout = () => {
  const [showModal, setShowModal] = useState(false);

  const products = [
    { id: 1, name: "Women's Square Neck Puff Short Sleeve Dress", price: 203.14, img: img1 },
    { id: 2, name: "Summer Floral Print A-Line Casual Dress", price: 178.5, img: img2 },
    { id: 3, name: "Elegant Long Sleeve Chiffon Maxi Dress", price: 259.9, img: img3 },
    { id: 4, name: "Casual Cotton Blend Midi Dress", price: 142.3, img: img4 },
    { id: 5, name: "Trendy Sleeveless Fit & Flare Dress", price: 184.6, img: img5 },
  ];

  const total = products.reduce((sum, p) => sum + p.price, 0).toFixed(2);

  // 🟢 Handle Checkout (show modal)
  const handleCheckout = () => {
    setShowModal(true);
    setTimeout(() => {
      setShowModal(false);
    }, 3000); // closes automatically after 3 seconds
  };

  return (
    <Container
      fluid
      className="p-4"
      style={{
        backgroundColor: "#fff",
        fontFamily: "Arial, sans-serif",
        maxWidth: "1200px",
      }}
    >
      {/* AMAZON HEADER */}
      <div
        style={{
          borderBottom: "1px solid #ddd",
          paddingBottom: "10px",
          marginBottom: "20px",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>
          amazon <span style={{ color: "gray" }}>Checkout</span>{" "}
          <span style={{ color: "#007185" }}>({products.length} items)</span>
        </h4>
      </div>

      <Row>
        {/* LEFT SECTION */}
        <Col md={8}>
          {/* Step 1 */}
          <div
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div style={{ fontWeight: "bold" }}>
                1&nbsp;&nbsp;Shipping address
              </div>
              <a href="#" style={{ color: "#007185", fontSize: "14px" }}>
                Change
              </a>
            </div>
            <div style={{ marginLeft: "25px" }}>
              <p style={{ margin: 0 }}>Jacob Jones</p>
              <p style={{ margin: 0 }}>2972 Westheimer Rd.</p>
              <p style={{ margin: 0 }}>Santa Ana, Illinois 85486</p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "20px",
              marginBottom: "20px",
            }}
          >
            <div className="d-flex justify-content-between align-items-center mb-2">
              <div style={{ fontWeight: "bold", color: "red" }}>
                2&nbsp;&nbsp;Choose a payment method
              </div>
              <a href="#" style={{ color: "#007185", fontSize: "14px" }}>
                Close
              </a>
            </div>

            <div
              style={{
                border: "1px solid #ccc",
                borderRadius: "6px",
                padding: "15px",
              }}
            >
              <label
                style={{
                  fontWeight: "bold",
                  marginBottom: "5px",
                  display: "block",
                }}
              >
                Your available balance
              </label>
              <div className="d-flex mb-3">
                <Form.Control
                  type="text"
                  placeholder="Enter a gift code or promotional code"
                  style={{ maxWidth: "300px", marginRight: "10px" }}
                />
                <Button variant="light" style={{ border: "1px solid #ccc" }}>
                  Apply
                </Button>
              </div>

              <div
                style={{
                  borderTop: "1px solid #ddd",
                  paddingTop: "15px",
                  marginTop: "10px",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "15px",
                    color: "#111",
                    fontWeight: "500",
                  }}
                >
                  <img
                    src={card}
                    alt="card"
                    style={{ width: "35px", marginRight: "5px" }}
                  />
                  Add a credit or debit card
                </p>
              </div>

              <div
                style={{
                  borderTop: "1px solid #ddd",
                  paddingTop: "15px",
                  marginTop: "10px",
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "10px" }}>
                  Buy Now, Pay Later
                </p>
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={tabby}
                    alt="tabby"
                    style={{ width: "60px" }}
                  />
                  <p style={{ margin: 0, fontSize: "14px" }}>
                    Pay over time with Tabby <br />
                    <span style={{ fontSize: "12px", color: "#555" }}>
                      0% interest. No hidden charges.
                    </span>{" "}
                    <a href="#" style={{ color: "#007185", fontSize: "12px" }}>
                      Learn more
                    </a>
                  </p>
                </div>
              </div>

              <div
                style={{
                  borderTop: "1px solid #ddd",
                  paddingTop: "15px",
                  marginTop: "10px",
                }}
              >
                <p style={{ fontWeight: "bold", marginBottom: "8px" }}>
                  Other payment options
                </p>
                <Form.Check
                  type="radio"
                  label="Cash on Delivery (COD)"
                  disabled
                  style={{ fontSize: "14px" }}
                />
              </div>

              <Button
                variant="warning"
                style={{
                  marginTop: "10px",
                  backgroundColor: "#FFD814",
                  borderColor: "#FCD200",
                  color: "#111",
                  fontWeight: "bold",
                }}
              >
                Use this payment method
              </Button>
            </div>
          </div>

          {/* Step 3 */}
          <div
            style={{
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            <div style={{ fontWeight: "bold" }}>3&nbsp;&nbsp;Offers</div>
          </div>

          {/* Step 4 - Items */}
          <div>
            <div style={{ fontWeight: "bold", marginBottom: "15px" }}>
              5&nbsp;&nbsp;Items and shipping
            </div>

            {products.map((p) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "10px",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "80px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginRight: "15px",
                  }}
                />
                <div>
                  <p style={{ margin: 0, fontWeight: "500" }}>{p.name}</p>
                  <p style={{ margin: "5px 0", color: "#B12704" }}>
                    SAR {p.price.toFixed(2)}
                  </p>
                  <p style={{ margin: 0, fontSize: "13px", color: "#555" }}>
                    Usually ships within 3–5 days
                  </p>
                </div>
              </div>
            ))}

            <Button
              variant="warning"
              onClick={handleCheckout}
              style={{
                backgroundColor: "#FFD814",
                borderColor: "#FCD200",
                color: "#111",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Checkout
            </Button>
          </div>
        </Col>

        {/* RIGHT SECTION */}
        <Col md={4}>
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "15px",
              backgroundColor: "#f8f8f8",
            }}
          >
            <Button
              variant="warning"
              className="w-100 mb-3"
              style={{
                backgroundColor: "#FFD814",
                borderColor: "#FCD200",
                color: "#111",
                fontWeight: "bold",
              }}
              onClick={handleCheckout}
            >
              Use this payment method
            </Button>

            <p style={{ fontSize: "14px" }}>
              Choose a payment method to continue checking out. You'll still
              have a chance to review and edit your order before it's final.
            </p>

            <div style={{ borderTop: "1px solid #ddd", margin: "10px 0" }} />

            <h6 style={{ fontWeight: "bold" }}>Order Summary</h6>
            <p style={{ marginBottom: "5px" }}>
              Items: <span style={{ float: "right" }}>SAR {total}</span>
            </p>
            <p style={{ marginBottom: "5px" }}>
              Shipping & handling:{" "}
              <span style={{ float: "right" }}>SAR 0.00</span>
            </p>
            <p
              style={{
                color: "#B12704",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Order total: <span style={{ float: "right" }}>SAR {total}</span>
            </p>
          </div>
        </Col>
      </Row>

      {/* ✅ ORDER SUCCESS MODAL */}
     {/* ✅ ORDER SUCCESS MODAL (Beautiful & Bigger) */}
<Modal
  show={showModal}
  centered
  backdrop="static"
  size="lg"
  contentClassName="border-0 rounded-4 shadow-lg"
>
  <div
    style={{
      background: "linear-gradient(135deg, #e0ffe6 0%, #ffffff 100%)",
      borderRadius: "20px",
      textAlign: "center",
      padding: "40px 30px",
    }}
  >
    <div
      style={{
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        backgroundColor: "#28a74520",
        margin: "0 auto 20px auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span style={{ fontSize: "50px", color: "#28a745" }}>✅</span>
    </div>

    <h3 style={{ fontWeight: "bold", color: "#155724" }}>
      Order Placed Successfully!
    </h3>
    <p style={{ fontSize: "16px", color: "#333", marginTop: "10px" }}>
      Thank you for shopping with us! 🎉 <br />
      Your order has been confirmed and will be processed shortly.
    </p>

    <div
      style={{
        backgroundColor: "#d4edda",
        borderRadius: "12px",
        padding: "10px 20px",
        margin: "20px auto",
        maxWidth: "350px",
      }}
    >
      <p style={{ margin: 0, color: "#155724", fontWeight: "500" }}>
        Estimated delivery: <strong>3–5 business days</strong>
      </p>
    </div>

    <div
      className="spinner-border text-success"
      style={{ width: "2rem", height: "2rem" }}
      role="status"
    >
      <span className="visually-hidden">Loading...</span>
    </div>

    <p style={{ color: "#777", marginTop: "15px", fontSize: "14px" }}>
      Closing automatically...
    </p>
  </div>
</Modal>

    </Container>
  );
};

export default Checkout;
