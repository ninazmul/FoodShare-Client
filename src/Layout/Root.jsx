import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Nav-Foot/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "../Pages/Nav-Foot/Footer";


const Root = () => {
    return (
      <div>
        <ThemeProvider>
          <Navbar></Navbar>
          <div className="min-h-[400px]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </ThemeProvider>
      </div>
    );
};

export default Root;