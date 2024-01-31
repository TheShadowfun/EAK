import React from 'react';

const AddButton = React.forwardRef(({trueAddFalseRemove, handleClick, id, className}, ref) => {

  return (
    <div id={id} className={className} ref={ref}>
    <button id={id} onClick={handleClick} className={`relative bg-${trueAddFalseRemove ? "green" : "red"}-500 text-white font-bold py-2 px-4 rounded inline-flex items-center focus:outline-none active:bg-${trueAddFalseRemove ? "green" : "red"}-800 mr-3`}>
      <span id={id} className={trueAddFalseRemove ? "" : " text-xl"}>{trueAddFalseRemove ? "+" : "-"}</span>
      <span id={id} className={`triangle absolute -right-2 top-1/2 transform -translate-y-1/2 -mr-1 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[20px] border-l-${trueAddFalseRemove ? "green" : "red"}-500`}></span>

      <style>
        {`
          /* When the button is active, change the triangle's border color */
          .bg-${trueAddFalseRemove ? "green" : "red"}-500:active .triangle {
            border-left-color: ${trueAddFalseRemove ? "#166534" : "#991b1b"}; /* HEX value for Tailwind's green-800 */
          }
        `}
      </style>
    </button>
    </div>
  );
});

export default AddButton;
