import { Outlet } from "react-router-dom";
import Button from "./Components/Button";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default App;
