import PropTypes from "prop-types";

export default function TextArea({ label, name, register, errors, required }) {
   return (
      <div className="flex my-4">
         <label className="block text-gray-700 text-sm font-bold mb-2 w-36" htmlFor={name}>
            {label}
         </label>
         <div>
            <textarea
               className={
                  errors
                     ? "shadow bg-red-200 border-red-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                     : "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               }
               {...register(label, { required })}
            />
         </div>
      </div>
   );
}

TextArea.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string,
   register: PropTypes.func.isRequired,
   errors: PropTypes.object,
   required: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};
