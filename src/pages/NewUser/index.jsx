import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import Layout from "@/components/Layout";
import InputGroup from "@/components/InputGroup";
import Button from "@/components/Button";
import TextArea from "@/components/TextArea";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Title from "@/components/Text/Title";
import DatePickerField from "@/components/DatePickerField";

import { transformInputToObject } from "@/utils/helpers";
import { ACTION_TYPES } from "@/utils/const";

const NewUser = () => {
   const {
      register,
      handleSubmit,
      formState: { errors },
      control,
   } = useForm();
   const [phones, setPhones] = useState(1);
   const [members, setMembers] = useState(2);
   const dispatch = useDispatch();
   const navigate = useNavigate();

   const onSubmit = async (data) => {
      console.log(data);
      const user = transformInputToObject(data);
      console.log(user);
      // await dispatch({
      //    type: ACTION_TYPES.ADD_DATA,
      //    payload: user,
      // });
      // await handleRedirect();
   };

   const handleRedirect = () => {
      return navigate("/");
   };

   return (
      <Layout>
         <div className="pt-10 pb-8">
            <Title>Create New User</Title>
         </div>
         <div>
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="flex">
                  <div className=" w-2/5">
                     <InputGroup
                        label="Name"
                        register={register}
                        required="This is required"
                        errors={errors.Name}
                     />
                     <TextArea
                        label="Address"
                        register={register}
                        required="This is required"
                        errors={errors.Address}
                     />
                     <InputGroup
                        label="eKtp"
                        register={register}
                        required="This is required"
                        errors={errors.eKtp}
                        type="number"
                     />
                     <InputGroup
                        label="Job"
                        register={register}
                        required="This is required"
                        errors={errors.Job}
                     />
                     <div className="flex">
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-36">
                           Date of Birth
                        </label>
                        <DatePickerField
                           control={control}
                           name="date"
                           rules={{ required: true }}
                           errors={errors}
                        />
                     </div>
                  </div>
                  <div>
                     <div className="flex">
                        <label className="block text-gray-700 text-sm font-bold mb-2 w-36">
                           Phone
                        </label>
                        <div>
                           <>
                              {Array.from({ length: phones }).map((row, idx) => {
                                 const name = `phone${idx}`;
                                 return (
                                    <div className="mb-4" key={idx}>
                                       <Input
                                          label={name}
                                          register={register}
                                          required="This is required"
                                          errors={errors?.[name]}
                                          type="number"
                                       />
                                    </div>
                                 );
                              })}
                              <Button onClick={() => setPhones(phones + 1)}>Add Phone</Button>
                           </>
                        </div>
                     </div>
                  </div>
               </div>
               <div className=" w-3/5 relative my-8 ">
                  <div className="mb-4 mt-8">
                     <Title> Family Members ({members})</Title>
                  </div>
                  <table className="w-full shadow-md sm:rounded-lg text-sm text-left text-gray-500 dark:text-gray-400 mb-4">
                     <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                           <th scope="col" className="px-6 py-3">
                              Name
                           </th>
                           <th scope="col" className="px-6 py-3">
                              Date of Birth
                           </th>
                           <th scope="col" className="px-6 py-3">
                              Relationship Status
                           </th>
                        </tr>
                     </thead>
                     <tbody>
                        {Array.from({ length: members }).map((row, idx) => {
                           const famName = `famName${idx}`;
                           return (
                              <tr key={idx} className="border-b bg-neutral-100">
                                 <td className="px-6 py-4">
                                    <Input
                                       label={famName}
                                       register={register}
                                       required={"This is required"}
                                       errors={errors?.[famName]}
                                    />
                                 </td>
                                 <td className="px-6 py-4">
                                    <DatePickerField
                                       control={control}
                                       name={`fameDate${idx}`}
                                       rules={{ required: true }}
                                       errors={errors}
                                    />
                                 </td>
                                 <td className="px-6 py-4">
                                    <Select {...register(`famRelation${idx}`)} />
                                 </td>
                              </tr>
                           );
                        })}
                        <tr></tr>
                     </tbody>
                  </table>
                  <Button
                     onClick={() => {
                        setMembers(members + 1);
                     }}
                     width={"w-60"}
                  >
                     Add Family Member
                  </Button>
               </div>

               <input
                  className={`dark:text-gray-900 bg-violet-400 focus:ring-4 focus:outline-none active:outline-none focus:ring-blue-30 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-60`}
                  type="submit"
               />
            </form>
         </div>
      </Layout>
   );
};

export default NewUser;
