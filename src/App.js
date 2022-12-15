//Importing React since we are using React.
import React, { Component } from 'react';
//Importing React Router to add page routes.
import { BrowserRouter as Router, Route } from "react-router-dom";
//Importing UI components from rebass.
import { Provider, Container} from 'rebass';
//Importing app logo.
import logo from './logo.svg';
//Importing css 
import './App.css';
//Importing Navbar component.
import Navbar from "./Components/Navbar";
//Importing Footer component.
import Footer from "./Components/Footer";
//Importing Home page component.
import Home from "./containers/Home";
//Importing the My Symptom Journal page component.
import SymptomJournal from "./containers/SymptomJournal"
<<<<<<< HEAD
//Importing the Doctor List page component.
import DoctorList from "./containers/DoctorsList"
//Importing the Doctor List page component.
import Appointments from "./containers/Appointments"
=======
//Importing the My Medical Log page component.
import MedLog from "./containers/MedLog"
>>>>>>> 9aaecee (created medical log page)

//Render the components to the page.
class App extends Component {
  render() {
    return [
      <Navbar />,
      <Router>
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/symptoms" component={SymptomJournal} />
<<<<<<< HEAD
          <Route exact path="/doctorList" component={DoctorList} />
          <Route exact path="/Appointments" component={Appointments} />
=======
          <Route exact path="/log" component={MedLog} />
>>>>>>> 9aaecee (created medical log page)
        </Container>
      </Router>,
      <Footer/>
    ]
  }
}

//Exporting App component so that index.js can access it and render the components to the page.
export default App;
