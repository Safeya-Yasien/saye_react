import { Outlet, useLocation } from "react-router-dom";
import { Footer, Header } from "../../components/common";
import { useEffect } from "react";

const MainLayout = () => {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div>
      <Header />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
