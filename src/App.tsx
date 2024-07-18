import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Router } from "./routes/routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
        <ToastContainer theme="dark" autoClose={2000} />
      </BrowserRouter>
    </>
  );
}

export default App;
