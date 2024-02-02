import React from 'react';

const ToggleSwitch = ({trueOverlayFalseMultiply, handleSwitch}) => {

  return (
    <>
      <div className="fixed inline-block w-12 mr-2 align-middle select-none transition duration-300 ease-in top-[91.5%] left-[48%]">
        <input
          type="checkbox"
          name="toggle"
          id="toggle"
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-zinc-600 border-4 appearance-none cursor-pointer ${trueOverlayFalseMultiply ? 'right-0 border-zinc-300' : 'border-zinc-500'}`}
          onChange={handleSwitch}
        />
        <label
          htmlFor="toggle"
          className={`toggle-label block overflow-hidden h-6 rounded-full bg-zinc-800 cursor-pointer ${trueOverlayFalseMultiply ? 'border-zinc-900' : 'bg-zinc-700'}`}
        ></label>
      </div>
    </>
  );
};

export default ToggleSwitch;
