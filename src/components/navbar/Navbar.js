import { Container, Flex, Box, Text, Icon, useBreakpointValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import NavbarLinks from "./NavbarLinks";

const Navbar = ({ sidebarContent, links, buttons }) => {
  // Determine flex direction based on screen size
  const direction = useBreakpointValue({ base: "column", md: "row" });

  return (
    <Container maxWidth="1720px" px={{ base: 4, md: 8 }}>
      <nav className="navbar navbar-expand-lg my-3">
        <Flex
          as="header"
          direction={direction} // Stack vertically on small screens
          align="center"
          justify="space-between"
          w="full"
          bg="transparent"
          borderColor="blackAlpha.300"
          h={{ base: "auto", md: "14" }} // Adjust height for smaller screens
          py={{ base: 4, md: 0 }} // Add padding top and bottom on small screens
        >
          {sidebarContent}
          {links}
          <Flex
            direction={direction}
            align="center"
            ml="auto"
            mt={{ base: 4, md: 0 }} // Add margin top on small screens
            wrap={{ base: "wrap", md: "nowrap" }} // Wrap items on small screens
          >
            <Flex align="center" mt={{ base: 2, md: 4 }} mr={{ base: 2, md: 4 }}>
              <Icon as={FaEnvelope} color="black" mr={2} boxSize={{ base: 4, md: 5 }} />
              <Text color="black" fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                ubrentalgo@gmail.com
              </Text>
            </Flex>
            <Flex align="center" mt={{ base: 2, md: 4 }} mr={{ base: 2, md: 4 }}>
              <Icon as={FaPhoneAlt} color="black" mr={2} boxSize={{ base: 4, md: 5 }} />
              <Text color="black" fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                9340406860
              </Text>
            </Flex>
            <Flex align="center" mt={{ base: 2, md: 4 }}>
              <Icon as={FaPhoneAlt} color="black" mr={2} boxSize={{ base: 4, md: 5 }} />
              <Text color="black" fontWeight="bold" fontSize={{ base: "sm", md: "md" }}>
                6264458561
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </nav>
    </Container>
  );
};

export default Navbar;
