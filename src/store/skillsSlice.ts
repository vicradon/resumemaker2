import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SkillState {
  skillName: string;
  skillDetails: string[];
}

const initialState: SkillState[] = [
  {
    skillName: "",
    skillDetails: [""],
  },
];

export const skillsSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setSkillName: (state, action: PayloadAction<string>) => {
      state[0].skillName = action.payload;
    },
    setSkillDetails: (state, action: PayloadAction<string>) => {
      state[0].skillDetails.push(action.payload);
    },
    addSkill: (state) => {
      state.push({
        skillName: "",
        skillDetails: [""],
      });
    },
  },
});

export const skillsActions = skillsSlice.actions;
export default skillsSlice.reducer;
