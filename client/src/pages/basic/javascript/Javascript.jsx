import { Outlet } from "react-router-dom";
import { Bubble, Title } from "../../../components/Components";
// import JsTheory from "./jsTheory/JsTheory";

const jsMenus = [
  { href: "", text: "home" },
  { href: "jsquestions", text: "questions" },
  { href: "jsbasic", text: "basic" },
  { href: "jsadvance", text: "advance" },
  { href: "jsmodule", text: "module" },
  { href: "jsfunction", text: "function" },
  { href: "jscases", text: "cases" },
];

const Javascript = () => {
  return (
    <div>
      <Title left>
        <Bubble menus={jsMenus} />
        <div>Javascript</div>
      </Title>
      {/* <JsTheory /> */}
      <Outlet />
    </div>
  );
};

export default Javascript;
