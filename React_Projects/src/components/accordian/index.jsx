import { useState } from "react";
import data from "./data";
import "./styles.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelction, setEnableMultiselection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    let findIndexofCurrentId = copyMultiple.indexOf(getCurrentId);
    if (findIndexofCurrentId === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexofCurrentId, 1);
    setMultiple(copyMultiple);
    //console.log(findIndexofCurrentId)
  }
  console.log(selected, multiple);

  return (
    <div className="wrapper">
      <h1> Accordian</h1>
      <button onClick={() => setEnableMultiselection(!enableMultiSelction)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  enableMultiSelction
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {enableMultiSelction
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="content">{dataItem.content}</div>
                  )
                : selected === dataItem.id && (
                    <div className="content">{dataItem.content}</div>
                  )}
              {/* {selected === dataItem.id || multiple.indexOf(dataItem.id!==-1)? (
                  <div className="content">{dataItem.content}</div>
                ) : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
