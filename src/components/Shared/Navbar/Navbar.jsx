import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import avatarImg from "../../../assets/images/placeholder.jpg";
import Logo from "../Logo/Logo";
import ActiveNavLink from "../ActiveNavLink/ActiveNavLink";

const Navbar = () => {
  const { user, logOut, role } = useAuth();
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [openMenu, setOpenMenu] = useState(false);

  // Theme switch apply
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  const closeMenu = () => setOpenMenu(false);

  return (
    <nav className="fixed w-full z-50 bg-base-100 shadow-md border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* LEFT — Logo + Navigation */}
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
          </Link>

          {/* Public Links only when user NOT logged in */}
          <div className="hidden md:flex gap-6 text-[16px] font-medium">
            <ActiveNavLink to="/">Home</ActiveNavLink>
            <ActiveNavLink to="/join-employee">Join as Employee</ActiveNavLink>
            <ActiveNavLink to="/join-hr">Join as HR Manager</ActiveNavLink>
          </div>
        </div>

        {/* RIGHT Theme Switch  User Icon */}
        <div className="flex items-center gap-4">
          {/* THEME BUTTON */}
          <label className="swap swap-rotate cursor-pointer">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
            />
            <svg
              className="swap-on w-6 h-6 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M5 12a7 7 0 1 0 7-7" />
            </svg>
            <svg className="swap-off w-6 h-6" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="6" />
            </svg>
          </label>
          {!user && (
            <Link to="/login" className="btn btn-primary">
              Login
            </Link>
          )}

          {/* PROFILE DROPDOWN — only when logged in */}
          {user && (
            <div className="relative">
              <img
                src={user.photoURL || avatarImg}
                onClick={() => setOpenMenu(!openMenu)}
                className="h-10 w-10 rounded-full cursor-pointer border hover:border-primary transition"
              />

              {openMenu && (
                <div className="absolute right-0 mt-3 w-52 bg-base-100 border shadow-md rounded-xl overflow-hidden">
                  {/* EMPLOYEE MENU */}
                  {role === "employee" && (
                    <>
                      <div className="flex flex-col py-2 ml-5">
                        <div className="flex flex-col">
                          <p className="text-primary">
                            Mail:{" "}
                            <span className="text-secondary">
                              {user?.email}
                            </span>
                          </p>
                          <p className="text-primary">
                            Role:{" "}
                            <span className="text-secondary">{user?.role}</span>
                          </p>
                          <div className="divider"></div>
                        </div>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/my-assets"
                          className="dropdown-item"
                        >
                          My Assets
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/my-team"
                          className="dropdown-item"
                        >
                          My Team
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/request-assets"
                          className="dropdown-item"
                        >
                          Request Asset
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/profile"
                          className="dropdown-item"
                        >
                          Profile
                        </ActiveNavLink>
                      </div>
                    </>
                  )}

                  {/* HR MENU */}
                  {role === "hr" && (
                    <>
                      <div className="flex flex-col py-2 ml-5">
                        <div className="flex flex-col">
                          <p className="text-primary">
                            Mail:{" "}
                            <span className="text-secondary">
                              {user?.email}
                            </span>
                          </p>
                          <p className="text-primary">
                            Role:{" "}
                            <span className="text-secondary">{user?.role}</span>
                          </p>
                          <div className="divider"></div>
                        </div>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/asset-list"
                          className="dropdown-item"
                        >
                          Asset List
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/add-asset"
                          className="dropdown-item"
                        >
                          Add Asset
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/all-requests"
                          className="dropdown-item"
                        >
                          All Requests
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/employee-list"
                          className="dropdown-item"
                        >
                          Employee List
                        </ActiveNavLink>
                        <ActiveNavLink
                          onClick={closeMenu}
                          to="/dashboard/hr-analytics"
                          className="dropdown-item"
                        >
                          HR Analytics
                        </ActiveNavLink>
                      </div>
                    </>
                  )}
                  <button
                    onClick={() => {
                      logOut();
                      closeMenu();
                    }}
                    className="px-4 py-3 text-left w-full hover:bg-red-50 text-red-500 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
