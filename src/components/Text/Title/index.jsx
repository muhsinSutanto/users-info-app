import React from "react";
import PropTypes from "prop-types";

export default function Title({ children }) {
   return <h1 className="text-xl font-bold text-gray-700">{children}</h1>;
}

Title.propTypes = {
   children: PropTypes.string,
};
