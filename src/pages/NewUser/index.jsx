import React from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import PersonalInfo from "@/components/Forms/PersonalInfo";
import FamilyMember from "@/components/Forms/FamilyMember";

const NewUser = () => {
   const { register, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <Layout>
         <div>
            <h1>Create New User</h1>
         </div>
         <div>
            <PersonalInfo />
         </div>
         <div>
            <FamilyMember />
         </div>
      </Layout>
   );
};

export default NewUser;
