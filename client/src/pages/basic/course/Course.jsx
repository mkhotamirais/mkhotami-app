import { Outlet } from "react-router-dom";
import { Bubble, Title } from "../../../components/Components";

const courseMenus = [
  { href: "tasks", text: "tasks" },
  { href: "theory", text: "theory" },
  { href: "work", text: "work" },
  { href: "technical", text: "technical" },
];

const Course = () => {
  return (
    <div>
      <Title left>
        <Bubble menus={courseMenus} />
        <div>Course</div>
      </Title>
      <Outlet />
    </div>
  );
};

export default Course;
