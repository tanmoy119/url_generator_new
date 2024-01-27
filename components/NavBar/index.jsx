import React from 'react';
import styles from "./navbar.module.scss";
import { dropdownOptions, navOptions } from './data';
import Image from 'next/image';
import {NAVBAR_IMAGES} from "../../utils/imageRelativePaths"
import { MdCloudUpload } from "react-icons/md";
import { FaSignInAlt } from "react-icons/fa";
import Link from 'next/link';

const NavBar = () => {
  return (
    <div className={styles.navbar}>
        <div className={styles.dropdownWrapper}>
            <select name="" id="">
                <option value="">About</option>
                <option value="">Plug-in</option>
                <option value="">API</option>
                <option value="">Terms of service</option>
                <option value="">Privacy</option>
                <option value="">Contract</option>
            </select>
            <select name="" id="">
                <option value="">
                    Hindi
                </option>
                <option value="">
                    English
                </option>
                <option value="">
                    Spanish
                </option>
                <option value="">
                    French
                </option>
                <option value="">
                    Portugese
                </option>
            </select>
        </div>
        <div className={styles.logoWrapper}>
            <Image src={NAVBAR_IMAGES.logo}  alt='logo' height={24} width={116}  />
        </div>
        <ul className={styles.navOptions}>
            <li>
                <Link href="/">
                <i><MdCloudUpload/></i>
                <p>Upload</p>
                </Link>
            </li>
            <li>
                 <Link href="/login">
                    <i><FaSignInAlt/></i>
                    <p>Sign In</p>
                 </Link>
            </li>
            <li>
                <Link href="/signup">
                <p>Create Account</p>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default NavBar