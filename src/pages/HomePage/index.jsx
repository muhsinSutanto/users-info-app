import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Button from "@/components/Button";
import Table from "@/components/Table";
import Layout from "@/components/Layout";
import Title from "@/components/Text/Title";
import Alert from "@/components/Alert";

const HomePage = () => {
   const { userList } = useSelector((state) => state);

   return (
      <Layout>
         <div className="flex justify-between mt-8 mb-4">
            <Title>List User</Title>
            <Button width={"w-40"}>
               <Link to={"/new-user"}>Create New User</Link>
            </Button>
         </div>
         <div data-testid="data-condition">
            {!!userList.length ? <Table data={userList} /> : <Alert>No user found!</Alert>}
         </div>
      </Layout>
   );
};

export default HomePage;
