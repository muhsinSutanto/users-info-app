import PropTypes from "prop-types";

export default function Input({ label, name, register, errors, r }) {
   return (
      <div>
         <label htmlFor={name}>{label}</label>
         <input register={register} id={name} name={name} />
         {errors && <span>{errors.message}</span>}
      </div>
   );
}

Input.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   //    register: PropTypes.func.isRequired,
   errors: PropTypes.shape({
      message: PropTypes.string,
   }),
};
