import About from "./componets/About";
import Contact from "./componets/Contact";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Projects from "./componets/Projects";
import Testimonials from "./componets/Testimonials";
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;