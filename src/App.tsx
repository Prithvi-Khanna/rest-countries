import { Outlet } from "react-router";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar title="Where in the world?" />
      <Outlet />
    </div>
  );
}

export default App;
