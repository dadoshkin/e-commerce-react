import "./App.css";
import { ToastContainer } from "react-toastify";
import {
  Routes,
  Route,
} from "react-router-dom";
import Cart from "./component/Cart"
import Main from "./component/Main"
import Navbar from "./component/Navbar"
import NotFound from "./component/NotFound"

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
       <>
      <ToastContainer />
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Main />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
    </div>
  );
}

export default App;
