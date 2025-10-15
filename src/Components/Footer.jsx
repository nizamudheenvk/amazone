import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Footer = () => {
  return (
   <>
   <div style={{ backgroundColor: "#232f3e", color: "#fff", paddingTop: "40px", fontSize: "14px" }}>
  <div style={{ textAlign: "center", padding: "10px 0", backgroundColor: "#37475a", fontSize: "13px", cursor: "pointer" }}>
    Back to Top
  </div>

  <Container style={{ paddingTop: "30px", paddingBottom: "30px" }}>
    <Row xs={2} md={4} className="g-4">
      <Col>
        <h6 className="fw-bold text-white">Get to know Us</h6>
        <ul className="list-unstyled">
          <li>About Us</li>
          <li>Careers</li>
          <li>Press Releases</li>
          <li>Amazon Science</li>
        </ul>
      </Col>
      <Col>
        <h6 className="fw-bold text-white">Connect with Us</h6>
        <ul className="list-unstyled">
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </Col>
      <Col>
        <h6 className="fw-bold text-white">Make Money with Us</h6>
        <ul className="list-unstyled">
          <li>Sell on Amazon</li>
          <li>Sell under Amazon Accelerator</li>
          <li>Protect and Build Your Brand</li>
          <li>Amazon Global Selling</li>
          <li>Supply to Amazon</li>
          <li>Become an Affiliate</li>
          <li>Fulfilment by Amazon</li>
          <li>Advertise Your Products</li>
          <li>Amazon Pay on Merchants</li>
        </ul>
      </Col>
      <Col>
        <h6 className="fw-bold text-white">Let Us Help You</h6>
        <ul className="list-unstyled">
          <li>Your Account</li>
          <li>Returns Center</li>
          <li>Recalls and Products Safety Alerts</li>
          <li>100% Purchase Protection</li>
          <li>Amazon App Download</li>
          <li>Help</li>
        </ul>
      </Col>
    </Row>

    <div className="text-center mt-4 mb-4">
      <img src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo" style={{ height: "30px" }} />
      <div className="d-inline-block mx-2" style={{ backgroundColor: "#37475a", borderRadius: "5px", padding: "5px 10px", color: "#fff", fontSize: "12px" }}>
        🌐 English
      </div>
      <div className="d-inline-block mx-2" style={{ backgroundColor: "#37475a", borderRadius: "5px", padding: "5px 10px", color: "#fff", fontSize: "12px" }}>
        🇮🇳 India
      </div>
    </div>
  </Container>

  <div style={{ backgroundColor: "#131a22", padding: "30px 20px", color: "#ddd", fontSize: "12px" }}>
    <Container>
      <Row xs={2} md={4} className="g-4">
        <Col>
          <p className="mb-1"><strong>AbeBooks</strong></p>
          <p className="mb-0">Books, art<br />& collectibles</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>Amazon Web Services</strong></p>
          <p className="mb-0">Scalable Cloud<br />Computing Services</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>Audible</strong></p>
          <p className="mb-0">Download<br />Audio Books</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>IMDb</strong></p>
          <p className="mb-0">Movies, TV<br />& Celebrities</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>Shopbop</strong></p>
          <p className="mb-0">Designer<br />Fashion Brands</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>Amazon Business</strong></p>
          <p className="mb-0">Everything For<br />Your Business</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>Prime Now</strong></p>
          <p className="mb-0">2-Hour Delivery<br />on Everyday Items</p>
        </Col>
        <Col>
          <p className="mb-1"><strong>Amazon Prime Music</strong></p>
          <p className="mb-0">100 million songs, ad-free<br />Over 15 million podcast episodes</p>
        </Col>
      </Row>

      <hr style={{ borderColor: "#555" }} />
      <p className="text-center mt-3 mb-0" style={{ fontSize: "12px", color: "#aaa" }}>
        Conditions of Use & Sale&nbsp;&nbsp;|&nbsp;&nbsp;Privacy Notice&nbsp;&nbsp;|&nbsp;&nbsp;Interest-Based Ads
      </p>
      <p className="text-center" style={{ fontSize: "12px", color: "#aaa" }}>
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </p>
    </Container>
  </div>
</div>

   </>
  )
}

export default Footer