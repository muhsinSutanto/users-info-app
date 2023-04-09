import React from "react";
import PropTypes from "prop-types";
import { RELATION_LIST } from "@/utils/const";

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
   <select
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      name={name}
      ref={ref}
      onChange={onChange}
      onBlur={onBlur}
   >
      <option value="Brother">Brother</option>
      <option value="Sister">Sister</option>
      <option value="Parent">Parent</option>
      <option value="Child">Child</option>
   </select>
));

Select.propTypes = {
   onChange: PropTypes.func,
   onBlur: PropTypes.func,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   ref: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
   ]),
};

export default Select;
