import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import HomeLayout from "Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { projectsActions } from "store/projectsSlice";

export default function Home() {
  const projectsState = useSelector((state: RootState) => state.projects);
  const dispatch = useDispatch();

  return (
    <HomeLayout>
      <Heading as={"h2"} size={"md"}>
        Your Projects
      </Heading>

      <Grid my={"2rem"} rowGap={"2rem"}>
        {projectsState.map((workExperience, index) => {
          return (
            <>
              <Heading as={"h3"} size={"xs"}>
                Project {index + 1}
              </Heading>
              {Object.keys(workExperience).map((experience) => {
                return (
                  <FormControl key={experience}>
                    <FormLabel htmlFor={experience}>{experience}</FormLabel>

                    <Input
                      id={experience}
                      name={experience}
                      type={"text"}
                      variant="flushed"
                      value={projectsState[index][experience]}
                      onChange={({ target }) => {
                        const keyWord = `set${
                          String(experience)[0].toUpperCase() +
                          experience.slice(1)
                        }`;
                        const profileAction = projectsActions[keyWord];
                        dispatch(profileAction(target.value));
                      }}
                    />
                  </FormControl>
                );
              })}
            </>
          );
        })}
        <Button onClick={() => dispatch(projectsActions.addProject())}>
          Add Project
        </Button>
      </Grid>
    </HomeLayout>
  );
}
