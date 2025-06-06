import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
// import styles from "../styles/pageStyles/mainLayout.styles.css";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <div className="outletContainer">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
