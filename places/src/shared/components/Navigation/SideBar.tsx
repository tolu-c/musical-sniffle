import { createPortal } from "react-dom";
import { ReactNode } from "react";
import Close from "../../../assets/icons/Close";
import { SideBarProps } from "../../../types/types";
import NavLinks from "./NavLinks";

const SideBar = ({ onClose }: SideBarProps) => {
  const content: ReactNode = (
    <div
      className="w-full h-screen bg-teal-900/40 absolute top-0 right-0 z-50"
      onClick={onClose}
    >
      <div className="flex flex-col lg:hidden absolute top-0 right-0 h-screen w-3/4 md:w-1/2 bg-teal-900">
        <div className="text-white">
          <Close onClick={onClose} size="32" />
        </div>
        <nav className="text-white">
          <NavLinks />
        </nav>
      </div>
    </div>
  );

  return createPortal(
    content,
    document.getElementById("sidebar") as HTMLElement
  );
};

export default SideBar;
