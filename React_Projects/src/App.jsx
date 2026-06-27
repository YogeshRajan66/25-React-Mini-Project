import React from "react";
import Accordian from "./components/accordian";
import RandomColor from "./components/random-color-generator";
import StarRating from "./components/star-rating";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import TreeView from "./components/tree-view";
import menu from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";

const App = () => {
  return (
    <div className="app">
      <center>
        {/* <Accordian/>
    <RandomColor/> */}
        {/* <StarRating/> */}
        {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'}limit={'10'}/> */}
        {/* <LoadMoreData /> */}
        <QRCodeGenerator />
      </center>
      {/* <TreeView menu={menu}/> */}
    </div>
  );
};

export default App;
