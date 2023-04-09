import PropTypes from "prop-types";
import Input from "@/components/Input";

export default function InputGroup({ label, name, register, errors, required, type }) {
   return (
      <div className="flex my-4">
         <label className="block text-gray-700 text-sm font-bold mb-2 w-36" htmlFor={name}>
            {label}
         </label>
         <Input type={type} register={register} label={label} required={required} errors={errors} />
      </div>
   );
}
