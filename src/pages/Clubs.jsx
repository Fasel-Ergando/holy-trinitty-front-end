import styles from "../styles/style.module.css";
import bookLover from "/book lover.svg";

const Clubs = () => {
  return (
    <main id="main">
      <section className={styles.clubs__banner} id="clubs__hero__section">
        <div className={styles.container + " " + styles.clubs__hero__container}>
          <h1 className={styles.heading__1}>School Clubs</h1>
          <p className={styles.description__text}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Reprehenderit qui harum eum neque nihil nam doloribus aperiam
            dolore? Excepturi quaerat dignissimos.
          </p>
        </div>

        <div className={styles.hero__curve}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className={styles.shape__fill}
            ></path>
          </svg>
        </div>
      </section>

      <section id="science__club">
        <div className={styles.container + " " + styles.about__container}>
          <div
            className={
              styles.about__container__left +
              " " +
              styles.container__left +
              " " +
              styles.illustration
            }
          >
            <img src={bookLover} alt="Science Club" />
          </div>
          <div
            className={
              styles.about__container__right + " " + styles.container__right
            }
          >
            <h2 className={styles.heading__2}>Science Club</h2>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates illum, magnam culpa aliquid id voluptatem non minus
              dolores? Consequuntur laboriosam, expedita nesciunt, esse corrupti
              modi consectetur rem doloribus animi veniam sapiente.
            </p>
            <a href="login.html" className={styles.header__desc__link}>
              Join
            </a>
          </div>
        </div>
      </section>

      <section id="innovation__club">
        <div
          className={
            styles.container +
            " " +
            styles.md__reverse +
            " " +
            styles.about__container
          }
        >
          <div
            className={
              styles.about__container__left + " " + styles.container__left
            }
          >
            <h2 className={styles.heading__2}>Innovation Club</h2>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates illum, magnam culpa aliquid id voluptatem non minus
              dolores? Consequuntur laboriosam, expedita nesciunt, esse corrupti
              modi consectetur rem doloribus animi veniam sapiente.
            </p>
            <a href="login.html" className={styles.header__desc__link}>
              Join
            </a>
          </div>
          <div
            className={
              styles.about__container__right +
              " " +
              styles.container__right +
              " " +
              styles.illustration
            }
          >
            <img src={bookLover} alt="Innovation Club" />
          </div>
        </div>
      </section>

      <section id="drama__club">
        <div className={styles.container + " " + styles.about__container}>
          <div
            className={
              styles.about__container__left +
              " " +
              styles.container__left +
              " " +
              styles.illustration
            }
          >
            <img src={bookLover} alt="Drama Club" />
          </div>
          <div
            className={
              styles.about__container__right + " " + styles.container__right
            }
          >
            <h2 className={styles.heading__2}>Drama Club</h2>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates illum, magnam culpa aliquid id voluptatem non minus
              dolores? Consequuntur laboriosam, expedita nesciunt, esse corrupti
              modi consectetur rem doloribus animi veniam sapiente.
            </p>
            <a href="login.html" className={styles.header__desc__link}>
              Join
            </a>
          </div>
        </div>
      </section>

      <section id="red__cross__club">
        <div
          className={
            styles.container +
            " " +
            styles.md__reverse +
            " " +
            styles.about__container
          }
        >
          <div
            className={
              styles.about__container__left + " " + styles.container__left
            }
          >
            <h2 className={styles.heading__2}>Red Cross Club</h2>
            <p className={styles.description__text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates illum, magnam culpa aliquid id voluptatem non minus
              dolores? Consequuntur laboriosam, expedita nesciunt, esse corrupti
              modi consectetur rem doloribus animi veniam sapiente.
            </p>
            <a href="login.html" className={styles.header__desc__link}>
              Join
            </a>
          </div>
          <div
            className={
              styles.about__container__right +
              " " +
              styles.container__right +
              " " +
              styles.illustration
            }
          >
            <img src={bookLover} alt="Red Cross Club" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Clubs;
