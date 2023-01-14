import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WorkExperience {
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  jobResponsiblities: string[];
  startDate: string;
  endDate: string;
}

const initialState: WorkExperience[] = [
  {
    companyName: "",
    jobTitle: "",
    jobLocation: "",
    jobResponsiblities: [""],
    startDate: "",
    endDate: "",
  },
];

export const workExperienceSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setCompanyName: (state, action: PayloadAction<string>) => {
      state[0].companyName = action.payload;
    },
    setJobTitle: (state, action: PayloadAction<string>) => {
      state[0].jobTitle = action.payload;
    },
    setJobLocation: (state, action: PayloadAction<string>) => {
      state[0].jobLocation = action.payload;
    },
    setJobResponsibilities: (state, action: PayloadAction<string>) => {
      state[0].jobResponsiblities.push(action.payload);
    },
    setStartDate: (state, action: PayloadAction<string>) => {
      state[0].startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<string>) => {
      state[0].endDate = action.payload;
    },
    addWorkExperience: (state) => {
      state.push({
        companyName: "",
        jobTitle: "",
        jobLocation: "",
        jobResponsiblities: [""],
        startDate: "",
        endDate: "",
      });
    },
  },
});

export const workExperienceActions = workExperienceSlice.actions;
export default workExperienceSlice.reducer;
