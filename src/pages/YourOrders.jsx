import React from "react";
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import img1 from '../assets/img1.png'
import img3 from '../assets/img3.png'
import img21 from '../assets/img21.png'
import img12 from '../assets/img12.png'
import img29 from '../assets/img29.png'
import img10 from '../assets/img10.png'

const YourOrders = () => {
  return (
    <div>
        <Header/>
    <Container fluid style={{ marginTop: "20px", maxWidth: "1200px" }}>
      {/* Breadcrumb */}
      <Row>
        <Col>
          <div style={{ fontSize: "14px" }}>
            <a
              href="#"
              style={{ textDecoration: "none", color: "#0073bb" }}
            >
              Your Account
            </a>{" "}
            ›{" "}
            <span style={{ color: "black" }}>Your Orders</span>
          </div>
        </Col>
      </Row>

      {/* Top Row: Title + Search */}
      <Row
        className="align-items-center justify-content-between"
        style={{ marginTop: "10px" }}
      >
        <Col>
          <h3 style={{ fontWeight: "500" }}>Your Orders</h3>
        </Col>
        <Col xs="auto">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Form.Control
              type="text"
              placeholder="Search all orders"
              style={{
                width: "250px",
                fontSize: "14px",
                marginRight: "8px",
                height: "34px",
              }}
            />
            <Button
              variant="dark"
              style={{
                fontSize: "14px",
                height: "34px",
                padding: "0px 14px",
              }}
            >
              Search Orders
            </Button>
          </div>
        </Col>
      </Row>

      {/* Tabs */}
      <Row style={{ marginTop: "15px", borderBottom: "1px solid #e0e0e0" }}>
        <Col>
          <Nav
            variant="tabs"
            defaultActiveKey="orders"
            style={{ borderBottom: "none" }}
          >
            <Nav.Item>
              <Nav.Link
                eventKey="orders"
                style={{
                  color: "black",
                  border: "none",
                  borderBottom: "3px solid black",
                  fontWeight: "500",
                }}
              >
                Orders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="buy-again"
                style={{ color: "#555", border: "none" }}
              >
                Buy Again
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="not-yet-shipped"
                style={{ color: "#555", border: "none" }}
              >
                Not Yet Shipped
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                eventKey="cancelled-orders"
                style={{ color: "#555", border: "none" }}
              >
                Cancelled Orders
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>

      {/* Orders count + Dropdown */}
      <Row style={{ marginTop: "20px" }}>
        <Col md="auto">
          <span style={{ fontWeight: "500" }}>0 orders</span> placed in{" "}
        </Col>
        <Col xs="auto">
          <Form.Select
            size="sm"
            style={{
              width: "160px",
              display: "inline-block",
              fontSize: "14px",
              height: "32px",
            }}
          >
            <option>past 3 months</option>
            <option>past 6 months</option>
            <option>past year</option>
          </Form.Select>
        </Col>
      </Row>

      {/* Empty Orders Message */}
      <Row style={{ marginTop: "25px" }}>
        <Col>
          <p style={{ color: "#555", fontSize: "14px" }}>
            Looks like you haven’t placed an order in the last 3 months.{" "}
            <a href="#" style={{ color: "#0073bb", textDecoration: "none" }}>
              View orders in 2024
            </a>
          </p>
        </Col>
      </Row>
   
   <div
  className="border mt-3 p-3"
  style={{
    borderColor: "#d3d3d3",
    maxWidth: "1250px",
    margin: "0 auto",
    borderRadius: "4px",
  }}
>
  {/* Header */}
  <div className="d-flex justify-content-between align-items-center flex-wrap">
    <h5 className="mb-2 mb-md-0 fw-medium">
      Recommended based on your shopping trends
    </h5>
    <span style={{ fontSize: "14px" }}>Page 1 of 2</span>
  </div>

  {/* Product Row */}
  <div
    className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap flex-md-nowrap mt-3"
    style={{ position: "relative" }}
  >
    {/* Left Arrow */}
    <button
      className="btn btn-light d-none d-md-block"
      style={{
        border: "1px solid #aaa",
        width: "30px",
        height: "60px",
        marginRight: "10px",
        padding: 0,
      }}
    >
      &#10094;
    </button>

    {/* Product Grid */}
    <div
      className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-start gap-3"
      style={{ overflow: "hidden" }}
    >
      {/* Product 1 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img1}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          POLKA TOTS Boy’s Cotton Full Sleeve Angrakha Kurta with Dhoti Set for
          Baby Kid, Traditional Ethnic Wear
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹722.00
        </div>
      </div>

      {/* Product 2 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img10}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          AJ DEZINES Kids Ethnic Wear Solid White Pajama Pant For Boys
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹399.00
        </div>
      </div>

      {/* Product 3 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img12}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          TinySteps Traditional Ethnic Wear Boys Rayon Printed Kurta With Sequin
          Embroidery and White Cotton Pajama
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹699.00
        </div>
      </div>

      {/* Product 4 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img21}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          EIO® 100% Cotton Rompers Sleepsuits Jumpsuit Night Suits for Infants
          Newborn Baby Boys & Girls Pack of 3
        </div>
        <div
          style={{
            background: "#b12704",
            color: "white",
            display: "inline-block",
            fontSize: "12px",
            padding: "1px 6px",
            borderRadius: "3px",
            marginTop: "4px",
          }}
        >
          Limited time Deal
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹409.00
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#555",
            textDecoration: "line-through",
          }}
        >
          M.R.P: ₹1,499.00
        </div>
      </div>

      {/* Product 5 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img3}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          EIO Pants for Kids Baby Pants Pyjamas Combo Pack
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹399.00
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#555",
            textDecoration: "line-through",
          }}
        >
          M.R.P: ₹1,499.00
        </div>
      </div>

      {/* Product 6 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img10}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          AJ DEZINES Kids Floral Print Pure Cotton Dhoti Kurta Set For Boys
        </div>
        <div
          style={{
            background: "#b12704",
            color: "white",
            display: "inline-block",
            fontSize: "12px",
            padding: "1px 6px",
            borderRadius: "3px",
            marginTop: "4px",
          }}
        >
          Limited time Deal
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹969.00
        </div>
      </div>
    </div>

    {/* Right Arrow */}
    <button
      className="btn btn-light d-none d-md-block"
      style={{
        border: "1px solid #aaa",
        width: "30px",
        height: "60px",
        marginLeft: "10px",
        padding: 0,
      }}
    >
      &#10095;
    </button>
  </div>
</div>





 <div
  className="border mt-3 p-3"
  style={{
    borderColor: "#d3d3d3",
    maxWidth: "1250px",
    margin: "0 auto",
    borderRadius: "4px",
  }}
>
  {/* Header */}
  <div className="d-flex justify-content-between align-items-center flex-wrap">
    <h5 className="mb-2 mb-md-0 fw-medium">
      Recommended based on your shopping trends
    </h5>
    <span style={{ fontSize: "14px" }}>Page 1 of 2</span>
  </div>

  {/* Product Row */}
  <div
    className="d-flex align-items-center justify-content-center justify-content-md-start flex-wrap flex-md-nowrap mt-3"
    style={{ position: "relative" }}
  >
    {/* Left Arrow */}
    <button
      className="btn btn-light d-none d-md-block"
      style={{
        border: "1px solid #aaa",
        width: "30px",
        height: "60px",
        marginRight: "10px",
        padding: 0,
      }}
    >
      &#10094;
    </button>

    {/* Product Grid */}
    <div
      className="d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-start gap-3"
      style={{ overflow: "hidden" }}
    >
      {/* Product 1 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img1}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          POLKA TOTS Boy’s Cotton Full Sleeve Angrakha Kurta with Dhoti Set for
          Baby Kid, Traditional Ethnic Wear
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹722.00
        </div>
      </div>

      {/* Product 2 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img10}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          AJ DEZINES Kids Ethnic Wear Solid White Pajama Pant For Boys
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹399.00
        </div>
      </div>

      {/* Product 3 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img12}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          TinySteps Traditional Ethnic Wear Boys Rayon Printed Kurta With Sequin
          Embroidery and White Cotton Pajama
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹699.00
        </div>
      </div>

      {/* Product 4 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img21}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          EIO® 100% Cotton Rompers Sleepsuits Jumpsuit Night Suits for Infants
          Newborn Baby Boys & Girls Pack of 3
        </div>
        <div
          style={{
            background: "#b12704",
            color: "white",
            display: "inline-block",
            fontSize: "12px",
            padding: "1px 6px",
            borderRadius: "3px",
            marginTop: "4px",
          }}
        >
          Limited time Deal
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹409.00
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#555",
            textDecoration: "line-through",
          }}
        >
          M.R.P: ₹1,499.00
        </div>
      </div>

      {/* Product 5 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img3}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          EIO Pants for Kids Baby Pants Pyjamas Combo Pack
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹399.00
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#555",
            textDecoration: "line-through",
          }}
        >
          M.R.P: ₹1,499.00
        </div>
      </div>

      {/* Product 6 */}
      <div style={{ width: "150px", textAlign: "left" }}>
        <img
          src={img10}
          alt=""
          className="img-fluid"
        />
        <div style={{ fontSize: "13px", marginTop: "5px" }}>
          AJ DEZINES Kids Floral Print Pure Cotton Dhoti Kurta Set For Boys
        </div>
        <div
          style={{
            background: "#b12704",
            color: "white",
            display: "inline-block",
            fontSize: "12px",
            padding: "1px 6px",
            borderRadius: "3px",
            marginTop: "4px",
          }}
        >
          Limited time Deal
        </div>
        <div className="fw-semibold" style={{ color: "#b12704" }}>
          ₹969.00
        </div>
      </div>
    </div>

    {/* Right Arrow */}
    <button
      className="btn btn-light d-none d-md-block"
      style={{
        border: "1px solid #aaa",
        width: "30px",
        height: "60px",
        marginLeft: "10px",
        padding: 0,
      }}
    >
      &#10095;
    </button>
  </div>
</div>




    </Container>

    <Footer/>
    </div>
  );
};

export default YourOrders;
