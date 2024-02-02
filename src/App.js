import React, {useState, useEffect, useRef} from "react";
import SideImg from "./SideImg";
import MixedImg from "./MixedImg";
import Slider from "./Toggles";
import SideBar from "./SIdeBar";
import Img1 from "./images/galerii/IMG_6331.JPG";
import Img2 from "./images/galerii/IMG_6557.JPG";
import Img3 from "./images/galerii/IMG_6213.JPG";
import Img4 from "./images/galerii/IMG_6506.JPG";
import Img5 from "./images/galerii/IMG_6670.JPG";

const soConditionalClassesDontGetPurged = ["bg-red-500", "active:bg-red-800", "border-l-red-500", "bg-green-500", "active:bg-green-800", "border-l-green-500", "mix-blend-multiply", "mix-blend-overlay"]
const imagePaths = [] /*Kunagi votab kasutusele*/
const sideImgs = [Img1, Img2, Img3, Img4, Img5]

function App() {

  const [layeredImages, setLayeredimages] = useState([]);
  const [opacity, setOpacity] = useState(90)
  const [blendMode, setBlendMode] = useState("multiply")  //Set'imisega tegeleda
  const [buttonVisibilities, setButtonVisibilities] = useState(Array(20).fill(false)) //Tuleb parast seadistada piltide arvu jargi
  const [trueAddFalseRemove, setTrueAddFalseRemove] = useState(true)
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

  return (
    <>
    <div className="min-h-screen bg-[url('./images/newBG.png')] bg-cover">
      <div>
        <SideImg images={sideImgs} handleButtonClick={handleButtonClick}
         handleImageClick={handleImageClick} buttonVisibilities={buttonVisibilities} addButtonRefs={addButtonRefs}
         trueAddFalseRemove={trueAddFalseRemove}/>
      </div>
      <Slider opacity={opacity} setOpacity={setOpacity}/>
      <MixedImg images={layeredImages} opacity={opacity} blendMode={blendMode}/>
    </div>
    </>
  );
}

export default App;