import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import styles from "./login.module.scss";
import Image from 'next/image';
import LOGIN_IMAGES from '@/utils/imageRelativePaths';
import SignInOptions from '@/components/SignInOptions';
import NavBar from '@/components/NavBar';
const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = getAuth(app);
  const signInUser = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password).then(value => alert("Sign in Success"));
  }
  return (
    <>
    <NavBar />
    <div className={styles.signUpPage}>
      <form className={styles.signUpForm} onSubmit={signInUser}>
        <h1>Sign In</h1>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Email Address" required onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
        </div>
        <p>Forgot password?</p>
        <button type='submit'>Sign In</button>
      </form>
      <div>
      <h4>OR</h4>
      <hr />
      </div> 
      <SignInOptions />
    </div>
    </>
  )
}

export default index