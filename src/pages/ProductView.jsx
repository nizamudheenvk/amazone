import React from 'react'
import { Link, useLocation } from 'react-router-dom' // 👈 to get image data
import img29 from '../assets/img29.png'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Col, Container, Row } from 'react-bootstrap'




const ProductView = () => {
  const location = useLocation();
  const selectedImage = location.state?.image || img29; // 👈 use passed image or fallback

  return (
    <> 
    <Header/>
<div className="container mt-4 mb-5" style={{ fontFamily: "Arial, sans-serif", color: "#111",zIndex:"1" }}>
  <div className="row">
    <div className="col-md-5 d-flex">
      <div className="d-flex flex-column align-items-center me-3">
        <img src={selectedImage} alt="thumb1" className="border rounded mb-2" width="60" height="80" />
        <img src={selectedImage} alt="thumb2" className="border rounded mb-2" width="60" height="80" />
        <img src={selectedImage} alt="thumb3" className="border rounded mb-2" width="60" height="80" />
        <img src={selectedImage} alt="thumb4" className="border rounded" width="60" height="80" />
      </div>

      <div className="flex-grow-1 text-center">
        <img
          src={selectedImage}
          alt="Product"
          className="img-fluid rounded shadow-sm"
          style={{height:"50vh", objectFit: "cover" }}
        />
      </div>
    </div>

    {/* rest content same */}
    <div className="col-md-5">
      <h6 className="text-muted mb-1">
        Brand: <span className="text-primary">WDIRARA</span>
      </h6>
      <h4 className="fw-bold">
        WDIRARA Women's Square Neck Puff Short Sleeve Cut Out Waist Tie Back Flared A Line Dress
      </h4>
      <p className="mb-1">
        <span className="text-warning">★★★★☆</span>{" "}
        <span className="text-secondary">4.1 out of 5</span> · 67 ratings
      </p>
      <hr />
      <h3 className="fw-bold">
        SAR 203<sup>14</sup>
      </h3>
      <p className="text-muted">All price include VAT.</p>
      <p>
        <strong className="text-success">Extra 20%</strong> off with meem credit cards.
      </p>

      <div className="border rounded p-3 mb-3">
        <p className="mb-1">
          Electronic payment only · 30 days returnable · Secure transaction
        </p>
      </div>

      <div className="mb-3">
        <p><strong>Size:</strong> L</p>
        <p><strong>Color:</strong> Black</p>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">Product details</h6>
        <p className="mb-1">Material composition: 99% Polyester, 1% Elastane</p>
        <p className="mb-1">Closure type: Pull On</p>
        <p className="mb-1">Neck style: Scoop Neck</p>
        <p className="mb-1">Sleeve type: Short Sleeve</p>
      </div>

      <div className="mb-3">
        <h6 className="fw-bold">About this item</h6>
        <ul>
          <li>Feature: square neck, cutout, puff sleeve, ruffle hem, tie back aline dress</li>
          <li>Fabric has some stretch, and it's soft and comfortable</li>
          <li>Suitable for daily wear, holidays, dating, vacation, weekend casual</li>
          <li>Care Instructions: Machine wash or professional dry clean</li>
        </ul>
      </div>
    </div>

    <div className="col-md-2">
      <div className="border rounded p-3 bg-light">
        <h5 className="fw-bold mb-2">
          SAR 203<sup>14</sup>
        </h5>
        <p className="text-muted mb-1">SAR 96 delivery 6–9 October</p>
        <p className="text-success mb-1">Usually ships within 4 to 5 days</p>
        <p className="text-muted mb-3">Ships from outside the KSA</p>

        <div className="d-flex align-items-center mb-3">
          <label htmlFor="quantity" className="me-2 fw-bold">Quantity:</label>
          <select id="quantity" className="form-select w-auto">
            <option>1</option>
          </select>
        </div>

        <div className="d-flex gap-2">
          <Link to={'/cart'}><button className="btn btn-warning flex-fill fw-bold">Add to Cart</button></Link>
          <button
            className="btn fw-bold flex-fill"
            style={{ backgroundColor: "#FFA41C", color: "#111" }}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<hr />

<Container className="my-4">
  <Row>
    <Col>
      <h4><strong>Product description</strong></h4>
      <p>
        <strong>Product Measurements:</strong><br />
        X-Small: Bicep Length: 20.7", Bust: 34.6", Cuff: 8.5", Hip Size: 48.8", Length: 32.1", Sleeve Length: 12.4", Waist Size: 25.2-37.8"<br />
        Small: Bicep Length: 21.3", Bust: 36.2", Cuff: 9.1", Hip Size: 50.4", Length: 32.5", Sleeve Length: 12.6", Waist Size: 26.8-39.4"<br />
        Medium: Bicep Length: 21.8", Bust: 37.8", Cuff: 9.6", Hip Size: 52.0", Length: 32.9", Sleeve Length: 12.8", Waist Size: 28.3-40.9"<br />
        Large: Bicep Length: 22.7", Bust: 40.2", Cuff: 10.5", Hip Size: 54.4", Length: 33.5", Sleeve Length: 13.1", Waist Size: 30.7-43.3"
      </p>
    </Col>
  </Row>

  <Row className="my-3">
    <Col>
      <h5><strong>Looking for specific info?</strong></h5>
      <input
        type="text"
        placeholder="Search in reviews, Q&A..."
        className="form-control"
        style={{width:"50%"}}
      />
    </Col>
  </Row>

  <Row className="my-3">
    <Col>
      <h5><strong>Product details</strong></h5>
      <p><strong>Date First Available:</strong> 12 July 2023</p>
      <p><strong>ASIN:</strong> B0CBP16R2H</p>
      <p><strong>Department:</strong> womens</p>
      <p>
        <strong>Customer reviews:</strong> 4.1&nbsp;
        <span style={{ color: '#f0c14b' }}>★★★★☆</span>&nbsp;67 ratings
      </p>
    </Col>
  </Row>
</Container>



<hr />


<Container className="my-4">
  <Row>
    {/* Left Column - Rating Summary */}
    <Col md={4}>
      <h5>Customer Reviews</h5>
      <p>
        <strong>4.1 out of 5</strong><br />
        1 global rating
      </p>
      <div>
        <div>5 star <div className="progress"><div className="progress-bar" style={{ width: '0%' }}></div></div></div>
        <div>4 star <div className="progress"><div className="progress-bar " style={{ width: '71%'}}></div></div></div>
        <div>3 star <div className="progress"><div className="progress-bar" style={{ width: '17%' }}></div></div></div>
        <div>2 star <div className="progress"><div className="progress-bar" style={{ width: '6%' }}></div></div></div>
        <div>1 star <div className="progress"><div className="progress-bar" style={{ width: '6%' }}></div></div></div>
      </div>
      <small><a href="#">How are ratings calculated?</a></small>

      <div className="mt-3">
        <h6>Reviews this product</h6>
        <p>Share your thoughts with other customers</p>
        <button className="btn btn-outline-secondary btn-sm">Write a customer review</button>
      </div>
    </Col>

    {/* Right Column - Reviews */}
    <Col md={8}>
      <div className="mb-3 d-flex justify-content-between align-items-center">
        <strong>Top reviews</strong>
        <select className="form-select form-select-sm w-auto">
          <option>Top reviews</option>
        </select>
      </div>

      <div className="mb-2">
        <strong>Top reviews from Saudi Arabia</strong>
        <div className="text-muted">There are 0 reviews and 0 rating from Saudi Arabia</div>
      </div>

      <div className="mb-3">
        <strong>Top reviews from other countries</strong>
        <br />
        <button className="btn btn-link p-0">Translate all reviews to English</button>
      </div>

      {/* Review 1 */}
      <div className="mb-4">
        <div><strong>Brooke</strong></div>
        <div><strong>★★★★★</strong> Favorite dress</div>
        <small>Reviewed in the United States on 6 August 2024</small><br />
        <small>Size: 40 | Color: Black | <span className="text-warning">Verified Purchase</span></small>
        <p>
          I initially purchased this dress on sale. It turned out to be my favorite dress of this summer.
          It is extremely versatile and unexpectedly flattering. When I accidentally tore it, I was really
          upset. My husband told me to buy it again, which I typically wouldn’t do. It wasn’t on sale and I
          am so frugal. The dress washes very well and I always get compliments when I wear it.
        </p>
        <a href="#" className="small">Report</a>
      </div>

      {/* Review 2 */}
      <div className="mb-4">
        <div><strong>Elva S. D.</strong></div>
        <div><strong>★★★★★</strong> Lindo!!</div>
        <small>Reviewed in the Mexico on 11 August 2023</small><br />
        <small><span className="text-warning">Verified Purchase</span></small>
        <p>
          Bien hecho, bonita tela y bonita caída, fresco y casual. <br />
          La marca lo dice!!
        </p>
        <a href="#" className="small">Report</a>
      </div>

      {/* Review 3 */}
      <div className="mb-4">
        <div><strong>Ana Patricia Rodríguez</strong></div>
        <div><strong>★★★★☆</strong> COMODIDAD</div>
        <small>Reviewed in the United States on 29 June 2023</small><br />
        <small><span className="text-warning">Verified Purchase</span></small>
        <p>
          ES LINDO COMODO Y LIGERO PARA CLIMA CALIDO, ES LA TELA ADECUADA
        </p>
        <a href="#" className="small">Report</a>
      </div>

      {/* Review 4 */}
      <div className="mb-4">
        <div><strong>Ivelisse</strong></div>
        <div><strong>★★★★★</strong> Excellent dress</div>
        <small>Reviewed in the United States on 3 April 2019</small><br />
        <small><span className="text-warning">Verified Purchase</span></small>
        <p>
          Lovely dress... I’m 5’1” with pear form body (149 pounds mostly in hips and booty) and it fits perfect.
        </p>
        <a href="#" className="small">Report</a>
      </div>

      <div className="text-primary">
        <a href="#">See more reviews</a>
      </div>
    </Col>
  </Row>
</Container>


<Footer/>
    </>
  )
}

export default ProductView
