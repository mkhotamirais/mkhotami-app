import { Outlet } from "react-router-dom";
import { Breadcrumb, Title } from "../../../../components/Components";

const Hooks = () => {
  return (
    <div>
      <Title left>Hooks</Title>
      <Breadcrumb />
      <Outlet />
    </div>
  );
};

export default Hooks;
