import bookLover from "/book lover.svg";
import scienceClub from "/science club.svg";
import schoolClubs from "/school clubs.svg";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <main id="main">
      {/* About The School Section */}
      <div
        className={`${styles.container} ${styles.about__card__container}`}
        id="about__the__school"
      >
        <div
          className={`${styles.about__card__container__left} ${styles.container__left}`}
        >
          <div className={styles.heading__1}>About The School</div>
          <p className={styles.description__text}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Maxime, modi!
          </p>
        </div>
        <div
          className={`${styles.about__card__container__right} ${styles.container__right} ${styles.illustration}`}
        >
          <img src={bookLover} alt="Book Lover" />
        </div>
      </div>

      {/* School Facilities Section */}
      <div className={styles.school__facilities}>
        {/* Laboratories Section */}
        <div
          className={`${styles.container} ${styles.about__card__container}`}
          id="laboratories"
        >
          <div
            className={`${styles.about__card__container__left} ${styles.illustration}`}
          >
            <img src={scienceClub} alt="Science Club" />
          </div>
          <div className={styles.about__card__container__right}>
            <div className={styles.heading__2}>Laboratories</div>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maxime, modi!
            </p>
            <a href="laboratories.html" className={styles.header__desc__link}>
              Learn More
            </a>
          </div>
        </div>

        {/* School Clubs Section */}
        <div
          className={`${styles.container} ${styles.about__card__container}`}
          id="school__clubs"
        >
          <div className={styles.about__card__container__left}>
            <div className={styles.heading__2}>School Clubs</div>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maxime, modi!
            </p>
            <a href="clubs.html" className={styles.header__desc__link}>
              Learn More
            </a>
          </div>
          <div
            className={`${styles.about__card__container__right} ${styles.illustration}`}
          >
            <img src={schoolClubs} alt="School Clubs" />
          </div>
        </div>

        {/* Departments Section */}
        <div
          className={`${styles.container} ${styles.about__card__container}`}
          id="school__departments"
        >
          {/* Uncomment if using image */}
          <div
            className={`${styles.about__card__container__left} ${styles.illustration}`}
          >
            <img src={schoolClubs} alt="Departments" />
          </div>
          <div className={styles.about__card__container__right}>
            <div className={styles.heading__2}>Departments</div>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
              suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Maxime, modi!
            </p>
            <a href="departments.html" className={styles.header__desc__link}>
              Learn More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
