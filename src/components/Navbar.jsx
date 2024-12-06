import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);

  const link = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>

      <li>
        <details className="z-10">
          <summary>Campaign Menu</summary>
          <ul className="w-[180px]">
            <li>
              <NavLink to={"/campaigns"}>All Campaign</NavLink>
            </li>
            <li>
              <NavLink to={"/addCampaign"}>Add New Campaign</NavLink>
            </li>
            <li>
              <a>My Campaign</a>
            </li>
            <li>
              <a>My Donations</a>
            </li>
          </ul>
        </details>
      </li>
      {user && (
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="z-10 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost font-bold lg:text-2xl">crowdcube</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {user && user?.email ? (
          // <div className="px-4 font-bold flex gap-3 items-center">
          //   <div className="avatar">
          //     <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
          //       <img src={user?.photoURL} />
          //     </div>
          //   </div>
          //   <p>{user?.displayName}</p>{" "}
          //   <button className="btn" onClick={signOutUser}>
          //     signout
          //   </button>
          // </div>

          // dropdown code starts

          <div className="dropdown dropdown-hover z-10 relative">
            <div tabIndex={0} role="button" className="btn m-1">
              <div className="avatar">
                <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-32 p-2 shadow absolute top-full right-0"
            >
              <p>{user?.displayName}</p>
              <button className="btn btn-sm" onClick={signOutUser}>
                signout
              </button>
            </ul>
          </div>
        ) : (
          // dropdown code ends

          <div className="space-x-2">
            <Link to={"/login"} className="btn">
              Login
            </Link>
            <Link to={"/register"} className="btn">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
