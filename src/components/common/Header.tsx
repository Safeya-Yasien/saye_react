import { Link } from "react-router-dom";
import logo from "@assets/logo2.svg";
import { ReactNode, useState } from "react";
import { IoMenuSharp } from "react-icons/io5";
import cn from "@/lib/utils";

type TNavigationItemProps = {
  to: string;
  children: ReactNode;
};

const Logo = () => (
  <Link to="/">
    <img src={logo} alt="logo" width="70px" />
  </Link>
);

const NavigationItem = ({ to, children }: TNavigationItemProps) => (
  <li className="w-full lg:w-auto   ">
    <Link className="text-gray-600 hover:bg-gray-200 w-full py-3 px-4  block" to={to}>
      {children}
    </Link>
  </li>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-gray-100 position-fixed w-full z-3">
        <div className="px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 relative">
            <button className={cn("lg:hidden")} onClick={toggleMenu}>
              <IoMenuSharp />
            </button>
            <Logo />
          </div>
          <ul
            className={cn("flex items-center lg:flex-row lg:bg-transparent lg:top-0 lg:p-0 lg:relative lg:w-auto lg:items-center lg:border-none mx-auto", {
              hidden: !isMenuOpen,
              "lg:flex flex-col p-4 absolute left-0 top-16 bg-gray-100 w-full items-start border-t-2 ":
                true,
            })}
          >
            <NavigationItem to="/">الرئيسية</NavigationItem>
            <NavigationItem to="/about">مبادراتنا</NavigationItem>
            <NavigationItem to="/volunteer-opportunity">
              فرص التطوع
            </NavigationItem>
            <NavigationItem to="/donate">التبرعات</NavigationItem>
            <NavigationItem to="/contact">اتصل بنا</NavigationItem>
          </ul>
          <Link
            className="bg-myGreen-dark text-white text-sm rounded-2xl font-bold px-5 py-2 
         transition-all  hover:bg-myGreen-hover"
            to="/login"
          >
            تسجيل الدخول
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
