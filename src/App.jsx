import About from "./componets/About";
import Header from "./componets/Header";
import Projects from "./componets/Projects";
import Testimonials from "./componets/Testimonials";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header/>
      <About/>
      <Projects/>
      <Testimonials/>
    </div>
  )
}

export default App;