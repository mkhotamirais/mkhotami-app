import { useState } from "react";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";

export default function JsAcc({ menus }) {
  const [active, setActive] = useState(null);
  const handleClick = (text) => {
    setActive((prev) => (prev === text ? null : text));
  };
  return menus.map((item, i) => (
    <div key={i}>
      <button
        onClick={() => handleClick(item.text)}
        className="flex justify-between items-center border-b py-2 w-full hover:text-cyan-600"
      >
        <div className="text-left">{item.text}</div>
        <div className="min-w-max">{active === item.text ? <FaMinusCircle /> : <FaPlusCircle />}</div>
      </button>
      <div className={`${active === item.text ? "h-max" : "h-0"} overflow-hidden transition-all duration-150`}>
        {item.content}
      </div>
    </div>
  ));
}
