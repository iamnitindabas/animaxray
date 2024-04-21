import { useState } from "react";
import Logo from "../assets/Logo.png";
import {
  Switch,
  Navbar,
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";
import { NavLink as Nlink } from "react-router-dom";
import MoonIcon from "../assets/MoonIcon.tsx";
import SunIcon from "../assets/SunIcon.tsx";

interface NavbarProps {
  onModeChange: (Value: boolean) => void;
}

const Navigationbar: React.FC<NavbarProps> = ({ onModeChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "bg-sky-600 text-white hover:bg-sky-700 hover:text-white rounded-full px-3 py-2"
      : " text-white hover:bg-gray-900 hover:text-white rounded-full px-3 py-2";
  const menuItems = [
    "Profile",
    "Anime Dashboard",
    "Top Anime",
    "Seasonal anime",
    "Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const [isDark, setIsDark] = useState<boolean>(true);

  return (
    <Navbar
      maxWidth="full"
      shouldHideOnScroll
      className="h-20 hidden md:flex sm:h-22 md:h-24 bg-[#2b2d42] "
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" md:hidden text-white "
        />
        <NavbarBrand>
          <Nlink color="foreground" to="/">
            <img
              src={Logo}
              className="max-h-24 w-auto hidden md:block "
              alt="Animaxray"
            />
          </Nlink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      <NavbarContent justify="end">
        <NavbarItem>
          <Nlink to="/seasons" className={linkClass}>
            Seasons
          </Nlink>
        </NavbarItem>
        <NavbarItem>
          <Nlink to="/topanime" className={linkClass}>
            Top Anime
          </Nlink>
        </NavbarItem>
        <NavbarItem>
          <Nlink to="/upcoming" className={linkClass}>
            Upcoming Anime
          </Nlink>
        </NavbarItem>
        <Switch
          onChange={() => {
            setIsDark((prevState: boolean) => !prevState);
            onModeChange(isDark);
          }}
          size="lg"
          color="warning"
          thumbIcon={({ isSelected, className }) =>
            isSelected ? (
              <SunIcon className={className} />
            ) : (
              <MoonIcon className={className} />
            )
          }
        ></Switch>
      </NavbarContent>
      <NavbarMenu className="dark light:light">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2
                  ? "primary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Navigationbar;
