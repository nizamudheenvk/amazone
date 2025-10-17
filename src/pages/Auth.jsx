import React, { useEffect, useState } from 'react'
import { Button, Card, Container, Form, Spinner } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginApi, registerApi } from '../SERVICES/allApi'
import { auth,provider } from '../googleSign/config'
import { signInWithPopup } from 'firebase/auth'
import Home from './Home'




  

const Auth = ({insideRegister}) => {

  
const [value,setValue] =useState('')
 const handleClick = () => {
  signInWithPopup(auth, provider)
    .then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
      navigate("/home"); // ✅ redirect to home page
    })
    .catch((err) => {
      console.error("Google Sign-In Error:", err);
    });
};


useEffect(()=>{
setValue(localStorage.getItem("email"))
},)


  const [islogin , setIslogin]= useState(false)



 const [userInput,setUserinput] = useState({username:"",email:"",password:""

   })
   console.log(userInput);
   const navigate = useNavigate()


   const register = async(e)=>{
    e.preventDefault()
 if(userInput.username && userInput.email && userInput.password){

    try{
        const result = await registerApi(userInput)
        if(result.status==200){
            alert(`welcome ${userInput?.username} `)
            navigate('/')
        }else{
            if(result.response.status==406){
                alert(result.response.data)
                setUserinput({username:"",email:"",password:""})
            }
        }

    }catch(err){
        console.log(err);
        
    }

 }else{
    alert("please fil the form")
 }

}


const login = async(e)=>{
e.preventDefault()

    if(userInput.email && userInput.password){
      try{
        const result = await loginApi(userInput)
        console.log(result);
        
        if (result.status==200){
            sessionStorage.setItem("user",JSON.stringify(result.data.user))
            sessionStorage.setItem("token",result.data.token)
          
  navigate("/home")
  setUserinput({username:"",email:"",password:""})
setIslogin(false)
   
        }else{
            if(result.response.status==404){
                alert(result.response.data)
            }

        }

      }catch(err){
        console.log(err);
        
      }

    }else{
        alert("pleae fill the form completely")
    }
}





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
                <Form.Label style={{ fontSize: "14px" }}>username</Form.Label>
                <Form.Control  value={userInput.username}  onChange={e=>setUserinput({...userInput,username:e.target.value})} type="text" />
              </Form.Group>
              }

              <Form.Group className="mb-3" controlId="formMobile">
                <Form.Label style={{ fontSize: "14px" }}>
                 email
                </Form.Label>
                <Form.Control  value={userInput.email}  onChange={e=>setUserinput({...userInput,email:e.target.value})} type="text" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Label style={{ fontSize: "14px" }}>Password</Form.Label>
                <Form.Control  value={userInput.password}  onChange={e=>setUserinput({...userInput,password:e.target.value})} type="password" />
              </Form.Group>

            { insideRegister? 
            <Button
                onClick={register}
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
             onClick={login}
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
              {/* <a href="/" style={{ textDecoration: "none" }}>
                Login ▸
              </a> */}
              <Link to={'/'}style={{textDecoration:"none"}}>login</Link>
            </div>
            :
             <div className="mt-3" style={{ fontSize: "13px" }}>
             New User? please click here to{" "}
              {/* <a href="/register" style={{ textDecoration: "none" }}>
                Register ▸
              </a> */}

              <Link to={'/register'} style={{textDecoration:"none"}}>
              Register ▸</Link>
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
          <div>
           <Button
  onClick={handleClick}
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
  <i className="fa-brands fa-google"></i>
  Login with Google
</Button>

          </div>
        </div>
      </Container>
    </div></>
  )
}

export default Auth