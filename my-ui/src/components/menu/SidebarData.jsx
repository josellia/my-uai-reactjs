import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Teste",
    path: "/test",
    icon: <FaIcons.FaAdobe />,
    cName: "nav-text",
  },
  {
    title: "Buttons",
    path: "/dasboard-buttons",
    icon: <AiIcons.AiOutlineCode />,
    cName: "nav-text",
  },
  {
    title: "Forms",
    path: "/dasboard-forms",
    icon: <IoIcons.IoIosAlbums />,
    cName: "nav-text",
  },
  {
    title: "Estudos Hooks",
    path: "/dasboard-estudos",
    icon: <IoIcons.IoIosAmericanFootball />,
    cName: "nav-text",
  },

  {
    title: "Tables",
    path: "/dasboard-tables",
    icon: <IoIcons.IoMdTabletLandscape />,
    cName: "nav-text",
  },
];
