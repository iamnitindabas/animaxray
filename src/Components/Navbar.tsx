import { useState } from "react";
import Logo from "../assets/Logo.png";
import {
  Switch,
  Navbar,
  NavbarBrand,
  NavbarContent,
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
  const [search, setSearch] = useState<string>("");
  const [isDark, setIsDark] = useState<boolean>(true);

  const handleNavDataFetch = (data: []) => {
    onDataFetch(data);
  };
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <img src={Logo} className="h-14 w-auto" alt="Animaxray" />
        <p className="text-4xl font-bold  bg-gradient-to-r from-red-600 via-orange-500 to-yellow-600 inline-block text-transparent bg-clip-text">
          ANIMAXRAY
        </p>
      </NavbarBrand>
      <NavbarContent
        className="hidden sm:flex gap-4"
        justify="center"
      ></NavbarContent>
      <NavbarContent justify="end">
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-medium",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
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
        >
          Dark mode
        </Switch>
      </NavbarContent>
    </Navbar>
  );
};

export default Navigationbar;
