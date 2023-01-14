import {
  Box,
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
import { skillsActions } from "store/skillsSlice";

export default function Home() {
  const skillsState = useSelector((state: RootState) => state.skills);
  const dispatch = useDispatch();

  return (
    <HomeLayout>
      <Heading as={"h2"} size={"md"}>
        Your Skills
      </Heading>

      <Grid my={"2rem"} rowGap={"2rem"}>
        {skillsState.map((workExperience, index) => {
          return (
            <Box key={index}>
              <Heading as={"h3"} size={"xs"}>
                Skill {index + 1}
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
                      value={skillsState[index][experience]}
                      onChange={({ target }) => {
                        const keyWord = `set${
                          String(experience)[0].toUpperCase() +
                          experience.slice(1)
                        }`;
                        const profileAction = skillsActions[keyWord];
                        dispatch(profileAction(target.value));
                      }}
                    />
                  </FormControl>
                );
              })}
            </Box>
          );
        })}
        <Button onClick={() => dispatch(skillsActions.addSkill())}>
          Add Skill
        </Button>
      </Grid>
    </HomeLayout>
  );
}
