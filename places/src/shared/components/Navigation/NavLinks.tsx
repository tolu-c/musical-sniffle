import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="flex flex-col lg:flex-row gap-x-4 items-center">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold text-base"
              : "text-sm font-normal text-teal-100"
          }
        >
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="u1/places"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold text-base"
              : "text-sm font-normal text-teal-100"
          }
        >
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink
          to="places/new"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold text-base"
              : "text-sm font-normal text-teal-100"
          }
        >
          Add Place
        </NavLink>
      </li>
      <li>
        <NavLink
          to="auth"
          className={({ isActive }) =>
            isActive
              ? "text-white font-semibold text-base"
              : "text-sm font-normal text-teal-100"
          }
        >
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
