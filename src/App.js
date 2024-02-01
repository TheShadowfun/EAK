import React, {useState, useEffect, useRef} from "react";
import SideImg from "./SideImg";
import MixedImg from "./MixedImg";
import Slider from "./Toggles";
import SideBar from "./SIdeBar";
import img1 from "./images/1stTest.jpg";
import img3 from "./images/3rdTest.jpg";
import Img1 from "./images/img1.jpg";
import Img2 from "./images/img2.jpg";
import bgImg from "./images/EAKbg.png";

const soConditionalClassesDontGetPurged = ["bg-red-500", "active:bg-red-800", "border-l-red-500", "bg-green-500", "active:bg-green-800", "border-l-green-500", "mix-blend-multiply"]
const imagePaths = [] /*Kunagi votab kasutusele*/
const sideImgs = [Img1, Img2]

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
    <div className="min-h-screen bg-[url('./images/newBG.png')] bg-cover bg-center">
      <div className=" m-0 flex flex-col items-end justiy-items-center pt-4 pr-4">
        <SideImg images={sideImgs} className="w-72" handleButtonClick={handleButtonClick}
         handleImageClick={handleImageClick} buttonVisibilities={buttonVisibilities} addButtonRefs={addButtonRefs}
         trueAddFalseRemove={trueAddFalseRemove}/>
        <Slider opacity={opacity} setOpacity={setOpacity}/>
      </div>
      <MixedImg images={layeredImages} opacity={opacity} blendMode={blendMode}/>
    </div>
    </>
  );
}

export default App;