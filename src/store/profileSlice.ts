import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProfileState {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  location: string;
  github: string;
  linkedin: string;
  twitter: string;
  website: string;
}

const initialState: ProfileState = {
  fullName: "",
  email: "",
  phone: "",
  address: "",
  location: "",
  github: "",
  linkedin: "",
  twitter: "",
  website: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    setLocation: (state, action: PayloadAction<string>) => {
      state.location = action.payload;
    },
    setGithub: (state, action: PayloadAction<string>) => {
      state.github = action.payload;
    },
    setLinkedin: (state, action: PayloadAction<string>) => {
      state.linkedin = action.payload;
    },
    setTwitter: (state, action: PayloadAction<string>) => {
      state.twitter = action.payload;
    },
    setWebsite: (state, action: PayloadAction<string>) => {
      state.website = action.payload;
    },
  },
});

export const profileActions = profileSlice.actions;
export default profileSlice.reducer;
