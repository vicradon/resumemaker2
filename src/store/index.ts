import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import educationReducer from "./educationSlice";
import workExperienceReducer from "./workExperienceSlice";
import skillsReducer from "./skillsSlice";
import projectsReducer from "./projectsSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    education: educationReducer,
    workExperience: workExperienceReducer,
    skills: skillsReducer,
    projects: projectsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
