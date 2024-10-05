import { Outlet } from "react-router-dom";
import { Footer, Header } from "../../components/common";

const MainLayout = () => {
  return (
    <div >
      <Header />
        <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
