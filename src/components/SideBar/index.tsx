import React from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../constants";
import { AiOutlineClose } from "react-icons/ai";
import Aside from "./styles";
import { useGlobalContext } from "../../store";

const SideBar = () => {
  const { isOpen, closeSidebar, closeSidebarDelay } = useGlobalContext();
  console.log("sidebar", isOpen);
  return (
    <Aside className={isOpen ? "show-sidebar" : ""}>
      <div className="close-box">
        <div></div>
        <AiOutlineClose onClick={closeSidebar} className="close" />
      </div>
      <nav>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavLink onClick={closeSidebarDelay} to={link.url}>
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Aside>
  );
};

export default SideBar;
