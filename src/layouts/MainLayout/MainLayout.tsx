import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/common";

const MainLayout = () => {
  return (
    <div >
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
