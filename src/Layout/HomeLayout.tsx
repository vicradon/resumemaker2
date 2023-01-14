import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import SideNav from "./SideNav";

interface Props {
  children: React.ReactNode;
}

function HomeLayout(props: Props) {
  const { children } = props;

  return (
    <Grid templateRows={"80px 1fr 70px"}>
      <Meta />
      <Heading
        borderBottom={"1px solid #333"}
        textAlign={"center"}
        padding={"1rem"}
        width={"100%"}
      >
        Resume Maker
      </Heading>

      <Grid
        templateColumns={{
          base: "1fr",
          lg: "15% 1fr 40%",
        }}
        columnGap={"2rem"}
        zIndex={"1"}
      >
        <Box
          display={{
            base: "none",
            lg: "block",
          }}
          borderRight={"1px solid #333"}
          padding={"2rem"}
        >
          <SideNav />
        </Box>

        <Box padding={"2rem"}>{children}</Box>

        <Box
          display={{
            base: "none",
            lg: "block",
          }}
          borderLeft={"1px solid #333"}
          padding={"2rem"}
        >
          Preview
        </Box>
      </Grid>
      <Box padding={"1rem"} borderTop={"1px solid #333"}>
        <Footer />
      </Box>
    </Grid>
  );
}

export default HomeLayout;
