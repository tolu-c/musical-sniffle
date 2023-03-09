import { ChildrenProps } from "../../../types/types";

const Header = ({ children }: ChildrenProps) => {
  return (
    <header className="flex items-center justify-between w-full h-16 bg-teal-800 p-3 px-6">
      {children}
    </header>
  );
};

export default Header;
