import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
// products import from json
import data from "../data/products.json";

import bgimg from '../assets/bg.jpg'
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.png";
import img12 from "../assets/img12.png";



const Home = () => {


const images = [
  img1, img2, img3, img4, img5, img6, img7,img8,
  img9,img10,img11,img12
];

const imageMap = {};
for (let i = 1; i <= images.length; i++) {
  imageMap[`/assets/img${i}.png`] = images[i - 1];
}


  return (
   <>
    <div style={{ backgroundColor: "#f3f3f3", padding: "30px 0" }}>
    
        {/* Top Banner */}
        <div className='bgg'
          style={{
            background:`url(${bgimg})`,
            padding: "20px",
            borderRadius: "10px",
            // marginBottom: "30px",
            height:"60vh",
            backgroundSize:"cover",
            textAlign: "center",
          }}
        >
          <h3 style={{ fontWeight: "600" }}>Starting ₹99</h3>
          <p style={{ margin: 0, fontSize: "14px" }}>Budget store</p>
          <h6 style={{ fontSize: "14px", color: "#555" }}>
            Home, Kitchen & outdoor
          </h6>
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
                      <Col xs={6} key={i}>
                        <img
                          src={imageMap[item.image]} // use imported image
                          alt={`img-${i}`}
                          style={{
                            width: "100%",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </Col>
                    ))}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

     
    </div>
   </>
  )
}

export default Home