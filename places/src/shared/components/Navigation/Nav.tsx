import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../../assets/icons/Menu";
import Header from "./Header";
import SideBar from "./SideBar";

const Nav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Header>
      <Link to="/">
        <h1 className="text-lg font-bold text-teal-50">YourPlaces</h1>
      </Link>
      {isOpen && (
        <SideBar
          onClose={() => {
            setIsOpen(false);
          }}
        />
      )}
      <nav className="hidden lg:flex gap-x-4">links</nav>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="lg:hidden text-white"
      >
        <Menu />
      </div>
    </Header>
  );
};

export default Nav;
