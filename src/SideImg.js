import React from "react";
import AddButton from "./Addbutton";

function SideImg({images, handleButtonClick, handleImageClick, buttonVisibilities, addButtonRefs ,trueAddFalseRemove}) {

    return (
    <div className="fixed h-full w-[198px] top-0 right-0 justify-items-end bg-black bg-opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="fixed w-5 h-5 bg-zinc-700 rounded-full right-[90px] top-[20px] z-20">
            <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
        </svg>
        <div className="flex flex-col items-end pt-8 pr-[26px]" >
        {images.map((image, index) => {
            return (
            <div className="flex items-center" key={index}>
                <AddButton key={`${index}b`} id={index} handleClick={handleButtonClick} trueAddFalseRemove={trueAddFalseRemove}
                 className={buttonVisibilities[index] ? "" : "invisible"} ref={el => addButtonRefs.current[index] = el}/>
                <img id={index} onClick={handleImageClick} src={image} className={`flex w-44 rounded-lg drop-shadow-xl max-h-[106px] max-w-36 py-[4px]`} />
            </div>)})}
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-7 h-5 fixed bg-zinc-700 rounded-full right-[86px] bottom-[14px] z-20">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>

    </div>
    )
}

export default SideImg;

/* 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
</svg>
*/