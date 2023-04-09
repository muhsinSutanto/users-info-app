export const NAV_LIST = [
   {
      route: "/",
      value: "Home",
   },
   {
      route: "/new-user",
      value: "New User",
   },
];

export const RELATION_LIST = [
   {
      value: "brother",
      text: "Brother",
   },
   {
      value: "sister",
      text: "Sister",
   },
   {
      value: "parent",
      text: "Parent",
   },
   {
      value: "child",
      text: "Child",
   },
];

export const ACTION_TYPES = {
   ADD_DATA: "ADD_DATA",
};

export const TABLE_HEAD_LIST = [
   "Name",
   "eKTP",
   "Address",
   "Job",
   "Date of Birth",
   "Phone Number",
   "Family",
];

export const MOCK_TEST_DATA = [
   {
      name: "Rohmat",
      ektp: "12345",
      address: "bogor.",
      job: "FE",
      dob: "December 12 1991",
      phones: ["12345"],
      families: [
         {
            name: "Ijam",
            dob: "September 1, 2002",
            relation: "Parent",
         },
      ],
   },
];
