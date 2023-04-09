import React from "react";
import Navbar from "@/components/Navbar";
import PropTypes from "prop-types";

export default function Layout({ children }) {
   return (
      <>
         <Navbar />
         <div className="max-w-screen-xl m-auto p-4">{children}</div>
      </>
   );
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};
