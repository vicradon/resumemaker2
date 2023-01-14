import { Flex, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import HomeLayout from "Layout/HomeLayout";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { profileActions } from "store/profileSlice";

export default function Home() {
  const profileState = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();

  return (
    <HomeLayout>
      <Heading as={"h2"} size={"md"}>
        Your Personal Info
      </Heading>

      <Flex flexDir={"column"} rowGap={"1.5rem"} as="form" mt={4}>
        {Object.keys(profileState).map((field) => {
          return (
            <FormControl key={field}>
              <FormLabel htmlFor={field}>{field}</FormLabel>

              <Input
                id={field}
                name={field}
                type={"text"}
                variant="flushed"
                value={profileState[field]}
                onChange={({ target }) => {
                  const keyWord = `set${
                    String(field)[0].toUpperCase() + field.slice(1)
                  }`;
                  const profileAction = profileActions[keyWord];
                  dispatch(profileAction(target.value));
                }}
              />
            </FormControl>
          );
        })}
      </Flex>
    </HomeLayout>
  );
}
