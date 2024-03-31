import Header from "./components/Header";
import CountriesPage from "./pages/CountriesPage";
import EventsPage from "./pages/EventsPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./atoms/footer/Footer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/eventos" element={<EventsPage/>}></Route>
          <Route path="/paises" element={<CountriesPage/>}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
