import { Button, Flex, Link } from "@chakra-ui/react";
import React from "react";
import { links } from "./SideNav";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface Props {}

function Footer(props: Props) {
  const {} = props;
  const router = useRouter();
  const currentLinkIndex = links.findIndex(
    (link) => link.href === router.pathname
  );

  const previousLink =
    currentLinkIndex > 0 ? links[currentLinkIndex - 1].href : "";

  const nextLink =
    currentLinkIndex < links.length - 1 ? links[currentLinkIndex + 1].href : "";

  return (
    <Flex alignItems={"center"} justifyContent={"space-around"}>
      <Link as={NextLink} variant={"link"} href={previousLink}>
        &larr; Prev
      </Link>

      <Link as={NextLink} variant={"link"} href={nextLink}>
        Next &rarr;
      </Link>
    </Flex>
  );
}

export default Footer;
