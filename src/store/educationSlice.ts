import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface EducationState {
  schoolName: string;
  schoolLocation: string;
  degree: string;
  major: string;
  gpa: string;
  startDate: string;
  endDate: string;
}

const initialState: EducationState = {
  schoolName: "",
  schoolLocation: "",
  degree: "",
  major: "",
  gpa: "",
  startDate: "",
  endDate: "",
};

export const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setSchoolName: (state, action: PayloadAction<string>) => {
      state.schoolName = action.payload;
    },
    setSchoolLocation: (state, action: PayloadAction<string>) => {
      state.schoolLocation = action.payload;
    },
    setDegree: (state, action: PayloadAction<string>) => {
      state.degree = action.payload;
    },
    setMajor: (state, action: PayloadAction<string>) => {
      state.major = action.payload;
    },
    setGpa: (state, action: PayloadAction<string>) => {
      state.gpa = action.payload;
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state.endDate = action.payload;
    },
  },
});

export const educationActions = educationSlice.actions;
export default educationSlice.reducer;
