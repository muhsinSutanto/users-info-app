import React from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";

const NewUser = () => {
   const { register, handleSubmit, errors } = useForm();

   const onSubmit = (data) => {
      console.log(data);
   };
   return (
      <Layout>
         <h1>test</h1>
      </Layout>
   );
};

export default NewUser;
