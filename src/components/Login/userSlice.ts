import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Account {
  id: string;
  firstName: string;
  lastName: string;
  avatar: null;
}

export interface UserState {
  account: Account | null
}

const initialState: UserState = {
  account: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAccount(
      state,
      action: PayloadAction<{ account: Account }>
    ) {
      state.account = action.payload.account;
    },
  },
});

export const { setAccount } = userSlice.actions;
export default userSlice.reducer;
