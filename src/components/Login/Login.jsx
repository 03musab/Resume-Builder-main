import React, { useState } from 'react'
import styles from './Login.module.css'
import InputControl from "../InputControl/InputControl"
import { Link, useNavigate  } from 'react-router-dom'
import { database } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {

  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(database, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        
        navigate("/home");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>
            <h1 style={{ textAlign: 'center', fontSize: '3rem', margin: '2rem 0', padding:'30px' }}>Ai-resume Builder</h1>


      <div className={styles.innerbox}>
         <h1 className={styles.headeing}>LOGIN</h1>

         <InputControl label="Email" placeholder='Enter Email Address'
         onChange={(event) =>
          setValues((prev) => ({ ...prev, email: event.target.value }))
          }/>
         <InputControl label="Password" placeholder='Enter Password' 
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }/>

         <div className={styles.footers}>
         <b className={styles.error}>{errorMsg}</b>
          <button disabled={submitButtonDisabled} onClick={handleSubmission}>Login</button>
          <p>
            Already have an account? {""}
            <span>
              <Link to="/Signup">Sign Up</Link>
            </span>
          </p>
         </div>
      </div>

    </div>
  )
}

export default Login