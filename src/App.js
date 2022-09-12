import {Routes, Route} from "react-router-dom";
import AddForm from "./components/AddForm/AddForm"
import InfoPage from "./pages/InfoPage/InfoPage";
import Home from "./pages/Home/Home";
import Explore from "./pages/Explore/Explore";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<AddForm />} />
        <Route path="/explore/:id" element={<InfoPage />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
