import React from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'




const Auth = ({insideRegister}) => {
  return (
   <>
     <div
      style={{
        backgroundColor: "#fff",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container className="d-flex flex-column align-items-center">
        {/* Amazon Logo */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="Amazon"
          style={{ width: "100px", marginBottom: "20px" }}
        />

        {/* Card */}
        <Card style={{ width: "350px", borderRadius: "8px" }}>
          <Card.Body>
            <h4 style={{ fontWeight: "500" }}>Create Account</h4>

            <Form>
             { 
              insideRegister&&
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label style={{ fontSize: "14px" }}>Your name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              }

              <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label style={{ fontSize: "14px" }}>
                 email
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

            { insideRegister? 
            <Button
                className="w-100"
                style={{
                  backgroundColor: "#f0c14b",
                  borderColor: "#a88734 #9c7e31 #846a29",
                  color: "#111",
                  fontWeight: "500",
                }}
              >
                Register
              </Button>
              
            :
             <Button
                className="w-100"
                style={{
                  backgroundColor: "#f0c14b",
                  borderColor: "#a88734 #9c7e31 #846a29",
                  color: "#111",
                  fontWeight: "500",
                }}
              >
                Login
              </Button>
            }


            </Form>

            {/* <div className="mt-3">
              <p style={{ fontSize: "13px", marginBottom: "5px" }}>
                <strong>Buying for work?</strong>
              </p>
              <a href="#" style={{ fontSize: "13px", textDecoration: "none" }}>
                Create a free business account
              </a>
            </div> */}

           {insideRegister?
           <div className="mt-3" style={{ fontSize: "13px" }}>
              Already have an account?{" "}
              <a href="/" style={{ textDecoration: "none" }}>
                Login ▸
              </a>
            </div>
            :
             <div className="mt-3" style={{ fontSize: "13px" }}>
             New User? please click here to{" "}
              <a href="/register" style={{ textDecoration: "none" }}>
                Register ▸
              </a>
            </div>
            }

            <p
              className="mt-3"
              style={{ fontSize: "12px", color: "#555", lineHeight: "1.4" }}
            >
              By creating an account or logging in, you agree to Amazon’s{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Conditions of Use
              </a>{" "}
              and{" "}
              <a href="#" style={{ textDecoration: "none" }}>
                Privacy Notice
              </a>
              .
            </p>
          </Card.Body>
        </Card>

        <div className="mt-3" style={{ width: "350px", textAlign: "center" }}>
          <p
            style={{
              fontSize: "13px",
              color: "#777",
              borderBottom: "1px solid #ddd",
              lineHeight: "0.1em",
              margin: "20px 0",
            }}
          >
            <span style={{ background: "#fff", padding: "0 10px" }}>or</span>
          </p>
          <Button
            variant="light"
            className="w-100 border"
            style={{
              borderRadius: "5px",
              fontSize: "14px",
              padding: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
            }}
          >
           <i className='fa-brands-fa-google'></i>
            Login with Google
          </Button>
        </div>
      </Container>
    </div></>
  )
}

export default Auth