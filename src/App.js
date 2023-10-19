import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home";
import CreateUserID from "./pages/create-user";
import Account from "./pages/login";
import Footer from "./components/footer/footer";
import { AuthContextProvider } from "./context/authContext";
// import NavbarLogut from "./components/navbar/navbarLogut";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-user" element={<CreateUserID />} />
          <Route path="/login" element={<Account />} />
        </Routes>
      </AuthContextProvider>
       <Footer />
    </>
  );
}

export default App;
