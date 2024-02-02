import React, { useRef } from 'react';

const Slider = ({ opacity, setOpacity }) => {
  const sliderRef = useRef(null);
  const tooltipRef = useRef(null);

  const handleMove = (clientX) => {
    if (sliderRef.current) {
      const { left, width } = sliderRef.current.getBoundingClientRect();
      let percentage = ((clientX - left) / width) * 100;
      let newValue = ((percentage / 100) * 90) + 10; // Adjust the range from 0-100 to 10-100
      newValue = Math.max(10, Math.min(100, newValue)); // Clamp the newValue between 10 and 100
      setOpacity(newValue);
    }
  };

  const handleMouseMove = (e) => {
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    handleMove(e.touches[0].clientX);
  };

  const handleEnd = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleEnd);
    document.removeEventListener('touchmove', handleTouchMove);
    document.removeEventListener('touchend', handleEnd);
  };

  const handleStart = (clientX) => {
    handleMove(clientX);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleEnd);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleEnd);
  };

  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevent default behavior
    handleStart(e.clientX);
  };

  const handleTouchStart = (e) => {
    e.preventDefault(); // Prevent default scrolling behavior
    handleStart(e.touches[0].clientX);
  };

  const getTooltipOffset = () => {
    const tooltipWidth = tooltipRef.current ? tooltipRef.current.offsetWidth : 0;
    return -(tooltipWidth / 1.9);
  };

  const displayValue = Math.round(opacity);

  return (
    <div className="fixed w-64 opacity-85 left-64 top-[92%]" ref={sliderRef}>
      <div className="py-1 relative min-w-full">
        <div className="h-2 bg-zinc-700 rounded-full">
          <div className="absolute h-2 rounded-full bg-zinc-800" style={{ width: `${(opacity - 10) / 90 * 100}%` }}></div>
          <div
            className="absolute h-4 flex items-center justify-center w-4 rounded-full bg-white shadow border border-gray-300 -ml-2 top-0 cursor-pointer"
            style={{ left: `calc(${(opacity - 10) / 90 * 100}% - 2px)` }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
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
