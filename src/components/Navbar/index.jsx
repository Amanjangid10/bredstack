import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/logo.png";
import {
  ChevronDown,
  Dock,
  TabletSmartphone,
  ShieldCheck,
  Workflow,
  RefreshCw,
  Menu,
} from "lucide-react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const navitems = [
  { name: " For Companies" },
  { name: "For Developers" },
  { name: "Why bredstack" },
];
const products = [
  {
    name: "Web Application Development",
    description:
      "Crafting Digital Experiences: Custom Web Application Development.",
    href: "#",
  },
  {
    name: "Mobile Application Development ",
    description: "Seamless Mobile Experiences, One App at a Time.",
    href: "#",
  },
  {
    name: "Security",
    description: "Your data will be safe and secure",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
  },
];

export default function Navbar() {
  const [state, setState] = useState({ top: false });
  const [isOpen, setIsOpen] = useState(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const dropdownRefs = useRef({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const toggleNavbar = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleDropdown = (id) => {
    setIsOpen(isOpen === id ? null : id);
  };

  const handleClickOutside = (event) => {
    let clickInsideDropdown = false;

    for (const key in dropdownRefs.current) {
      if (
        dropdownRefs.current[key] &&
        !dropdownRefs.current[key].contains(event.target)
      ) {
        clickInsideDropdown = true;
        break;
      }
    }

    if (!clickInsideDropdown) {
      setIsOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const registerRef = (id, ref) => {
    console.log(ref);
    dropdownRefs.current[id] = ref;
  };

  const list = (anchor) => {
    console.log(anchor);
    return (
      <Box
        sx={{ width: anchor === "top" }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {navitems.map((text, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  };

  return (
    <>
      <nav
        className="sticky bg-white z-20 top-0 flex items-center justify-between shadow-sm p-4 lg:px-28"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img src={logo} className="w-15 h-10" />
          </a>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          <div className="relative">
            <button
              type="button"
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              aria-expanded="false"
              onClick={() => toggleDropdown("dropdown1")}
              ref={(ref) => registerRef("dropdown1", ref)}
            >
              <span>For Companies</span>
              <ChevronDown
                size={12}
                className={`transform transition-transform duration-500 ${
                  isOpen === "dropdown1" ? "-rotate-180" : ""
                } `}
              />
            </button>
            {isOpen === "dropdown1" && (
              <div
                class={
                  "fixed grid grid-cols-2 left-0 z-10 mt-4 p-3 gap-y-4 w-full max-w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                }
              >
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Dock />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      Web Application Development
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">
                      Crafting Digital Experiences: Custom Web Application
                      Development.
                    </p>
                  </div>
                </div>
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <TabletSmartphone />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      Mobile Application Development
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">
                      Seamless Mobile Experiences, One App at a Time.
                    </p>
                  </div>
                </div>
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <ShieldCheck />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      Security
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">
                      Your customers data will be safe and secure
                    </p>
                  </div>
                </div>
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Workflow />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      Integrations
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">
                      Connect with third-party tools
                    </p>
                  </div>
                </div>
                <div class="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div class="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <RefreshCw />
                  </div>
                  <div class="flex-auto">
                    <a href="#" class="block font-semibold text-gray-900">
                      Automations
                      <span class="absolute inset-0"></span>
                    </a>
                    <p class="mt-1 text-gray-600">
                      Streamlining Your Success Through Intelligent Automation
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="flex items-center text-sm font-semibold leading-6 gap-x-1 text-gray-900"
              aria-expanded="false"
              onClick={() => toggleDropdown("dropdown2")}
              ref={(ref) => registerRef("dropdown2", ref)}
            >
              For developers
              <ChevronDown
                size={12}
                className={`transform transition-transform duration-500 ${
                  isOpen === "dropdown2" ? "-rotate-180" : ""
                } `}
              />
            </button>
            {isOpen === "dropdown2" && (
              <div
                className={
                  "fixed grid grid-rows-3 grid-flow-col left-0 z-10 mt-4 p-3 gap-y-4 w-full max-w-full overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                }
              >
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <Dock />
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Blogs
                      <span className="absolute inset-0"></span>
                    </a>
                  </div>
                </div>
                <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                    <TabletSmartphone />
                  </div>
                  <div className="flex-auto">
                    <a href="#" className="block font-semibold text-gray-900">
                      Help Center
                      <span className="absolute inset-0"></span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="relative">
            <button className="flex items-center text-sm font-semibold leading-6 gap-x-1 text-gray-900">
              Why BredStack
              <ChevronDown size={12} />
            </button>
          </div>
        </div>
        <div className="hidden lg:flex space-x-2 lg:flex-1 lg:justify-end">
          <a
            href="/signup"
            className="rounded-full border border-custom_purple_dark bg-custom_purple_dark px-5 py-2 text-md font-semibold text-white shadow-md hover:bg-purple-900 "
          >
            Login
          </a>
          <a
            href="#"
            className="rounded-full border border-custom_purple_dark bg-white px-5 py-2 text-md font-semibold text-custom_purple_dark shadow-md hover:bg-gray-200 "
          >
            Talk to Sales
          </a>
        </div>
        <div className="flex lg:hidden">
          {["top"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <Menu color="gray" />
              </Button>
              <Drawer
                sx={{
                  "&.MuiDrawer-root .MuiDrawer-paper": { marginTop: "80px" },
                }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </nav>
    </>
  );
}
