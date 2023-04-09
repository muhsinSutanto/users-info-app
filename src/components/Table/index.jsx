import { TABLE_HEAD_LIST } from "@/utils/const";
import React, { useState } from "react";
import Button from "@/components/Button";
import PropTypes from "prop-types";

export default function Table({ data }) {
   const [showFam, setShowFam] = useState(null);

   return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
         <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
               <tr>
                  {TABLE_HEAD_LIST.map((val, idx) => (
                     <th key={idx} scope="col" className="px-6 py-3">
                        {val}
                     </th>
                  ))}
               </tr>
            </thead>
            <tbody>
               {data.map((datum, idx) => (
                  <>
                     <tr key={idx}>
                        <td className="px-6 py-4">{datum.name}</td>
                        <td className="px-6 py-4">{datum.ektp}</td>
                        <td className="px-6 py-4">{datum.address}</td>
                        <td className="px-6 py-4">{datum.job}</td>
                        <td className="px-6 py-4">{datum.dob}</td>
                        <td className="px-6 py-4">{datum.phones.map((number) => number)} </td>
                        <td className="px-6 py-4">
                           <Button
                              onClick={() => (showFam == idx ? setShowFam(null) : setShowFam(idx))}
                           >
                              {showFam == idx ? "Hide" : `Show (${datum.families.length})`}
                           </Button>
                        </td>
                     </tr>
                     {showFam == idx &&
                        datum?.families.map((subDatum, idx) => (
                           <tr key={idx} className="dark:bg-gray-200">
                              <td className="px-6 py-4">{subDatum.name}</td>
                              <td className="px-6 py-4">-</td>
                              <td className="px-6 py-4">-</td>
                              <td className="px-6 py-4"></td>
                              <td className="px-6 py-4">{subDatum.dob}</td>
                              <td className="px-6 py-4">-</td>
                              <td className="px-6 py-4">{subDatum.relation}</td>
                           </tr>
                        ))}
                  </>
               ))}
            </tbody>
         </table>
      </div>
   );
}

Table.propTypes = {
   data: PropTypes.arrayOf(
      PropTypes.shape({
         name: PropTypes.string.isRequired,
         ektp: PropTypes.string.isRequired,
         address: PropTypes.string.isRequired,
         job: PropTypes.string.isRequired,
         dob: PropTypes.string.isRequired,
         phones: PropTypes.arrayOf(PropTypes.string).isRequired,
         families: PropTypes.arrayOf(
            PropTypes.shape({
               name: PropTypes.string.isRequired,
               dob: PropTypes.string.isRequired,
               relation: PropTypes.string.isRequired,
            })
         ).isRequired,
      })
   ).isRequired,
};
