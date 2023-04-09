import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, onClick, width }) {
   return (
      <button
         data-testid="btn"
         onClick={onClick}
         type="button"
         className={`dark:text-gray-900 bg-violet-400 focus:ring-4 focus:outline-none active:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ${width}`}
      >
         {children}
      </button>
   );
}

Button.propTypes = {
   onClick: PropTypes.func,
   children: PropTypes.node.isRequired,
};

Button.defaultProps = {
   onClick: () => {},
   width: "w-full",
};
