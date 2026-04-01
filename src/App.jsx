import { BrowserRouter,  Routes, Route} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./componets/Home";
import SignUp from "./componets/SignUp";
import Login from "./componets/Login";

const App = () => {
  return (
    <>
    <BrowserRouter>

      <ToastContainer/>
      <Routes>
        <Route path="/" element={<SignUp/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App;