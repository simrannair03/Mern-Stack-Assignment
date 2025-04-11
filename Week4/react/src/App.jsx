<<<<<<< HEAD
import TextUpdater from './components/TextUpdater.jsx'
import './App.css'
import Form from './components/Form.jsx'
import UserCard from "./components/UserCard";
import Button from './components/Button.jsx';
import LoginForm from './components/LoginForm.jsx';
function App() {

  return (
    <>

      {/* <TextUpdater/> */}


      {/* <Form/> */}

      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <UserCard name="John Doe" email="john.doe@example.com" />
      <UserCard name="Jane Smith" email="jane.smith@example.com" />
    </div> */}


      {/* <Button/> */}


      {/* <LoginForm/> */}
    </>
  )
}

export default App
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Products from "./components/Products"
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

>>>>>>> 5a580d8 (week4 commited)
