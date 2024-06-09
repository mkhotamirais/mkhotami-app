import { Tabs } from "../../components/Components";

const cssTipsMenus = [
  { href: "../../css-tips/accordion.html", text: "accordion" },
  { href: "../../css-tips/stickyChildTw.html", text: "stickyChildTw" },
  { href: "../../css-tips/stickyChildGridTw.html", text: "stickyChildGridTw" },
  { href: "../../css-tips/stickyChildFlexTw.html", text: "stickyChildFlexTw" },
  { href: "../../css-tips/neumorphism.html", text: "neumorphism" },
  { href: "../../css-tips/stickyChild.html", text: "stickyChild" },
  { href: "../../css-tips/stickyChildFlex.html", text: "stickyChildFlex" },
  { href: "../../css-tips/stickyChildGrid.html", text: "stickyChildGrid" },
  { href: "../../css-tips/centerDivMethods.html", text: "centerDivMethods" },
];

const CssTips = () => {
  return (
    <section>
      <div>css tips</div>
      <Tabs menus={cssTipsMenus} />
    </section>
  );
};

export default CssTips;
