import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";

import { links } from "../data/dummu";

const Sidebar = () => {
  const activeMenu = true;
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg border-black text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2";

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to={"/"}
              onClick={() => {}}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Shoopy</span>
            </Link>
            <TooltipComponent content={"menu"} position="BottomCenter">
              <button
                type="button"
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          {links.map((link) => (
            <div key={link.title}>
              <p className="text-gray-400 m-3 mt-4 uppercase">{link.title}</p>
              {link.links.map((ln) => (
                <NavLink
                  to={`/${ln.name}`}
                  key={ln.title}
                  onClick={() => {}}
                  className={({ isActive }) =>
                    isActive ? activeLink : normalLink
                  }
                >
                  {ln.icon}
                  <span>{ln.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Sidebar;
