import React from "react";
import Button from "@/components/Button";
import Table from "@/components/Table";
import Layout from "@/components/Layout";

const HomePage = () => {
   return (
      <Layout>
         <div>
            <p>List User</p>
            <Button>Create New User</Button>
         </div>
         <div>
            <Table />
         </div>
      </Layout>
   );
};

export default HomePage;
