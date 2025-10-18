import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import data from "../data/products.json";

import bgimg from "../assets/bg.jpg";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Home = () => {
  const navigate = useNavigate();

 
  const images = import.meta.glob("../assets/*.png", { eager: true });


  const imageMap = {};
  for (const path in images) {
    const fileName = path.split("/").pop(); 
    imageMap[`/assets/${fileName}`] = images[path].default;
  }

  return (
    <>
      <Header />
      <div style={{ backgroundColor: "#f3f3f3", padding: "30px 0" }}>
        {/* 🔹 Top Banner */}
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

        {/* 🔹 Product Categories */}
        <Container>
          <Row xs={1} sm={2} md={4} className="g-4">
            {data.catagories.map((category, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm p-2">
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      {category.titile}
                    </Card.Title>
                    <Row className="mt-2 g-2">
                      {category.images.map((item, i) => (
                        <Col xs={6} key={i} className="text-center">
                          <img
                            src={imageMap[item.image]}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              navigate("/productview", {
                                state: { image: imageMap[item.image] },
                              })
                            }
                          />
                          <p
                            style={{
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {item.name}
                          </p>
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

      {/* 🔹 Related Products Section */}
      <div
        style={{ backgroundColor: "#fff", marginTop: "30px", padding: "20px 0" }}
      >
        <Container>
          <Row className="align-items-center justify-content-between mb-3">
            <Col xs="auto">
              <h5 className="fw-bold mb-0">Related to items you’ve viewed</h5>
            </Col>
          </Row>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              scrollBehavior: "smooth",
              paddingBottom: "10px",
            }}
          >
            {[
              imageMap["/assets/img29.png"],
              imageMap["/assets/img21.png"],
              imageMap["/assets/img3.png"],
              imageMap["/assets/img4.png"],
              imageMap["/assets/img29.png"],
              imageMap["/assets/img6.png"],
              imageMap["/assets/img7.png"],
              imageMap["/assets/img21.png"],
            ].map((img, i) => (
              <div
                key={i}
                className="border rounded bg-white shadow-sm"
                style={{
                  flex: "0 0 auto",
                  width: "180px",
                  height: "220px",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onClick={() => navigate("/productview", { state: { image: img } })}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1.0)")
                }
              >
                <img
                  src={img}
                  alt={`product-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
            ))}
          </div>
        </Container>

 <Container>
          <Row className="align-items-center justify-content-between mb-3">
            <Col xs="auto">
              <h5 className="fw-bold mb-0">Related to items you’ve viewed</h5>
            </Col>
          </Row>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              scrollBehavior: "smooth",
              paddingBottom: "10px",
            }}
          >
            {[
              imageMap["/assets/img29.png"],
              imageMap["/assets/img21.png"],
              imageMap["/assets/img3.png"],
              imageMap["/assets/img4.png"],
              imageMap["/assets/img29.png"],
              imageMap["/assets/img6.png"],
              imageMap["/assets/img7.png"],
              imageMap["/assets/img21.png"],
            ].map((img, i) => (
              <div
                key={i}
                className="border rounded bg-white shadow-sm"
                style={{
                  flex: "0 0 auto",
                  width: "180px",
                  height: "220px",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onClick={() => navigate("/productview", { state: { image: img } })}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1.0)")
                }
              >
                <img
                  src={img}
                  alt={`product-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
            ))}
          </div>
        </Container>

      </div>


       <Container>
          <Row xs={1} sm={2} md={4} className="g-4">
            {data.catagories.map((category, idx) => (
              <Col key={idx}>
                <Card className="h-100 shadow-sm p-2">
                  <Card.Body>
                    <Card.Title
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      {category.titile}
                    </Card.Title>
                    <Row className="mt-2 g-2">
                      {category.images.map((item, i) => (
                        <Col xs={6} key={i} className="text-center">
                          <img
                            src={imageMap[item.image]}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: "80px",
                              objectFit: "cover",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            onClick={() =>
                              navigate("/productview", {
                                state: { image: imageMap[item.image] },
                              })
                            }
                          />
                          <p
                            style={{
                              fontSize: "12px",
                              marginTop: "5px",
                            }}
                          >
                            {item.name}
                          </p>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>

         <Container>
          <Row className="align-items-center justify-content-between mb-3">
            <Col xs="auto">
              <h5 className="fw-bold mb-0">Related to items you’ve viewed</h5>
            </Col>
          </Row>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "15px",
              scrollBehavior: "smooth",
              paddingBottom: "10px",
            }}
          >
            {[
              imageMap["/assets/img29.png"],
              imageMap["/assets/img21.png"],
              imageMap["/assets/img3.png"],
              imageMap["/assets/img4.png"],
              imageMap["/assets/img29.png"],
              imageMap["/assets/img6.png"],
              imageMap["/assets/img7.png"],
              imageMap["/assets/img21.png"],
            ].map((img, i) => (
              <div
                key={i}
                className="border rounded bg-white shadow-sm"
                style={{
                  flex: "0 0 auto",
                  width: "180px",
                  height: "220px",
                  cursor: "pointer",
                  transition: "transform 0.3s",
                }}
                onClick={() => navigate("/productview", { state: { image: img } })}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1.0)")
                }
              >
                <img
                  src={img}
                  alt={`product-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
              </div>
            ))}
          </div>
        </Container>


      <Footer />
    </>
  );
};

export default Home;
