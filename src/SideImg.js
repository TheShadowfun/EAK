import React from "react";
import AddButton from "./Addbutton";

function SideImg({images, className, handleButtonClick, handleImageClick, buttonVisibilities, addButtonRefs ,trueAddFalseRemove}) {

    return (
    <div>
        {images.map((image, index) => {
            return (
            <div className="flex items-center" key={index}>
                <AddButton key={`${index}b`} id={index} handleClick={handleButtonClick} trueAddFalseRemove={trueAddFalseRemove}
                 className={buttonVisibilities[index] ? "" : "invisible"} ref={el => addButtonRefs.current[index] = el}/>
                <img id={index} onClick={handleImageClick} src={image} className={`${className} relative w-44 rounded-lg drop-shadow-xl`} />
            </div>)})}
    </div>)
}

export default SideImg;

/* 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
</svg>
*/