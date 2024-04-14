import { useParams } from "react-router-dom";

const AnimeDetails: React.FC = () => {
  const Params = useParams<{ malid: string; name: string }>();
  console.log(Params);
  return <div>anime details</div>;
};

export default AnimeDetails;
