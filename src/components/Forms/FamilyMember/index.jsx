import Button from "@/components/Button";
import { useState } from "react";

export default function FamilyMember() {
   const [members, setMembers] = useState(2);
   return (
      <div>
         <h1>Family Member</h1>
         <div>
            <div class="flex flex-col">
               <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                     <div class="overflow-hidden">
                        <table class="min-w-full text-left text-sm font-light">
                           <thead class="border-b bg-white font-medium dark:border-neutral-500 dark:bg-neutral-600">
                              <tr>
                                 <th scope="col" class="px-6 py-4">
                                    Name
                                 </th>
                                 <th scope="col" class="px-6 py-4">
                                    Date of Birth
                                 </th>
                                 <th scope="col" class="px-6 py-4">
                                    RelationShip Status
                                 </th>
                              </tr>
                           </thead>
                           <tbody>
                              {Array.from({ length: members }).map((row) => (
                                 <tr class="border-b bg-neutral-100 dark:border-neutral-500 dark:bg-neutral-700">
                                    <input />
                                    <input />
                                    <input />
                                 </tr>
                              ))}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <Button
            onClick={() => {
               setMembers(members + 1);
            }}
         >
            Add Family Member
         </Button>
      </div>
   );
}
