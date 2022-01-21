import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from '../src/Components/Nav';
import Home from "../src/Components/Home";
import Footer from '../src/Components/Footer';
import CareerDevelopment from './Components/CareerDevelopment';
import Portfolio from './Components/Portfolio';
import Education from './Components/Education';
import Contact from './Components/Contact';


function App() {

  const [currentPage, setCurrentPage] = useState('Profile');

  return (
    <div>
      <HashRouter>
        <Nav
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <div className="bg-light">
          <div className="row g-lg-0 h-100">
              <div className="col-lg-12">
                  <div className="bg-light text-dark m-3 p-3 border rounded-3 clearfix">
                    <Routes>
                      <Route exact activeClassName="active" path='/' element={
                        <Home />
                      } />
                      <Route exact activeClassName="active" path='/career-development' element={
                        <CareerDevelopment />
                      } />
                      <Route exact activeClassName="active" path='/portfolio' element={
                        <Portfolio />
                      } />
                      <Route exact activeClassName="active" path='/education' element={
                        <Education />
                      } />
                      <Route exact activeClassName="active" path='/contact' element={
                        <Contact />
                      } />
                    </Routes>
                  </div>            
              </div>
          </div>

        </div>

        <Footer
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </HashRouter>
    </div>
  );
}

export default App;
