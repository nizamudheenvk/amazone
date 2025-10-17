import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth} from '../googleSign/config' // ✅ ensure db is exported from your config
import { doc, deleteDoc } from 'firebase/firestore'; // 🔥 Firestore imports

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const user = auth.currentUser;

      if (user) {
        // 🧹 Delete user data from Firestore
        await deleteDoc(doc(db, 'users', user.uid));
      }

      // 🚪 Sign out from Firebase
      await signOut(auth);

      // 🧼 Clear local and session storage
      localStorage.removeItem('email');
      sessionStorage.clear();

      // 🔁 Redirect to login/home page
      navigate('/');

      alert('You have been logged out and your data has been cleared!');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Error during logout: ' + error.message);
    }
  };

  return (
    <>
      {/* Top Header */}
      <div style={{ backgroundColor: '#131921', color: 'white' }}>
        <Container fluid className="py-2 px-3">
          <div className="d-flex flex-column flex-lg-row align-items-center justify-content-between">
            {/* Left: Logo & Location */}
            <div className="d-flex align-items-center mb-2 mb-lg-0">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon Logo"
                style={{ height: '30px', marginRight: '10px' }}
              />
              <div className="d-none d-md-block">
                <small style={{ color: '#ccc' }}>Delivering to Surat 394210</small>
                <br />
                <span style={{ fontWeight: 'bold', fontSize: '14px' }}>📍 Update location</span>
              </div>
            </div>

            {/* Middle: Search Bar */}
            <div
              className="d-flex flex-grow-1 mx-lg-3 w-100"
              style={{ maxWidth: '600px' }}
            >
              <select
                className="form-select rounded-0"
                style={{
                  maxWidth: '70px',
                  backgroundColor: '#ddd',
                  fontSize: '13px',
                }}
              >
                <option>All</option>
              </select>
              <input
                type="text"
                placeholder="Search Amazon.in"
                className="form-control rounded-0"
              />
              <button
                style={{
                  backgroundColor: '#f3a847',
                  border: 'none',
                  padding: '0 12px',
                }}
              >
                🔍
              </button>
            </div>

            {/* Right: Language, Account, Orders, Cart */}
            <div className="d-flex align-items-center gap-3 mt-2 mt-lg-0">
              <div>
                🇮🇳 <span style={{ fontSize: '12px' }}>EN</span>
              </div>

              <div className="text-nowrap">
                <small>Hello, sign in</small>
                <br />
                <strong>Account & Lists ▾</strong>
              </div>

              <div className="text-nowrap">
                <small>Returns</small>
                <br />
                <Link to="/orders" style={{ textDecoration: 'none' }}>
                  <strong style={{ color: 'white' }}>& Orders</strong>
                </Link>
              </div>

              <Link to="/cart" className="text-white text-decoration-none">
                <div className="d-flex align-items-center">
                  🛒 <strong className="ms-1">Cart</strong>
                </div>
              </Link>
            </div>
          </div>
        </Container>

        {/* Bottom Navigation Menu */}
        <div
          style={{
            backgroundColor: '#232f3e',
            padding: '10px 20px',
            fontSize: '14px',
          }}
        >
          <Container fluid>
            <div className="d-flex gap-3 flex-wrap text-white justify-content-between">
              <div>☰ All</div>
              <div>Amazon mini TV</div>
              <div>Sell</div>
              <div>Best Sellers</div>
              <div>Today’s Deals</div>
              <div>Mobiles</div>
              <div>Customer Service</div>
              <div>Electronics</div>
              <div>Fashion</div>
              <div>New Releases</div>
              <div>Home & Kitchen</div>
              <div>Amazon Pay</div>

              {/* 🔘 Logout Button */}
              <button
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  cursor: 'pointer',
                }}
              >
                Logout
              </button>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
