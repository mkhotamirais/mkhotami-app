import { useSelector } from "react-redux";
import { CardGrid, Err, Loading, Title } from "../../../components/Components";
import FksapiItems from "./FksapiItems";

const Fksapi = () => {
  const { data, status, error } = useSelector((state) => state.fksapi);

  let content;
  if (status === "loading") content = <Loading />;
  else if (status === "failed") content = <Err>{error}</Err>;
  else if (status === "succeeded") {
    const renderedData = data && data.map((item) => <FksapiItems key={item?.id} item={item} />);
    content = <CardGrid>{renderedData}</CardGrid>;
  }

  return (
    <div>
      <Title>FakestoreApi</Title>
      {content}
    </div>
  );
};

export default Fksapi;
