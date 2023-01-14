import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
} from "@chakra-ui/react";
import HomeLayout from "Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { workExperienceActions } from "store/workExperienceSlice";

interface Props {}

function WorkExperience(props: Props) {
  const {} = props;

  const workExperienceState = useSelector(
    (state: RootState) => state.workExperience
  );
  const dispatch = useDispatch();

  return (
    <HomeLayout>
      <Heading as={"h2"} size={"md"}>
        Your work experience
      </Heading>

      <Grid my={"2rem"} rowGap={"2rem"}>
        {workExperienceState.map((workExperience, index) => {
          return (
            <Box key={index}>
              <Heading as={"h3"} size={"xs"} mb={"1rem"}>
                Work Experience {index + 1}
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
                      value={workExperienceState[index][experience]}
                      onChange={({ target }) => {
                        const keyWord = `set${
                          String(experience)[0].toUpperCase() +
                          experience.slice(1)
                        }`;
                        const profileAction = workExperienceActions[keyWord];
                        dispatch(profileAction(target.value));
                      }}
                    />
                  </FormControl>
                );
              })}
            </Box>
          );
        })}
        <Button
          onClick={() => dispatch(workExperienceActions.addWorkExperience())}
        >
          Add Work Experience
        </Button>
      </Grid>
    </HomeLayout>
  );
}

export default WorkExperience;
