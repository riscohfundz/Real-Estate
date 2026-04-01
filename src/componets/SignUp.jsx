import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/home");
    }
  }, []);

  // ✅ Yup schema
  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Too short").required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          toast.success("Account created successfully 🎉");

          localStorage.setItem("isLoggedIn", "true");
          navigate("/home");
        }}
      >
        {() => (
          <Form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Create Account
            </h2>

            <Field
              name="name"
              placeholder="Full Name"
              className="w-full mb-2 p-3 border rounded-lg"
            />
            <ErrorMessage name="name" component="div" className="text-red-500 mb-2" />

            <Field
              name="email"
              type="email"
              placeholder="Email"
              className="w-full mb-2 p-3 border rounded-lg"
            />
            <ErrorMessage name="email" component="div" className="text-red-500 mb-2" />

            <Field
              name="password"
              type="password"
              placeholder="Password"
              className="w-full mb-4 p-3 border rounded-lg"
            />
            <ErrorMessage name="password" component="div" className="text-red-500 mb-2" />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg"
            >
              Sign Up
            </button>

            <p className="text-center mt-4 text-sm">
              Already have an account?{" "}
              <Link to="/login" className="font-medium">
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;