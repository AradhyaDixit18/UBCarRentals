import React, { useEffect, useState } from "react";
import { Container, Flex, VStack, Box, Text, Icon } from "@chakra-ui/react";
import { FaMapPin } from 'react-icons/fa';  // or another alternative icon

import Navbar from "../components/navbar/Navbar";
import NavbarLoginButtons from "../components/navbar/login-buttons";
import HomePageText from "../components/home/home-page-text";
import HomePageButton from "../components/home/home-page-button";
import Footer from "../components/footer";
import ClientSpeak from "../components/home/client-speak";
import AvatarMenu from "../components/navbar/avatar-menu";
import useAuthentication from "../useAuthentication";
import WhyChooseUs from "../components/home/why-choose-us";
import FeaturedVehicles from "../components/home/featured-vehicles";
import HomeSidebarContent from "../components/home/home-sidebar-content";
import NavbarLinks from "../components/navbar/NavbarLinks";

// Import background image
import backgroundImage from '../../src/components/home/assets/fort.jpg';

function Home() {
  const { isLoggedIn } = useAuthentication();
  const [showNavbarContent, setShowNavbarContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  // Google Maps URL with the location's address
  const mapsUrl = "https://www.google.com/maps/place/DB+City+Road+Hurawali+Churaha+Morar+Gwalior";

  return (
    <>
      <Box
        bgImage={backgroundImage}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minH="100vh"
        pb={10} // Add padding at the bottom for spacing
      >
        <Navbar
          sidebarContent={<HomeSidebarContent />}
          links={<NavbarLinks />}
          buttons={
            showNavbarContent &&
            (isLoggedIn ? <AvatarMenu /> : <NavbarLoginButtons />)
          }
        />
        <Container
          maxWidth={{ base: "full", md: "1720px" }}
          px={{ base: 4, md: 8 }}
          minH="100vh"
          d="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            direction="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            h="full"
            w="full"
          >
            <VStack
              spacing={7}
              alignItems="center"
              justifyContent="center"
              mt={{ base: "20px", md: "10%" }} // Responsive top margin
            >
              <HomePageText />
              <HomePageButton />
            </VStack>
          </Flex>
        </Container>
      </Box>
      <FeaturedVehicles />
      <WhyChooseUs />
      <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
        <Box
          d="flex"
          alignItems="center"
          justifyContent="center"
          p={{ base: 3, md: 4 }} // Responsive padding
          bg="white" // Background color for the location info
          color="black" // Text color
          borderRadius="md"
          boxShadow="md"
          mx="auto" // Center horizontally
          maxW={{ base: "full", md: "container.sm" }} // Responsive max width
          my={{ base: 4, md: 8 }} // Responsive margin top and bottom
        >
          <Icon as={FaMapPin} boxSize={{ base: 5, md: 6 }} mr={2} color="black" />
          <Text
            fontSize={{ base: "lg", md: "xl" }} // Responsive font size
            fontWeight="bold"
            color="black"
          >
            Location: DB City Road Hurawali Churaha Morar Gwalior
          </Text>
        </Box>
      </a>
      <Footer />
    </>
  );
}

export default Home;
