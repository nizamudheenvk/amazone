import React from 'react'
import { useLocation } from 'react-router-dom' // 👈 to get image data
import img29 from '../assets/img29.png'
import Header from '../Components/Header'
import Footer from '../Components/Footer'

const ProductView = () => {
  const location = useLocation();
  const selectedImage = location.state?.image || img29; // 👈 use passed image or fallback

  return (
    <> 
    <Header/>
<div className="container mt-4 mb-5" style={{ fontFamily: "Arial, sans-serif", color: "#111" }}>
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
          <button className="btn btn-warning flex-fill fw-bold">Add to Cart</button>
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

<Footer/>
    </>
  )
}

export default ProductView
