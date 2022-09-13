import {Routes, Route} from "react-router-dom";
import AddForm from "./components/AddForm/AddForm"
import InfoPage from "./pages/InfoPage/InfoPage";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";
import {Toaster} from "react-hot-toast"
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    
    <div className="App">
      <Toaster
          position="top-center"
          reverseOrder={false}
      />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddForm />} />
        <Route path="/explore/:id" element={<InfoPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
