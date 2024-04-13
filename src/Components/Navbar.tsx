import { useState } from "react";
import Logo from "../assets/Logobluefull.png";
import {
  Switch,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Input,
} from "@nextui-org/react";
import ApiHandler from "./ApiHandler";
import MoonIcon from "../assets/MoonIcon.tsx";
import SunIcon from "../assets/SunIcon.tsx";

interface NavbarProps {
  onDataFetch: (data: []) => void;
  onModeChange: (Value: boolean) => void;
}

const Navigationbar: React.FC<NavbarProps> = ({
  onDataFetch,
  onModeChange,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  const [search, setSearch] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(true);

  const handleNavDataFetch = (data: []) => {
    onDataFetch(data);
  };
  return (
    <Navbar
      shouldHideOnScroll
      className="h-24 bg-[#2b2d42]"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className=" md:hidden text-white "
        />
        <NavbarBrand>
          <img
            src={Logo}
            className="max-h-16 w-auto hidden md:block "
            alt="Animaxray"
          />
          {/* <p className="text-5xl md:block sm:hidden font-bold  bg-gradient-to-r from-white via-white to-white inline-block text-transparent bg-clip-text dark:{bg-gradient-to-r from-violet-500  via-violet-500 to-violet-500}">
            AMX
          </p> */}
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
        <Input
          classNames={{
            base: "h-14 w-[70vw] md:h-12 md:w-72 ",
            mainWrapper: "h-full",
            input: "text-medium ",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search anime..."
          size="md"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ApiHandler searchQuery={search} onDataFetch={handleNavDataFetch} />

        <Switch
          onChange={() => {
            setIsDark((prevState: boolean) => !prevState);
            onModeChange(isDark);
          }}
          size="lg"
          color="secondary"
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
