// const store = configureStore({
//   reducer: {
//     instructor: authslice.reducer,
//   },
// });

import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import autoMergeLevel1 from "reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1";
import { authslice } from "./instructor/instructor";
//import instructor from "./instructor/instructor";
const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel1,
  blacklist: [localStorage.getItem("token")],
};

const reducers = combineReducers({
  instructor: authslice.reducer,
});

const _persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: _persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      /* ignore persistance actions */
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});
export const persistor = persistStore(store);
