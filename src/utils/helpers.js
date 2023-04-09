export function getTime(obj) {
   return obj?.format?.("MMMM D YYYY");
}

export function transformInputToObject(input) {
   const transformedObject = {
      name: input.Name,
      address: input.Address,
      job: input.Job,
      ektp: input.eKtp,
      dob: getTime(input.date),
      phones: [],
      families: [],
   };
   Object.keys(input).forEach((key) => {
      if (key.startsWith("phone")) {
         transformedObject.phones.push(input[key]);
      } else if (key.startsWith("famName")) {
         const index = key.slice(-1);
         const dob = input[`famDate${index}`];
         const name = input[key];
         const relation = input[`famRelation${index}`];
         transformedObject.families.push({ name, dob, relation });
      }
   });
   return transformedObject;
}
