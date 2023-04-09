import { ACTION_TYPES } from "@/utils/const";

const initialState = [];

const userReducer = (state = initialState, action) => {
   switch (action.type) {
      case ACTION_TYPES.ADD_DATA:
         return (state = [...state, action.payload]);

      default:
         return state;
   }
};

export default userReducer;
