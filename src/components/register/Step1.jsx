import { Field, ErrorMessage } from "formik";
import Styles from "../../styles/Register.module.css";
import img from "/education-illustration.svg";

export default function Step1({ isRight, setIsRight }) {
  return (
    <div className={Styles.inner__content}>
      <div className={Styles.illustration}>
        <img src={img} />
      </div>
      <div className={Styles.form__controls}>
        <div className={Styles.form__control}>
          <label htmlFor="first-name">first name: </label>

          <Field
            type="text"
            id="first-name"
            className={Styles.inputBox}
            name="student_info.first_name"
          />

          <ErrorMessage name="student_info.first_name">
            {(errorMsg) => (
              <div style={{ color: "red" }} className={Styles.errorMsg}>
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>
        <div className={Styles.form__control}>
          <label htmlFor="middle-name">middle name: </label>
          <Field type="text" id="middle-name" name="student_info.middle_name" />
          <ErrorMessage name="student_info.middle_name" className="errorMsg">
            {(errorMsg) => (
              <div style={{ color: "red" }} className={Styles.errorMsg}>
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>
        <div className={Styles.form__control}>
          <label htmlFor="last-name">last name: </label>
          <Field type="text" id="last-name" name="student_info.last_name" />
          <ErrorMessage name="student_info.last_name" className="errorMsg">
            {(errorMsg) => (
              <div style={{ color: "red" }} className={Styles.errorMsg}>
                {errorMsg}
              </div>
            )}
          </ErrorMessage>
        </div>
      </div>
    </div>
  );
}
