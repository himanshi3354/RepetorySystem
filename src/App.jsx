import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Footer from './components/Footer'; // Layout component to wrap all pages
import AboutUs from './components/Aboutus';
import Doctors from './components/Doctors';
import Appointment from './components/Appointment';
import DoctorDetails from './components/DoctorsDetails';
import Contacts from './components/Contacts';
import WelcomePage from './components/WelcomePage';

// Layout with Header, Navigation, and Footer
const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Simple layout for the landing page without Header, Navigation, and Footer
const LandingLayout = ({ children }) => {
  return <div>{children}</div>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Route for WelcomePage with a different layout */}
        <Route path="/" element={<LandingLayout><WelcomePage /></LandingLayout>} />
        
        {/* All other routes will use the standard layout */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/doctors" element={<Layout><Doctors /></Layout>} />
        <Route path="/about" element={<Layout><AboutUs /></Layout>} />
        <Route path="/appointment" element={<Layout><Appointment /></Layout>} />
        <Route path="/doctor-details/:disease" element={<Layout><DoctorDetails /></Layout>} />
        <Route path="/contact" element={<Layout><Contacts /></Layout>} />
      </Routes>
    </Router>
  );
};

export default App;
