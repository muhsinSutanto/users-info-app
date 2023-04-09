import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import PropTypes from "prop-types";

export default function DatePickerField({ control, name, rules, errors }) {
   return (
      <div className="flex">
         <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field: { onChange, value } }) => (
               <DatePicker
                  style={{
                     width: "200px",
                     height: "38px",
                     boxShadow: "0px 0px 2px 2px rgba(229,229,229,1)",
                     background: errors[name] && "rgb(254,202,202)",
                     border: errors[name] && "1px solid rgb(239,68,68) ",
                  }}
                  value={value}
                  onChange={onChange}
                  format={"MM/DD/YYYY"}
               />
            )}
         />
      </div>
   );
}

DatePickerField.propTypes = {
   control: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   rules: PropTypes.object,
   errors: PropTypes.object,
};
