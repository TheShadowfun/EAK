import React, { useRef } from 'react';

const Slider = ({opacity, setOpacity}) => {
  const sliderRef = useRef(null);
  const tooltipRef = useRef(null);

  const handleMouseMove = (e) => {
    if (sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let percentage = ((e.clientX - left) / width) * 100;
      // Adjust the range from 0-100 to 10-100
      let newValue = ((percentage / 100) * 90) + 10;
      // Clamp the newValue between 10 and 100
      newValue = Math.max(10, Math.min(100, newValue));
      setOpacity(newValue);
    }
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  // Calculate the tooltip offset for centering
  const getTooltipOffset = () => {
    const tooltipWidth = tooltipRef.current ? tooltipRef.current.offsetWidth : 0;
    return -(tooltipWidth / 2);
  };

  // Assuming the slider value range is from 10 to 150
  const displayValue = Math.round(opacity);

  return (
<div className="flex w-64 m-auto items-center h-32 justify-center" ref={sliderRef}>
    <div className="py-1 relative min-w-full">
      <div className="h-2 bg-zinc-700 rounded-full">
        <div className="absolute h-2 rounded-full bg-zinc-800" style={{ width: `${(opacity - 10) / 90 * 100}%` }}></div>
        <div
          className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
          style={{ left: `calc(${(opacity - 10) / 90 * 100}% - 2px)` }} // Subtract half of the handle's width (assuming 4px here)
          onMouseDown={handleMouseDown}
          unselectable="on"
          onSelectStart={() => false}
          >
            <div className="relative -mt-2 w-1" ref={tooltipRef}>
              <div className="absolute z-40 opacity-100 bottom-100 mb-2" style={{ left: `calc(${opacity}% + ${getTooltipOffset()}px)`, marginLeft: '-20.5px' }}>
                <div className="relative shadow-md">
                  <div className="bg-black -mt-8 text-white truncate text-xs rounded py-1 px-4">{displayValue}</div>
                  <svg className="absolute text-black w-full h-2 left-0 top-100" viewBox="0 0 255 255">
                    <polygon className="fill-current" points="0,0 127.5,127.5 255,0"></polygon>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute text-zinc-300 -ml-1 bottom-0 left-0 -mb-6">10</div>
          <div className="absolute text-zinc-300 -mr-1 bottom-0 right-0 -mb-6">100</div>
        </div>
      </div>
    </div>
  );
};

export default Slider;