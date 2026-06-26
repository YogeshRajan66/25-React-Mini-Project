import React, { useState } from "react";
import { useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  }
  async function fetchImages(getUrl, getPage, getLimit) {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${getUrl}?page=${getPage}&limit=${getLimit}`,
      );
      const data = await response.json();
      setImages(data);
      setIsLoading(false);
    } catch (e) {
      setErrorMsg(e.message);
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (url !== "") fetchImages(url,page,limit);
  }, [url,page,limit]);
  console.log(images);
  if (isLoading) {
    <div>Loading ...</div>;
  }
  if (errorMsg !== null) {
    return <div>Error Occured {errorMsg}</div>;
  }
  return (
    <div className="container">
      <BsArrowLeftCircleFill
        onClick={() => handlePrevious()}
        className="arrow arrow-left"
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.auhtor}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        onClick={() => handleNext()}
        className="arrow arrow-right"
      />
      <span className="circle-indicator">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={()=>setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
