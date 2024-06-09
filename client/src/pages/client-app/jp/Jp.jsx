import { Outlet } from "react-router-dom";
import { Bubble, Title } from "../../../components/Components";

const jpMenus = [
  { href: "jpposts", text: "Posts" },
  { href: "jpusers", text: "Users" },
];
const Jp = () => {
  return (
    <div>
      <Title left>
        <Bubble menus={jpMenus} />
        <div>Jsonplaceholder</div>
      </Title>
      <Outlet />
    </div>
  );
};

export default Jp;
