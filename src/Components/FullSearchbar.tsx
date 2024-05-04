import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
} from "@nextui-org/react";
import { useState, useMemo, useEffect } from "react";
import { FullSearchbarProps } from "../Types/Types";

const FullSearchbar: React.FC<FullSearchbarProps> = ({
  onSeasonYearchange,
}) => {
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState(
    new Set(["Select Season"])
  );
  const [selectedYear, setSelectedYear] = useState(new Set(["Select Year"]));
  const years = Array.from({ length: 30 }, (_, i) => 2024 - i);

  const seasons = ["Summer", "Fall", "Spring", "Winter"];
  const selectedValue = useMemo(
    () => Array.from(selectedSeason).join(", ").replace(/_/g, " "),
    [selectedSeason]
  );

  useEffect(() => {
    const selectedSeasonString: string = selectedSeason.values().next().value;
    const selectedYearString: string = selectedYear.values().next().value;
    onSeasonYearchange(selectedYearString, selectedSeasonString);
    setButtonClicked(false);
    console.log(
      "Use effect is running",
      search,
      selectedSeasonString,
      selectedYearString
    );
  }, [buttonClicked]);

  return (
    <div className="flex gap-4 justify-center">
      <div>
        <p className="pb-2 text-xl font-semibold text-[#526271]">Search</p>

        <Input
          classNames={{
            base: "w-44 sm:w-[75vw] md:w-44 ",
            mainWrapper: "h-full",
            input: "text-medium",
            inputWrapper:
              "h-full rounded-md font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search anime..."
          size="md"
          type="search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
        <p className="pb-2 text-xl font-semibold text-[#526271]">Year</p>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="flat"
              color="success"
              className="rounded-md font-semibold text-black w-44  dark:text-white"
            >
              {selectedYear}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            className="h-80 overflow-y-auto"
            selectionMode="single"
            selectedKeys={selectedYear}
            // @ts-expect-error cuz its working
            onSelectionChange={setSelectedYear}
            aria-label="Static Actions"
          >
            {years.map((year) => (
              <DropdownItem
                key={year}
                color="success"
                variant="solid"
                className="text-black bg-white dark:text-white dark:bg-background"
              >
                {year}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <div>
        <p className="pb-2 text-xl font-semibold text-[#526271]">Season</p>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="flat"
              color="success"
              className=" rounded-md font-semibold text-black w-44 dark:text-white"
            >
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            selectionMode="single"
            selectedKeys={selectedSeason}
            // @ts-expect-error cuz its working
            onSelectionChange={setSelectedSeason}
            aria-label="Static Actions"
          >
            {seasons.map((season) => (
              <DropdownItem key={season} color="success">
                {season}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <Button
        variant="flat"
        color="primary"
        className="rounded-md font-bold mt-9 text-black  dark:text-white"
        onClick={() => {
          setButtonClicked(true);
        }}
      >
        Search
      </Button>
    </div>
  );
};

export default FullSearchbar;
