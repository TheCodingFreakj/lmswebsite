import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "reduxjs-toolkit-persist";
// import storage from "reduxjs-toolkit-persist/lib/storage";
// import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { userSlice } from "./instructor/instructor";

// const persistConfig = {
//   key: "root",
//   storage: storage,
//   stateReconciler: autoMergeLevel1,
//   blacklist: [localStorage.getItem("token")],
// };

const reducers = combineReducers({
  user: userSlice.reducer,
});

// const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  // reducer: _persistedReducer,
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
// export default store;
