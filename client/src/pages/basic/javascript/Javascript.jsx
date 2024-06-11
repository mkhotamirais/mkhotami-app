import { useState } from "react";
import { Title } from "../../../components/Components";
import JsQuestions from "./JsQuestions";
import JsBasic from "./JsBasic";
import JsAdvance from "./JsAdvance";
import JsCases from "./JsCases";

const jsTabMenus = [
  { text: "basic", content: <JsBasic /> },
  { text: "object", content: <JsAdvance /> },
  { text: "cases", content: <JsCases /> },
  { text: "questions", content: <JsQuestions /> },
];

const Javascript = () => {
  const [active, setActive] = useState("basic");

  return (
    <div>
      <Title left>
        <div>Javascript</div>
      </Title>
      <div className="flex gap-1 mb-2">
        {jsTabMenus.map((item, i) => (
          <button
            key={i}
            onClick={() => setActive(item.text)}
            className={`${
              active === item.text ? "bg-cyan-600" : "bg-cyan-500"
            } border rounded-lg leading-none p-2 text-white hover:opacity-70`}
          >
            {item.text}
          </button>
        ))}
      </div>
      <div>
        {jsTabMenus.map((item, i) => (
          <div className={`${active === item.text ? "block" : "hidden"}`} key={i}>
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Javascript;
