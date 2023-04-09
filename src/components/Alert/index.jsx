import React from "react";
import PropTypes from "prop-types";

export default function Alert({ children }) {
   return (
      <div
         className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
         role="alert"
      >
         <strong className="font-bold pr-4">{children}</strong>
      </div>
   );
}

Alert.propTypes = {
   children: PropTypes.node.isRequired,
};
