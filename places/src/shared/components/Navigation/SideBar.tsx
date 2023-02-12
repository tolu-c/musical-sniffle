import Close from "../../../assets/icons/Close";
import { SideBarProps } from "../../../types/types";
import NavLinks from "./NavLinks";

const SideBar = ({ onClose }: SideBarProps) => {
  return (
    <div className="flex flex-col lg:hidden absolute top-0 right-0 h-screen z-50 w-3/4 md:w-1/2 bg-teal-900">
      <Close onClose={onClose} />
      <nav className="text-white">
        <NavLinks />
      </nav>
    </div>
  );
};

export default SideBar;
