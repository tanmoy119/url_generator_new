import React, { useState } from 'react'
import styles from "./signup.module.scss";
import Image from 'next/image';
import LOGIN_IMAGES from '@/utils/imageRelativePaths';
import SignInOptions from '@/components/SignInOptions';
import NavBar from '@/components/NavBar';
import { getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase";
const auth = getAuth(app);

const index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const createUser = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password).then(value => console.log("Success"));
  }
  return (
    <>
    <NavBar />
    <div className={styles.signUpPage}>
      <form className={styles.signUpForm} onSubmit={createUser}>
        <h1>Create Account</h1>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Email</label>
          <input 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text" 
          placeholder="Email Address" 
          required
          />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Username</label>
          <input type="text" placeholder="Username" />
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="">Password</label>
          <input 
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" 
          placeholder="Password" 
          required
          />
        </div>
        <div className={styles.checkboxWrapper}>
          <input 
            type="checkbox"   
          checked={isChecked} 
          onChange={(e) => setChecked(e.target.checked)}
          />
          <span>I agree to terms and policy</span>
        </div>
        <button type="submit" disabled={!isChecked}>Create Account</button>
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