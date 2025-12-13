import { NavLink } from "react-router";

const ActiveNavLink = ({ to, children, className = "" }) => {
  return (
    <NavLink to={to} end>
      {({ isActive }) => (
        <span
          className={`relative inline-block pb-1 cursor-pointer transition-colors duration-300
            ${isActive ? "text-primary font-semibold" : "hover:text-primary"}
            ${className}`}
        >
          {children}

          {/* underline */}
          <span
            className={`absolute left-0 -bottom-1 h-[2px] bg-primary transition-transform duration-300 origin-left
              ${isActive ? "w-full scale-x-100" : "w-full scale-x-0"}
            `}
          />
        </span>
      )}
    </NavLink>
  );
};

export default ActiveNavLink;
