import {LOGIN_IMAGES} from '@/utils/imageRelativePaths';
import Image from 'next/image';
import React from 'react';
import styles from "./SignInOptions.module.scss";
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { app } from "../../pages/firebase";
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app)
const SignInOptions = () => {
  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
  }
  return (
    <>
        <div className={styles.optionsWrapper}>
        <h1>Sign in with another account</h1>
        <div className={styles.options}>
          <button className={styles.facebookBtn}>
            <Image src={LOGIN_IMAGES.facebook} alt="logo" height={14} width={14} />
            <span>Facebook</span>
          </button>
          <button className={styles.googleBtn} onClick={signupWithGoogle}>
            <Image src={LOGIN_IMAGES.google} alt="logo" height={14} width={14}/>
            <span>Google</span>
          </button>
          <button className={styles.vkBtn}>
            <Image src={LOGIN_IMAGES.vk} alt="logo" height={14} width={14}/>
            <span>VK</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default SignInOptions