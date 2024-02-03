import React, {useState, useEffect, useRef} from "react";
import SideImg from "./SideImg";
import MixedImg from "./MixedImg";
import Slider from "./slider";
import ToggleSwitch from "./switch";
import InfoOverlay from "./InfoOverlay"
import transpImg from "./images/transparent.png"

const soConditionalClassesDontGetPurged = ["bg-red-500", "active:bg-red-800", "border-l-red-500", "bg-green-500", "active:bg-green-800", "border-l-green-500", "mix-blend-multiply", "mix-blend-overlay"]
const sideImgs = []
for (let i = 1 ; i <= 35 ; i++){
  sideImgs.push(`https://shadowfun.tech/images/${i}.JPG`)
  if (i % 5 == 0){
    sideImgs.push(transpImg)
  }
}

function App() {

  const [layeredImages, setLayeredimages] = useState([]);
  const [opacity, setOpacity] = useState(90)
  const [trueOverlayFalseMultiply, setTrueOverlayFalseMultiply] = useState(false)
  const [buttonVisibilities, setButtonVisibilities] = useState(Array(42).fill(false))
  const [trueAddFalseRemove, setTrueAddFalseRemove] = useState(true)
  const [infoOverlay, setInfoOverlay] = useState(false)
  const addButtonRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {

      const visibleButtonIndex = buttonVisibilities.findIndex(vis => vis);

      if (visibleButtonIndex === -1) {
        return;
      }

      const visibleButtonRef = addButtonRefs.current[visibleButtonIndex];
      // Check if the click is outside the visible button
      if (visibleButtonRef && !visibleButtonRef.contains(event.target)) {
        setButtonVisibilities(prev => prev.map(() => false));
      }
    };
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [buttonVisibilities]);
  

  const handleButtonClick = (props) => {
    handleImageClick(props) //removes button when button is clicked
    setLayeredimages((prev) => {
      if (!prev.includes(sideImgs[props.target.id])) {
        return [...prev, sideImgs[props.target.id]] 
      }
      else {
        return prev.filter((image =>image !== sideImgs[props.target.id]))
      }
      }
    )
  }

  const handleImageClick = ({target}) => {
      setButtonVisibilities((prev) => {
        const newArr = Array(20).fill(false);
        if (target.src === transpImg){return prev}
        if (layeredImages.includes(sideImgs[target.id])) {
          setTrueAddFalseRemove(false)
        }
        else {
          setTrueAddFalseRemove(true)
        }
        newArr[Number(target.id)] = !prev[Number(target.id)]; //ensures that handlebuttonclick can remove the button
        return newArr
      })
    }

  const handleSwitch = () => {
    setTrueOverlayFalseMultiply((prev) => !prev)
  }

  const handleInfoButtonClick = () => {
    setInfoOverlay((prev) => !prev)
  }

  return (
    <>
    <div className="min-h-screen bg-[url('./images/newBG.png')] bg-cover">
      <div>
        <SideImg images={sideImgs} handleButtonClick={handleButtonClick}
         handleImageClick={handleImageClick} buttonVisibilities={buttonVisibilities} addButtonRefs={addButtonRefs}
         trueAddFalseRemove={trueAddFalseRemove}/>
      </div>
      <InfoOverlay handleInfoButtonClick={handleInfoButtonClick} infoOverlay={infoOverlay} />
      <Slider opacity={opacity} setOpacity={setOpacity}/>
      <ToggleSwitch trueOverlayFalseMultiply={trueOverlayFalseMultiply} handleSwitch={handleSwitch}/>
      <MixedImg images={layeredImages} opacity={opacity} trueOverlayFalseMultiply={trueOverlayFalseMultiply}/>
    </div>
    </>
  );
}

export default App;