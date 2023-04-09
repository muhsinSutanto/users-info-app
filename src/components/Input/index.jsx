import PropTypes from "prop-types";

export default function Input({ label, name, register, errors, required, type }) {
   return (
      <div>
         <input
            type={!!type ? type : ""}
            className={
               errors
                  ? "shadow appearance-none border bg-red-200 border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlin"
                  : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            {...register(label, { required })}
         />
      </div>
   );
}

Input.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string,
   register: PropTypes.func.isRequired,
   errors: PropTypes.object,
   required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
