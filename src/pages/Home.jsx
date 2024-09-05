import { Link } from "react-router-dom";

import styles from "../styles/style.module.css";
import undrawWelcome from "/undraw_welcome_re_h3d9.svg";
import educationIllustration from "/education-illustration.svg";
import organizationProjects from "/organization-projects.svg";
import phone from "/phone.svg";
import mapPin from "/map-pin.svg";
import mail from "/mail.svg";

import { Outlet } from "react-router-dom";
import { useContext, useEffect } from "react";
import ThemeContext from "../context/ThemeProvider";
import useAuth from "../hooks/useAuth";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext);

  function closeSidebar() {
    console.log("close sidebar");
  }

  function openSidebar() {
    const mobile__sidebar = document.querySelector(".mobile__sidebar");
    console.log(mobile__sidebar);
  }
  const { auth } = useAuth();

  return (
    <>
      <div data-theme={theme}>
        <div className={styles.visually__hidden}>
          Welcome to Hosanna Abba School
        </div>
        <header className={styles.header} id="header">
          <div className={`${styles.container} ${styles.header__container}`}>
            <div className={styles.header__logo}>
              <Link to="/" tabIndex="0">
                Abba School
              </Link>
            </div>
            <nav className={styles.header__nav}>
              <ul className={styles.nav__items}>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
                <li>
                  <Link to="clubs">School Clubs</Link>
                </li>
                <li>
                  <Link to="dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>
            {auth.user ? (
              <p className="capitalize">{auth.user}</p>
            ) : (
              <div className={styles["header__call-to-action"]}>
                <Link
                  aria-label="Login to Abba School"
                  className={`${styles.btn} ${styles.btn__secondary}`}
                  to="login"
                  role="button"
                  tabIndex="0"
                >
                  Login
                </Link>
                <Link
                  aria-label="Login to Abba School"
                  className={`${styles.btn} ${styles.btn__secondary}`}
                  to="register"
                  role="button"
                  tabIndex="0"
                >
                  Register
                </Link>
              </div>
            )}
            <div className={styles.theme__toggler} tabIndex="0">
              <div className={styles.theme__placeholder}>
                <div
                  className={styles.light__mode}
                  onClick={() => setTheme("dark")}
                >
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20423)">
                      <circle
                        cx="12"
                        cy="12"
                        r="4"
                        stroke="#fff"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M20 12H21"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M3 12H4"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 20L12 21"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 3L12 4"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M17.6569 17.6569L18.364 18.364"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M5.63605 5.63604L6.34315 6.34315"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M6.34314 17.6569L5.63603 18.364"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                      <path
                        d="M18.364 5.63604L17.6568 6.34315"
                        stroke="#fff"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20423">
                        <rect fill="#fff" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div
                  className={styles.dark__mode}
                  onClick={() => setTheme("light")}
                >
                  <svg
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1_20424)">
                      <path
                        d="M20.8039 13.8772L21.7822 14.0848C21.8661 13.6893 21.7036 13.2822 21.3704 13.0532C21.0373 12.8241 20.599 12.8182 20.2598 13.0382L20.8039 13.8772ZM12.1005 3.00055L12.8004 3.71471C13.0892 3.43171 13.1791 3.00269 13.0283 2.62757C12.8775 2.25245 12.5157 2.00503 12.1114 2.00061L12.1005 3.00055ZM20.2598 13.0382C19.3217 13.6466 18.2037 14 17 14V16C18.6014 16 20.0958 15.5284 21.3481 14.7162L20.2598 13.0382ZM17 14C13.6863 14 11 11.3137 11 8H9C9 12.4183 12.5817 16 17 16V14ZM11 8C11 6.32116 11.6882 4.80486 12.8004 3.71471L11.4005 2.28639C9.92027 3.7372 9 5.76203 9 8H11ZM12 4C12.0299 4 12.0597 4.00016 12.0895 4.00049L12.1114 2.00061C12.0743 2.0002 12.0372 2 12 2V4ZM4 12C4 7.58172 7.58172 4 12 4V2C6.47715 2 2 6.47715 2 12H4ZM12 20C7.58172 20 4 16.4183 4 12H2C2 17.5228 6.47715 22 12 22V20ZM19.8257 13.6697C19.0583 17.2867 15.8448 20 12 20V22C16.8088 22 20.8227 18.6068 21.7822 14.0848L19.8257 13.6697Z"
                        fill="#fff"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_20424">
                        <rect fill="#fff" height="24" width="24" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            <div
              aria-label="Click to open the sidebar"
              className={styles.nav__toggler}
              role="button"
              tabIndex="0"
              onClick={openSidebar}
            >
              <svg
                fill="none"
                height="25"
                viewBox="0 0 30 30"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_207_11503)">
                  <path
                    d="M2.625 6.75H27.375M2.625 15H27.375M2.625 23.25H27.375"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.75"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_207_11503">
                    <rect fill="white" height="30" width="30" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className={styles.mobile__sidebar}>
              <div
                aria-label="Click to close the sidebar"
                className={styles.close__nav__icon}
                role="button"
                tabIndex="0"
                onClick={() => {
                  console.log(document.querySelector("div"));
                }}
              >
                <svg
                  height="25"
                  style={{
                    stroke: "var(--mobile-sidebar-font-clr)",
                  }}
                  viewBox="0 0 32 32"
                  width="25"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 12.25L29.75 29.75M12.25 29.75L29.75 12.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3.5"
                  />
                </svg>
              </div>
              <nav className={styles.mobile__header__nav}>
                <ul className={styles.mobile__nav__items}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="about">About us</Link>
                  </li>
                  <li>
                    <Link to="clubs">School Clubs</Link>
                  </li>
                  <li>
                    <Link to="dashboard">Dashboard</Link>
                  </li>
                </ul>
              </nav>
              <div className={styles["mobile__header__call-to-action"]}>
                <Link
                  aria-label="Login to Abba School"
                  className={`${styles.btn} ${styles.btn__secondary}`}
                  to="login"
                  role="button"
                  tabIndex="0"
                >
                  Login
                </Link>
                <Link
                  aria-label="Login to Abba School"
                  className={`${styles.btn} ${styles.btn__secondary}`}
                  to="register"
                  role="button"
                  tabIndex="0"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </header>
        <Outlet />

        <footer className={styles.footer} id="footer">
          <div className={`${styles.container} ${styles.footer__container}`}>
            <ul className={styles.Homefooter__col}>
              <li className={styles.footer__col__header} id="school__info">
                <span>School Info</span>
                <span className={styles.Linkdropdown__icon} tabIndex="1">
                  <svg
                    fill="var(--footer-font-clr)"
                    height="18"
                    viewBox="0 0 16 16"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
              <div
                className={`${styles.footer__col__content} ${styles.collapse__col__content}`}
              >
                <li className={styles.footer__col__list}>
                  <Link to="about">About Us</Link>
                </li>
              </div>
            </ul>
            <ul className={styles.footer__col}>
              <li className={styles.footer__col__header} id="school__clubs">
                <span>school Clubs</span>
                <span className={styles.dropdown__icon} tabIndex="2">
                  <svg
                    fill="var(--footer-font-clr)"
                    height="18"
                    viewBox="0 0 16 16"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
              <div
                className={`${styles.footer__col__content} ${styles.collapse__col__content}`}
              >
                <li className={styles.footer__col__list}>
                  <Link href="clubs.html#science__club">Science Club</Link>
                </li>
                <li className={styles.footer__col__list}>
                  <Link href="clubs.html#innovation__club">
                    Innovation Club
                  </Link>
                </li>
                <li className={styles.footer__col__list}>
                  <Link href="clubs.html#drama__club">Drama Club</Link>
                </li>
                <li className={styles.footer__col__list}>
                  <Link href="clubs.html#red__cross__club">Red Cross Club</Link>
                </li>
              </div>
            </ul>
            <ul className={styles.footer__col}>
              <li className={styles.footer__col__header} id="location">
                <span>Location</span>
                <span className={styles.dropdown__icon} tabIndex="3">
                  <svg
                    fill="var(--footer-font-clr)"
                    height="18"
                    viewBox="0 0 16 16"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
              <div
                className={`${styles.footer__col__content} ${styles.collapse__col__content}`}
              >
                <li className={styles.footer__col__list}>
                  <a href="https://maps.google.com" target="_blank">
                    Hadiya Hosaena, Ethiopia
                  </a>
                </li>
              </div>
            </ul>
            <ul className={styles.footer__col}>
              <li className={styles.footer__col__header}>
                <span>Get In Touch</span>
                <span className={styles.dropdown__icon} tabIndex="4">
                  <svg
                    fill="var(--footer-font-clr)"
                    height="18"
                    viewBox="0 0 16 16"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      fillRule="evenodd"
                    />
                  </svg>
                </span>
              </li>
              <div
                className={`${styles.footer__col__content} ${styles.collapse__col__content}`}
              >
                <li
                  className={`${styles.footer__col__list} ${styles.footer__contact__info}`}
                >
                  <span className={styles.side__svg}>
                    <img alt="Phone" src={phone} />
                  </span>
                  <span className={styles.contact__info}> +251909890070 </span>
                </li>
                <li
                  className={`${styles.footer__col__list} ${styles.footer__contact__info}`}
                >
                  <span className={styles.side__svg}>
                    <img alt="Map Pin" src={mapPin} />
                  </span>
                  <span className={styles.contact__info}>
                    4901 Hossana, Ethiopia
                  </span>
                </li>
                <li
                  className={`${styles.footer__col__list} ${styles.footer__contact__info}`}
                >
                  <span className={styles.side__svg}>
                    <img alt="Mail" src={mail} />
                  </span>
                  <span className={styles.contact__info}>
                    Placholder@gmail.com
                  </span>
                </li>
              </div>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}
