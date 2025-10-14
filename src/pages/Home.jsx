import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import data from "../data/products.json";
import bgimg from './imgess/bg.jpg'


const Home = () => {
  return (
    <div style={{ backgroundColor: "#f3f3f3", padding: "30px 0" }}>
      {/* Top Banner */}
      <div
        className="bgg"
        style={{
          background: `url(${bgimg})`,
          padding: "20px",
          borderRadius: "10px",
          height: "60vh",
          backgroundSize: "cover",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontWeight: "600" }}>Starting ₹99</h3>
        <p style={{ margin: 0, fontSize: "14px" }}>Budget store</p>
        <h6 style={{ fontSize: "14px", color: "#555" }}>Home, Kitchen & outdoor</h6>
        <div
          style={{
            backgroundColor: "#fff8e1",
            border: "1px solid #f1c40f",
            display: "inline-block",
            padding: "10px 15px",
            marginTop: "10px",
            borderRadius: "5px",
          }}
        >
          <p style={{ fontSize: "13px", margin: 0 }}>
            💳 Get extra up to 5% back with Amazon Pay ICICI Bank
          </p>
        </div>
      </div>

      <Container>
        <Row xs={1} sm={2} md={4} className="g-4">
          {data.catagories.map((category, idx) => (
            <Col key={idx}>
              <Card className="h-100 shadow-sm p-2">
                <Card.Body>
                  <Card.Title style={{ fontSize: "14px", fontWeight: "600" }}>
                    {category.titile}
                  </Card.Title>
                  <Row className="mt-2 g-2">
                  {category.images.map((item, i) => (
  <Col xs={6} key={i} className="text-center">
    <img
      src={item.image}       // direct URL from public folder
      alt={item.name}
      style={{ width: "100%", height: "80px", objectFit: "cover", borderRadius: "5px" }}
    />
    <p style={{ fontSize: "12px", marginTop: "5px" }}>{item.name}</p>
  </Col>
))}


                  </Row>
                  <p>explore all</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
