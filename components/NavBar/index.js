import { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.scss";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { AppContext } from "@/context/AppContext";

const navLinks = [
  {
    title: "Home",
    name: "home",
  },
  {
    title: "Explore",
    name: "explore",
  },
  {
    title: "Profile",
    name: "profile",
  },
];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();
  const router = useRouter();
  const context = useContext(AppContext);
  console.log(context);

  useEffect(() => {
    setActiveLink(pathname.split("/")[1]);
  }, []);
  console.log(activeLink);
  console.log(activeLink === navLinks[0].name);

  const handleRoute = (path) => {
    router.push(`/${path}`);
  };
  return (
    <div className={styles.navbar_container}>
      <div className={styles.logo_section}>
        Image<span className={styles.hub}>Hub</span>
      </div>
      {/* Nav Link Container */}
      <div className={styles.nav_link_container}>
        {/* Nav Links */}

        {navLinks.map((cElement) => {
          return (
            <span
              className={`${styles.nav_link} ${
                activeLink === cElement.name ? styles.active : ""
              }`}
              onClick={() => handleRoute(cElement.name)}
            >
              {cElement.title}
            </span>
          );
        })}

        {/* Nav Ber Buttons  */}

        <div className={styles.nav_buttons}>
          <button
            className={styles.sign_in}
            onClick={() => handleRoute("sign-in")}
          >
            Sign in
          </button>
          <button
            className={styles.register}
            onClick={() => handleRoute("register")}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
