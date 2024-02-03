import React, { useRef } from "react";
import AddButton from "./Addbutton";

function SideImg({images, handleButtonClick, handleImageClick, buttonVisibilities, addButtonRefs ,trueAddFalseRemove}) {

    const scrollContainer = useRef(null)

    const scroll = (direction) => {
        if (direction === 'up') {
          if (Number(scrollContainer.current.scrollTop) === 0) {
            scrollContainer.current.scrollBy({ top: 4602, behavior: 'smooth' }); //See vaartus teha oigeks numbriks ~(153,4 * num_images-1)
          }
          else {
            scrollContainer.current.scrollBy({ top: -767, behavior: 'smooth' });
          }
        } else {
            if (Number(scrollContainer.current.scrollTop) > 4000) { //See vaartus teha oigeks numbriks (153,4 * num_images - 100) sest safety
                scrollContainer.current.scrollBy({ top: -99999, behavior: 'smooth' })
            }
            else {
                scrollContainer.current.scrollBy({ top: 767, behavior: 'smooth' });
            }
        }
      };

    return (
    <div className="fixed h-full w-[212px] top-0 right-0 justify-items-end bg-black bg-opacity-10">
    <div className="fixed h-full w-[245px] top-0 right-0">
        
        <button onClick={() => scroll("up")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="fixed w-8 h-5 bg-zinc-700 active:bg-zinc-600 rounded-full right-[88px] top-[20px] z-20">
            <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
        </svg>
        </button>

        <div className="flex flex-col items-end pt-[7px] pr-[26px] overflow-y-auto overflow-x-visible h-full" ref={scrollContainer} >
        {images.map((image, index) => {
            return (
            <div className="flex items-center" key={index}>
                <AddButton key={`${index}b`} id={index} handleClick={handleButtonClick} trueAddFalseRemove={trueAddFalseRemove}
                 className={buttonVisibilities[index] ? "" : "invisible"} ref={el => addButtonRefs.current[index] = el}/>
                <img id={index} onClick={handleImageClick} src={image} className={`flex w-44 rounded-lg drop-shadow-xl max-h-[150px] max-w-40 py-[5px]`} />
            </div>)})}
        </div>

        <button onClick={() => scroll("down")}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" className="w-8 h-5 fixed bg-zinc-700 active:bg-zinc-600 rounded-full right-[86px] bottom-[7px] z-20">
            <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
        </svg>
        </button>
    
    </div>
    </div>
    )
}

export default SideImg;