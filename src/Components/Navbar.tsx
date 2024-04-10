import Logo from "../assets/Logo.png";
import { Navbar, NavbarBrand, NavbarContent, Input } from "@nextui-org/react";

const Navigationbar = () => {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <img src={Logo} className="h-14 w-auto" alt="Animaxray" />
        <p className="font-bold text-inherit">ANIMAXRAY</p>
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
        />
      </NavbarContent>
    </Navbar>
  );
};

export default Navigationbar;
