import React from 'react'
import Accordian from './components/accordian'
import RandomColor from './components/random-color-generator'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'

const App = () => {
  return (
    <center>
      <div className='app'>
    {/* <Accordian/>
    <RandomColor/> */}
    {/* <StarRating/> */}
    {/* <ImageSlider url={"https://picsum.photos/v2/list"} page={'1'}limit={'10'}/> */}
    <LoadMoreData/>
    </div>
    </center>
    
  )
}

export default App