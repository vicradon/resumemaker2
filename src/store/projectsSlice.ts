import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProjectState {
  projectName: string;
  projectDescription: string;
  projectLink: string;
  toolsUsed: string[];
}

const initialState: ProjectState[] = [
  {
    projectName: "",
    projectDescription: "",
    projectLink: "",
    toolsUsed: [""],
  },
];

export const projectsSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    setProjectName: (state, action: PayloadAction<string>) => {
      state[0].projectName = action.payload;
    },
    setProjectDescription: (state, action: PayloadAction<string>) => {
      state[0].projectDescription = action.payload;
    },
    setProjectLink: (state, action: PayloadAction<string>) => {
      state[0].projectLink = action.payload;
    },
    setToolsUsed: (state, action: PayloadAction<string>) => {
      state[0].toolsUsed.push(action.payload);
    },
    addProject: (state) => {
      state.push({
        projectName: "",
        projectDescription: "",
        projectLink: "",
        toolsUsed: [""],
      });
    },
  },
});

export const projectsActions = projectsSlice.actions;
export default projectsSlice.reducer;
