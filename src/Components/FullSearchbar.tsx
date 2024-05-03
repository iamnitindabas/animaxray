import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

const FullSearchbar = () => {
  return (
    <div className="flex gap-4 justify-center">
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="ghost"
            color="warning"
            className="text-black dark:text-white"
          >
            Select Season
          </Button>
        </DropdownTrigger>
        <DropdownMenu aria-label="Static Actions">
          <DropdownItem key="Winter" color="warning">
            Winter
          </DropdownItem>
          <DropdownItem key="Spring" color="warning">
            Spring
          </DropdownItem>
          <DropdownItem key="Summer" color="warning">
            Summer
          </DropdownItem>
          <DropdownItem key="Fall" color="warning">
            Fall
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <Button
            variant="ghost"
            color="warning"
            className="text-black dark:text-white"
          >
            selectedValue
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          selectionMode="single"
          // selectedKeys={selectedKeys}
          // onSelectionChange={setSelectedKeys}
          aria-label="Static Actions "
        >
          <DropdownItem key="Winter" color="warning">
            Winter
          </DropdownItem>
          <DropdownItem key="Spring" color="warning">
            Spring
          </DropdownItem>
          <DropdownItem key="Summer" color="warning">
            Summer
          </DropdownItem>
          <DropdownItem key="Fall" color="warning">
            Fall
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default FullSearchbar;
