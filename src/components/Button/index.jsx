import React from "react";
import PropTypes from "prop-types";

export default function Button({ children, onClick }) {
   return (
      <button
         data-testid="btn"
         onClick={onClick}
         type="button"
         className="dark:text-gray-900 bg-violet-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
};
