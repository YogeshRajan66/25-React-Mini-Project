import Tabs from "./tabs";

function RandomContent() {
  return <h3>Some RandomContent</h3>;
}
export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is a content for tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is a content for tab 2</div>,
    },
    {
      label: "Tab 3",
      content: <RandomContent />,
    },
  ];
  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabscontent={tabs} onChange={handleChange} />;
}
