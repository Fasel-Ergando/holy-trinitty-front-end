import FormikStepper from "../components/multistep/FormikStepper";
import FormikStep from "../components/multistep/FormikStep";
import Step1 from "../components/register/Step1";
import Step2 from "../components/register/Step2";
import Step3 from "../components/register/Step3";
import Step4 from "../components/register/Step4";
import Styles from "../styles/Register.module.css";
import { useState } from 'react';
import * as Yup from "yup";
import axios from "../api/axios";

function Register() {


 const [isRight, setIsRight] = useState(true);


  const initialValues = {
    student_info: {
      first_name: "",
      middle_name: "",
      last_name: "",
      gender: "",
      age: "",
      grade: "",
      kebele: "",
      mender: "",
    },
    images: {
      image_letter: "",
      image_admittance: "",
    },
    guardians: [
      {
        guardian_id: "3001000G0001",
        guardian_pk: "",
        relation: "father",
      },
      {
        guardian_id: "3001000G0001",
        guardian_pk: "",
        relation: "father",
      },
    ],
  };
  const handleSubmit = async (values) => {
    const formData = new FormData();
    formData.append("image_letter", values.images.image_letter);
    formData.append("image_admittance", values.images.image_admittance);
    formData.append("guardians", JSON.stringify(values.guardians));
    formData.append("student_info", JSON.stringify(values.student_info));

    // try {
    //   const response = await axios.post("/register", formData, {
    //     headers: {
    //       "Content-Type": "multipart/form-data",
    //     },
    //   });
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);
    // }
    console.log(values);
  };

  const validationSchema = Yup.object({
    student_info: Yup.object({
      first_name: Yup.string().required("field can't be empty"),
      middle_name: Yup.string().required("field can't be empty"),
      last_name: Yup.string().required("field can't be empty"),
      // gender: Yup.string().required("field can't be empty"),
      // age: Yup.number()
      //   .integer("Must be an integer")
      //   .min(1, "Must be at least 1")
      //   .max(100, "Must be at most 100")
      //   .required("This field is required"),
      // grade: Yup.string().required("field can't be empty"),
      // kebele: Yup.string().required("field can't be empty"),
      // mender: Yup.number()
      //   .integer("Must be an integer")
      //   .min(1, "Must be at least 1")
      //   .max(10, "Must be at most 100")
      //   .required("This field is required"),
    }),
  });
  const validationSchema4 = Yup.object({
    images: Yup.object({
      image_letter: Yup.mixed()
        .required("required")
        .test("fileFormat", "Only image files are allowed", (value) => {
          if (value) {
            const supportedFormats = ["image/jpeg", "image/png"];
            return supportedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "File size must be less than 3MB", (value) => {
          if (value) {
            return value.size <= 3145728;
          }
          return true;
        }),
      image_admittance: Yup.mixed()
        .required("required")
        .test("fileFormat", "Only images files are allowed", (value) => {
          if (value) {
            const supportedFormats = ["image/jpeg", "image/png"];
            return supportedFormats.includes(value.type);
          }
          return true;
        })
        .test("fileSize", "File size must be less than 3MB", (value) => {
          if (value) {
            return value.size <= 3145728;
          }
          return true;
        }),
    }),
  });

  return (
    <div className={Styles.wrapper}>
      <FormikStepper
        className={Styles.slider__container}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <FormikStep validationSchema={validationSchema}>
          <Step1 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep>
          <Step2 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep>
          <Step3 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
        <FormikStep validationSchema={validationSchema4}>
          <Step4 isRight={isRight} setIsRight={setIsRight} />
        </FormikStep>
      </FormikStepper>
    </div>
  );
}

export default Register;
