// Importing React since we are using React.
import React, { Component } from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
//Importing React Router to add page routes.
import { BrowserRouter as Router, Route } from "react-router-dom";
//Importing UI components from rebass.
import { Container} from 'rebass';
//Importing app logo.
//import logo from './logo.svg';
//Importing css 
import './App.css';
//Importing Navbar component.
import NavBar from "./Components/AppBar";
//Importing Footer component.
import Footer from "./Components/Footer";
//Importing Home page component.
import Home from "./containers/Home";
//Importing the My symptom journal page component.
import SymptomJournal from "./containers/SymptomJournal"
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
//Importing the Doctor List page component.
=======
//Importing the DoctorList page component.
>>>>>>> 9ef625f (cleaning up forms)
import DoctorList from "./containers/DoctorsList"
//Importing the Appointments page component.
import Appointments from "./containers/Appointments"
<<<<<<< HEAD
=======
//Importing the My Medical Log page component.
=======
//Importing the My health log page component.
>>>>>>> 9ef625f (cleaning up forms)
import MedLog from "./containers/MedLog"
>>>>>>> 9aaecee (created medical log page)
=======
// //Importing the DoctorList page component.
import DoctorList from "./containers/DoctorsList"
// //Importing the Appointments page component.
import Appointments from "./containers/Appointments"
// //Importing the My health log page component.
import MedLog from "./containers/MedLog"
//Importing material-ui framework
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
<<<<<<< HEAD
>>>>>>> cd03d5c (cleaning up eslint errors. Added material-ui-next. Removing rebass)
=======
import { createMuiTheme } from 'material-ui/styles';
>>>>>>> 87f621b (updated health log form)
=======
// Importing material-ui framework
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
=======
>>>>>>> 2793c35 (updated ui. fixed menu in navbar)
// Importing React Router to add page routes.
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Importing material-ui theme.
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
// Importing UI components from rebass.
import { Container } from 'rebass';
// Importing app logo.
// import logo from './logo.svg';
// Importing css
import './App.css';
// Importing Navbar component.
import NavBar from './Components/AppBar';
// Importing Footer component.
import Footer from './Components/Footer';
// Importing Home page component.
import Home from './containers/Home';
// Importing the My symptom journal page component.
import SymptomJournal from './containers/SymptomJournal';
// //Importing the DoctorList page component.
import DoctorList from './containers/DoctorsList';
// //Importing the Appointments page component.
import Appointments from './containers/Appointments';
// //Importing the My health log page component.
import MedLog from './containers/MedLog';
>>>>>>> 6774ed1 (cleaning up eslint errors. Created form components using material ui)


import Navigation from './Components/Navigation';
import LandingPage from './Components/Landing';
import SignUpPage from './Components/SignUp';
import SignInPage from './Components/SignIn';
import PasswordForgetPage from './Components/PasswordForget';
import HomePage from './Components/Home';
import AccountPage from './Components/Account';
import * as routes from './constants/routes';

import * as auth from './firebase/firebase';
import { firebase } from './firebase';

// App theme customization.
const theme = createMuiTheme({
  palette: {
    type: 'light', // Switching the dark mode on is a single property value change.
  },
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 18,
  },
});



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState(() => ({ authUser }))
        : this.setState(() => ({ authUser: null }));
    });
  }
  render() {
    return [
<<<<<<< HEAD
<<<<<<< HEAD
      <Navbar />,
      <Router>
        <Container>
          <Route exact path="/" component={Home} />
          <Route exact path="/symptoms" component={SymptomJournal} />
<<<<<<< HEAD
<<<<<<< HEAD
          <Route exact path="/doctorList" component={DoctorList} />
          <Route exact path="/Appointments" component={Appointments} />
=======
=======
          <Route exact path="/doctors" component={DoctorList} />
          <Route exact path="/appointments" component={Appointments} />
>>>>>>> 9ef625f (cleaning up forms)
          <Route exact path="/log" component={MedLog} />
>>>>>>> 9aaecee (created medical log page)
        </Container>
      </Router>,
      <Footer/>
=======
      <MuiThemeProvider>
=======
      <MuiThemeProvider theme={theme}>
>>>>>>> 2793c35 (updated ui. fixed menu in navbar)
        <NavBar />,
        <Router>
        <Container>
          <Navigation authUser={this.state.authUser} />

      <hr/>

          <Route
            exact path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route
            exact path={routes.SIGN_UP}
            component={() => <SignUpPage />}
          />
          <Route
            exact path={routes.SIGN_IN}
            component={() => <SignInPage />}
          />
          <Route
            exact path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route
            exact path={routes.HOME}
            component={() => <HomePage />}
          />
          <Route
            exact path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        
          
            <Route exact path="/" component={SignInPage} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/symptoms" component={SymptomJournal} />
            <Route exact path="/doctors" component={DoctorList} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/log" component={MedLog} />
          </Container>
        </Router>,
<<<<<<< HEAD
        <Footer/>
      </MuiThemeProvider>
      
>>>>>>> cd03d5c (cleaning up eslint errors. Added material-ui-next. Removing rebass)
    ]
=======
        <Footer />
      </MuiThemeProvider>,
    ];
>>>>>>> 6774ed1 (cleaning up eslint errors. Created form components using material ui)
  }
}

// Exporting App component so that index.js can access it and render the components to the page.
export default App;
