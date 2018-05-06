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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Importing material-ui theme.
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
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
// Importing the DoctorList page component.
import DoctorList from './containers/DoctorsList';
// Importing the Appointments page component.
import Appointments from './containers/Appointments';
// Importing the My health log page component.
import MedLog from './containers/MedLog';
<<<<<<< HEAD
>>>>>>> 6774ed1 (cleaning up eslint errors. Created form components using material ui)
=======
// Importing the Attachments page.
import Attachments from './containers/Attachments';
<<<<<<< HEAD
>>>>>>> a5d65b6 (added attachments page)
=======
// Importing the Prescriptions page
import Prescriptions from './containers/Prescriptions';
<<<<<<< HEAD
>>>>>>> 4ed1d43 (set up prescription form)
=======
// Importing the Charts page
import Charts from './containers/Charts';
<<<<<<< HEAD
>>>>>>> a60f8c9 (created separate page for charts. Added icon to home screen.)
=======
// Importing the Login page
import Login from './containers/Login';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4c27357 (getting closer to mvp)


// import Navigation from './Components/Navigation';
// import LandingPage from './Components/Landing';
// import SignUpPage from './Components/SignUp';
// import SignInPage from './Components/SignIn';
// import PasswordForgetPage from './Components/PasswordForget';
// // import HomePage from './Components/Home';
// import AccountPage from './Components/Account';
// import * as routes from './constants/routes';

// import * as auth from './firebase/firebase';
// import { firebase } from './firebase';
=======
// Importing the side bar
import Sidebar from './Components/Sidebar';
>>>>>>> 38d91c4 (sidebar partially there)
=======
>>>>>>> 9732dc9 (side navigation bar added. not mobile responsive yet.)
=======
=======
// Importing the Signup page
import Signup from './containers/Signup';
>>>>>>> 8986deb (auth working)
// Importing the 404 page
import NoMatch from './containers/NoMatch';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0579153 (404 page added)
=======
// Importing app setup page
import Welcome from './containers/Welcome';
>>>>>>> 387b661 (added welcome page)
=======
// Importing welcome page
import Welcome from './containers/Welcome';
// Importing setup page
import Setup from './containers/Setup';
>>>>>>> 85d7396 (test)

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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2793c35 (updated ui. fixed menu in navbar)
        <NavBar />,
=======
        <NavBar />
>>>>>>> 774992a (file cleanup)
        <Router>
          <div>
<<<<<<< HEAD
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/symptoms" component={SymptomJournal} />
            <Route exact path="/doctors" component={DoctorList} />
            <Route exact path="/appointments" component={Appointments} />
            <Route exact path="/log" component={MedLog} />
            <Route exact path="/attachments" component={Attachments} />
            <Route exact path="/prescriptions" component={Prescriptions} />
            <Route exact path="/charts" component={Charts} />
<<<<<<< HEAD
          </Container>
<<<<<<< HEAD
        </Router>,
<<<<<<< HEAD
        <Footer/>
      </MuiThemeProvider>
      
>>>>>>> cd03d5c (cleaning up eslint errors. Added material-ui-next. Removing rebass)
    ]
=======
=======
        </Router>, */}
>>>>>>> 38d91c4 (sidebar partially there)
=======
=======
=======
        <Router>
          <div>
            <NavBar />
>>>>>>> 80d3f19 (added visit notes to health log page.)
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/symptoms" component={SymptomJournal} />
              <Route exact path="/doctors" component={DoctorList} />
              <Route exact path="/appointments" component={Appointments} />
              <Route exact path="/log" component={MedLog} />
              <Route exact path="/attachments" component={Attachments} />
              <Route exact path="/prescriptions" component={Prescriptions} />
              <Route exact path="/charts" component={Charts} />
              <Route exact path="/welcome" component={Welcome} />
              <Route exact path="/setup" component={Setup} />
              <Route component={NoMatch} />
            </Switch>
>>>>>>> 0579153 (404 page added)
          </div>
<<<<<<< HEAD
        </Router>,
>>>>>>> 9732dc9 (side navigation bar added. not mobile responsive yet.)
=======
        </Router>
>>>>>>> 774992a (file cleanup)
        <Footer />
      </MuiThemeProvider>,
    ];
>>>>>>> 6774ed1 (cleaning up eslint errors. Created form components using material ui)
  }
}

// Exporting App component so that index.js can access it and render the components to the page.
export default App;
