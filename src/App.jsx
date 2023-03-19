import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { useState } from "react";

function App() {
  const [toggle, setToggle] = useState(true);
  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="container-fluid bg-secondary min-vh-100 ">
      <div className="row ">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Dashboard Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
}
export default App;
