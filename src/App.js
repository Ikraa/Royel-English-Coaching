import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import Service from './components/Service/Service';
import Course from './components/Course/Course';
import About from './components/About/About';
import NotFound from './components/Not Found/NotFound';





function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} /> 
          <Route exact path='/home' element={<Home />} />
         
          <Route exact path='/service' element={<Service />} />
          <Route exact path='/course' element={<Course />} />
          <Route exact path='/about' element={<About />} />
          
          <Route exact path='*' element={<NotFound />} />

        </Routes>
        <Footer />

      </Router>



    </div>
  );
}

export default App;
