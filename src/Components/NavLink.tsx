import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import { useRouter } from "next/router";

interface Props {
  href: string;
  children: React.ReactNode;
}

function NavLink(props: Props) {
  const { href, children } = props;
  const router = useRouter();

  const isActive = router.pathname === href;

  return (
    <Link as={NextLink} href={href} color={isActive ? "teal.400" : "gray.400"}>
      {children}
    </Link>
  );
}

export default NavLink;
