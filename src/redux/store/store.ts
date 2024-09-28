import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import destinationsSlice from "../../components/Maps/destinationsSlice";
import { blogsReducer, BlogsState } from "../../components/Blogs/BlogsSlice";
import  userReducer, { UserState }  from "../../components/Login/userSlice";
import { DestinationsState } from "../type";


export type State = {
  destinations: DestinationsState,
  blogs: BlogsState,
  user: UserState,
}

const destinationsPersistConfig = {
  key: "destinations",
  storage,
};

const persistedDestinationsReducer = persistReducer(
  destinationsPersistConfig,
  destinationsSlice
);

export const store = configureStore({
  reducer: {
    destinations: persistedDestinationsReducer,
    blogs: blogsReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
