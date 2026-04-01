import { useEffect } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      navigate("/home");
    }
  }, [navigate]);

  // ✅ Yup validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          toast.success("Login successful 🚀");

          localStorage.setItem("isLoggedIn", "true");

          navigate("/home");
        }}
      >
        {() => (
          <Form className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Welcome Back!
            </h2>

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 mb-2"
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-2 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 mb-2"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Login
            </button>

            <p className="text-center mt-4 text-sm">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-black font-medium">
                Sign Up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;