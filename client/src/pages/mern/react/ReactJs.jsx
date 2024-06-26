import { Outlet } from "react-router-dom";
import { Bubble, Title } from "../../../components/Components";
const reactjsMenus = [
  { href: "react-ringkasan", text: "ringkasan" },
  { href: "react-questions", text: "questions" },
  { href: "usestate", text: "useState" },
  { href: "useeffect", text: "useEffect" },
  { href: "usecallback", text: "useCallback" },
  { href: "usememo", text: "useMemo" },
  { href: "usecontext", text: "useContext" },
  { href: "usereducer", text: "useReducer" },
  { href: "custom-hook", text: "custom hook" },
  { href: "lifecycle-class", text: "lifecycle class" },
];

const ReactJs = () => {
  return (
    <div>
      <Title left>
        <Bubble menus={reactjsMenus} />
        <div>ReactJs</div>
      </Title>
      <Outlet />
    </div>
  );
};

export default ReactJs;
