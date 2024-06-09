import { useState } from "react";
import { Title } from "../../../components/Components";
import Todo1 from "./todo1/Todo1";
import Todo2 from "./todo2/Todo2";
import TodoProvider from "./todo2/Todo2Provider";
import Todo3 from "./todo3/Todo3";
const Todo2WithProvider = () => (
  <TodoProvider>
    <Todo2 />
  </TodoProvider>
);

const todoMenus = [
  { text: "todo1", description: "Todo with useState and useEffect, the data storaged in localstorage", content: <Todo1 /> },
  {
    text: "todo2",
    description: "Todo with useState, useEffect, useReducer, useContext, the data storaged in localStorage",
    content: <Todo2WithProvider />,
  },
  { text: "todo3", description: "Todo with redux, the data storaged in localStoga", content: <Todo3 /> },
];

const Todo = () => {
  const [active, setActive] = useState("todo1");

  return (
    <div>
      <Title>Todo</Title>
      <div className="flex gap-3 justify-center mb-3">
        {todoMenus.map((item, i) => (
          <button
            onClick={() => setActive(item.text)}
            key={i}
            className={`${
              active === item.text ? "bg-cyan-600" : "bg-cyan-500"
            } capitalize text-white rounded-lg p-2 leading-none hover:opacity-70`}
          >
            {item.text}
          </button>
        ))}
      </div>
      {todoMenus.map((item, i) => (
        <div key={i} className={`${active === item.text ? "block" : "hidden"} border rounded-xl p-3 shadow-md`}>
          <div className="capitalize">Title : {item.text}</div>
          <div>Description : {item.description}</div>
          <div>{item.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
