import { Link } from "react-router-dom";

const SeasonSelection = () => {
  const year = 2023;
  const season = "summer";
  return (
    <div>
      season selection
      <Link key={season} to={`/anime/seasons/${year}/${season}`}>
        Click me
      </Link>
    </div>
  );
};

export default SeasonSelection;
