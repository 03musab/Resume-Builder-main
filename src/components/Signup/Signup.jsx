import React, { useState } from 'react'
import InputControl from '../InputControl/InputControl'
import styles from './Signup.module.css'
import { Link, useNavigate  } from 'react-router-dom'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { database } from "../../firebase";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(database, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className={styles.container}>

      <div className={styles.innerbox}>
        <h1 className={styles.headeing}>SIGN UP</h1>

        <InputControl label="Name" placeholder='Enter Your Name'
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))} />
        <InputControl label="Email" placeholder='Enter Email Address'
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))} />
        <InputControl label="Password" placeholder='Enter Password'
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))} />

        <div className={styles.footers}>
          <b className={styles.error}>{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled}>Signup</button>
          <p>
            Already have an account? {" "}
            <span>
              <Link to="/">Login</Link>
            </span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Signup