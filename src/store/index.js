import { applyMiddleware, combineReducers, createStore } from "redux";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const rootReducer = {
   userList: userReducer,
};

const persistConfig = {
   key: "persist-users",
   storage,
   stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));
const store = createStore(persistedReducer, applyMiddleware(thunk));
const Persistor = persistStore(store);

export default store;
export { Persistor };
