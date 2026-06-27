import { useState } from "react";
import './tabs.css'
export default function Tabs({tabscontent, onChange}) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }
  return (
    <div className="wrapper">
      <div className="heading">
        {tabscontent.map((tabItem, index) => (
          <div className={`tab-item ${currentTabIndex===index?'active':''}`}onClick={() => handleOnClick(index)} key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{color:"red"}}>
        {tabscontent[currentTabIndex] && tabscontent[currentTabIndex].content}
      </div>
    </div>
  );
}
