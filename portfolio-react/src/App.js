
import './App.css';
import Nav from '../src/Components/Nav';
import Home from "../src/Components/Home";
import Footer from '../src/Components/Footer';
import CareerDevelopment from './Components/CareerDevelopment';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';
import Contact from './Components/Contact';


function App() {
  return (
    <div>
      <Nav />

      <div className="bg-light">
        <div className="row g-lg-0 h-100">
            <div className="col-lg-12">
                <div className="bg-light text-dark m-3 p-3 border rounded-3 clearfix">
                  <Home />
                  <CareerDevelopment />
                  <Portfolio />
                  <Education />
                  <Contact />
                </div>            
            </div>
        </div>

      </div>

      <Footer />

    </div>
  );
}

export default App;
