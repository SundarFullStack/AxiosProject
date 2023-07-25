import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import Update from "./component/Update";
import Create from "./component/Create";
import Userlisting from "./component/Userlisting";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import Store from "./Redux/store";

function App() {
  return (
    <Provider store={Store}>
      <div>
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/user" element={<Userlisting></Userlisting>}></Route>
            <Route path="/user/add" element={<Create></Create>}></Route>
            <Route path="/user/edit/:code" element={<Update></Update>}></Route>
          </Routes>
        </BrowserRouter>
        <ToastContainer
          className="toat-position"
          position="bottom-right"
        ></ToastContainer>
      </div>
    </Provider>
  );
}

export default App;
