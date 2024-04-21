import { useParams } from "react-router-dom";

const SeasonLists = () => {
  const Params = useParams<{ year: string; season: string }>();
  console.log(Params);
  return <div>season list</div>;
};

export default SeasonLists;
