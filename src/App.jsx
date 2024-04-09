import Footer from "./components/Footer";
import Header from "./components/Header";
import CountriesPage from "./pages/CountriesPage";
import EventShowPage from "./pages/EventShowPage";
import EventsPage from "./pages/EventsPage";
import MainPage from "./pages/MainPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./pages/FormPage";
import AdminPage from "./pages/admin/AdminPage";

const App = () => {
  return (
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/formulario" element={<FormPage/>} />
            <Route path="/" element={<MainPage/>}/>
            <Route path="/eventos" element={<EventsPage/>}/>
            <Route path="/paises" element={<CountriesPage/>}/>
            <Route path="/eventos/:id" element={<EventShowPage/>}/>
            <Route path="/admin" element={<AdminPage/>}></Route>
          </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
