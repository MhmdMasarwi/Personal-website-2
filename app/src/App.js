import "./App.css";
import AboutUs from "./Components/AboutsUs/AboutUs";
import MainPage from "./Components/MainPage/MainPage";
import Whatsapp from "./Components/Whatsapp/Whatsapp";
import Footer from "./Components/Footer/Footer";
import ContactUs from "./Components/ContactUs/ContactUs";
import Navbar from "./Components/NavBar/NavBar";
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <MainPage />
      <AboutUs />
      <ContactUs />
      <Whatsapp />
      <Footer />
    </div>
  );
}

export default App;
