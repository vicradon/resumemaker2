import { Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import HomeLayout from "Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { educationActions } from "store/educationSlice";

export default function Home() {
  const educationState = useSelector((state: RootState) => state.education);
  const dispatch = useDispatch();

  return (
    <HomeLayout>
      <Heading as={"h2"} size={"md"}>
        Your Education
      </Heading>

      <Flex flexDir={"column"} rowGap={"1.5rem"} as="form" mt={4}>
        {Object.keys(educationState).map((field) => {
          return (
            <FormControl key={field}>
              <FormLabel htmlFor={field}>{field}</FormLabel>

              <Input
                id={field}
                name={field}
                type={"text"}
                variant="flushed"
                value={educationState[field]}
                onChange={({ target }) => {
                  const keyWord = `set${
                    String(field)[0].toUpperCase() + field.slice(1)
                  }`;
                  const educationAction = educationActions[keyWord];
                  dispatch(educationAction(target.value));
                }}
              />
            </FormControl>
          );
        })}
      </Flex>
    </HomeLayout>
  );
}
