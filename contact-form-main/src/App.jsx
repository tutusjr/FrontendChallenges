/* eslint-disable react/no-unescaped-entities */
import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import icon from "../assets/images/icon.svg";

function App() {
  const validationSchema = Yup.object({
    first_name: Yup.string().required("This field is Required"),
    last_name: Yup.string().required("This field is Required"),
    email: Yup.string()
      .email("Please enter a valid email address")
      .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.com$/, "Email is not valid")
      .required("This field is Required"),
    message: Yup.string().required("This field is Required"),
    radio: Yup.string()
      .oneOf(["1", "2"])
      .required("Please select a query type"),
    checkbox: Yup.string().required(
      "To submit this form, please consent to being contacted"
    ),
  });

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      message: "",
      radio: "",
      checkbox: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      toast.success(
        <div className="w-full">
          <div className="flex gap-3">
          <img src={icon} alt="icon"/>
          <p className="font-semibold">Message Sent!</p> 
          </div>
          <p>Thanks for completing the form. We'll be in touch soon!.</p>
        </div>,
        {
          position: "top-center",
          icon: false,
          pauseOnHover: false,
          message: "submit is successful",
        }
      );
    },
  });

  return (
    <>
      <div className="container">
        <h1 className="text-[20px] font-bold">Contact Us</h1>
        {/* form */}
        <form onSubmit={formik.handleSubmit}>
          {/* names */}
          <div className="flex p-2 gap-5">
            {/* firstname */}
            <div className="flex flex-col flex-1">
              <label htmlFor="first_name">
                <p>
                  First Name <span>*</span>
                </p>
              </label>
              <input
                className={classNames("input-style", {
                  "input-error":
                    formik.touched.first_name && formik.errors.first_name,
                })}
                type="text"
                id="first_name"
                onChange={formik.handleChange}
                
                value={formik.values.first_name}
              />
              {formik.touched.first_name && formik.errors.first_name ? (
                <div className="error-message">{formik.errors.first_name}</div>
              ) : null}
            </div>
            {/* lastname */}
            <div className="flex flex-col flex-1">
              <label htmlFor="last_name">
                <p>
                  Last Name <span>*</span>
                </p>
              </label>
              <input
                className={classNames("input-style", {
                  "input-error":
                    formik.touched.last_name && formik.errors.last_name,
                })}
                type="text"
                id="last_name"
                onChange={formik.handleChange}
                
                value={formik.values.last_name}
              />
              {formik.touched.last_name && formik.errors.last_name ? (
                <div className="error-message">{formik.errors.last_name}</div>
              ) : null}
            </div>
          </div>
          {/* email */}
          <div className="flex flex-col p-2">
            <label htmlFor="email">
              <p>
                Email <span>*</span>
              </p>
            </label>
            <input
              className={classNames("input-style", {
                "input-error": formik.touched.email && formik.errors.email,
              })}
              type="text"
              id="email"
              onChange={formik.handleChange}
              
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error-message">{formik.errors.email}</div>
            ) : null}
          </div>
          {/* radio */}
          <div className="flex flex-col p-2">
            <p>
              Query type <span className="text-[success-color]">*</span>
            </p>
            <div className="flex gap-5">
              {/* first-radio */}
              <div className="flex-1">
                <input
                  className={classNames("radio-input", {
                    "input-error": formik.touched.radio && formik.errors.radio,
                  })}
                  type="radio"
                  id="option1"
                  name="radio"
                  value="1"
                  onChange={formik.handleChange}
                  
                />
                <label
                  className={classNames("radio-label", {
                    "input-error": formik.touched.radio && formik.errors.radio,
                  })}
                  htmlFor="option1"
                >
                  <span
                    className={classNames("radio-inner-circle", {
                      "input-error":
                        formik.touched.radio && formik.errors.radio,
                    })}
                  ></span>
                  <span>General Question</span>
                </label>
              </div>
              {/* second-radio */}
              <div className="flex-1">
                <input
                  className="radio-input"
                  type="radio"
                  id="option2"
                  name="radio"
                  value="2"
                  onChange={formik.handleChange}
                  
                />
                <label
                  className={classNames("radio-label", {
                    "input-error": formik.touched.radio && formik.errors.radio,
                  })}
                  htmlFor="option2"
                >
                  <span
                    className={classNames("radio-inner-circle", {
                      "input-error":
                        formik.touched.radio && formik.errors.radio,
                    })}
                  ></span>
                  <span>Support Request</span>
                </label>
              </div>
            </div>
            {formik.touched.radio && formik.errors.radio ? (
              <div className="error-message">{formik.errors.radio}</div>
            ) : null}
          </div>
          {/* message */}
          <div className="p-2">
            <p>
              Message <span>*</span>
            </p>
            <textarea
              name="message"
              maxLength={200}
              id="message"
              onChange={formik.handleChange}
              
              value={formik.values.message}
              className={classNames(
                "h-32 resize-none p-2 outline-none rounded-md w-full border-2 border-medium-gray-color",
                {
                  "input-error":
                    formik.touched.message && formik.errors.message,
                }
              )}
              type="text"
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="error-message">{formik.errors.message}</div>
            ) : null}
          </div>
          {/* checkbox */}
          <div className="p-2 flex flex-col">
            <div className="flex gap-5 items-center">
              <input
                className={classNames("checkbox-input", {
                  "input-error":
                    formik.touched.checkbox && formik.errors.checkbox,
                })}
                type="checkbox"
                id="checkbox"
                name="checkbox"
                onChange={formik.handleChange}
                
                value={formik.values.checkbox}
              />
              <label
                className="checkbox-label unselectable cursor-default"
                htmlFor="checkbox"
              >
                Subscribe to newsletter{" "}
                <span className="text-accent-color">*</span>
              </label>
            </div>
            {formik.touched.checkbox && formik.errors.checkbox ? (
              <div className="error-message">{formik.errors.checkbox}</div>
            ) : null}
          </div>
          {/* button */}
          <button
            className="py-2 mt-6 w-full h-10 bg-accent-color hover:bg-success-color text-white rounded-md text-[15px]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <ToastContainer transition={Slide} limit={3} />
    </>
  );
}

export default App;
