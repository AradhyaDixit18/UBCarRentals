import React from 'react';
import {
  Box,
  Image,
  Text,
  Container,
  Stack,
  chakra,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// Import images from assets
import activa from './assets/activa.webp';
import splendor from './assets/splendor.jpeg';
import thanderword from './assets/thunderword.jpeg';
import avenger from './assets/avenger.jpeg';
import tvsRaider from './assets/tvs-ryder.jpeg';
import tigor from './assets/tigor.jpeg';
import baleno from './assets/baleno.jpeg';
import auraCNG from './assets/aura-cng.jpeg';
import kiaSonet from './assets/sonet.jpeg';
import scorpio from './assets/scorpio.jpeg';
import thar from './assets/thar.jpeg';
import ertiga from './assets/ertiga.jpeg';
import swift from './assets/swift.jpeg';
import swiftDzire from './assets/dzire.jpeg';
import creta from './assets/creta.jpeg';
import openJeep from './assets/open_jeep.jpeg';
import bullet350 from './assets/bullet-350.jpeg';
import apache160 from './assets/apache-160.jpeg';
import backgroundVideo from './assets/background.mp4';
import Mercedes from './assets/mercds.jpg'
import Venue from './assets/venu.jpg'
import Innova from './assets/innova.jpeg'
const MotionBox = motion(Box);

const CarCard = ({ image, carName, rent, delay }) => {
  return (
    <MotionBox
      w="xs"
      bg="white"
      shadow="lg"
      rounded="lg"
      overflow="hidden"
      mx="auto"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <Image
        w="full"
        h={56}
        fit="cover"
        src={image}
        alt={carName}
      />
      <Box py={5} textAlign="center">
        <Text
          display="block"
          fontSize="2xl"
          color="gray.800"
          fontWeight="bold"
        >
          {carName}
        </Text>
        <chakra.span fontSize="sm" color="gray.700">
          Rent - {rent}
        </chakra.span>
      </Box>
    </MotionBox>
  );
};

const FeaturedVehicles = () => {
  const { t } = useTranslation();

  const scooty = [
    { image: activa, carName: "Activa", rent: "499", delay: 0.4 },
   
  ];

  const bikes = [
    { image: bullet350, carName: "Bullet 350", rent: "999", delay: 0.4 },
    { image: apache160, carName: "Apache 160", rent: "699", delay: 0.6 },
    { image: splendor, carName: "Splendor", rent: "599", delay: 0.6 },
    { image: thanderword, carName: "Thanderword", rent: "999", delay: 0.8 },
    { image: avenger, carName: "Avenger", rent: "699", delay: 1.0 },
    { image: tvsRaider, carName: "TVS Raider", rent: "699", delay: 1.2 },
  ];

  const cars = [
    { image: tigor, carName: "Tigor", rent: "1999", delay: 0.4 },
    { image: baleno, carName: "Baleno", rent: "2199", delay: 0.6 },
    { image: auraCNG, carName: "Aura CNG", rent: "2499", delay: 0.8 },
    { image: kiaSonet, carName: "Kia Sonet", rent: "2999", delay: 1.0 },
    { image: scorpio, carName: "Scorpio S10", rent: "3599", delay: 1.2 },
    { image: thar, carName: "Thar 4x4", rent: "4499", delay: 1.4 },
    { image: ertiga, carName: "Ertiga CNG", rent: "3199", delay: 1.6 },
    { image: swift, carName: "Swift", rent: "2399", delay: 1.8 },
    { image: swiftDzire, carName: "Swift Dzire", rent: "2199", delay: 2.0 },
    { image: creta, carName: "Creta", rent: "3499", delay: 2.2 },
    { image: openJeep, carName: "Open Jeep", rent: "4999", delay: 2.4 },
    { image: Mercedes, carName: "Mercedes", rent: "4999", delay: 2.4 },
    { image: Venue, carName: "Venue", rent: "4999", delay: 2.4 },
    { image: Innova, carName: "Innova", rent: "4999", delay: 2.4 },
  ];

  return (
    <Box mt={4} p={5}>
      <Box position="relative" height="400px">
        <video
          autoPlay
          loop
          muted
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          textAlign="center"
          color="white"
        >
          <chakra.p
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
          >
            {t("featuredVehicles.title")}
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx="auto"
          >
            {t("featuredVehicles.description")}
          </chakra.p>
        </Box>
      </Box>

      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Box textAlign={{ lg: "center" }}>
          <chakra.p
            mt={2}
            fontSize={{ base: "3xl", sm: "4xl" }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            color="gray.900"
          >
            {t("featuredVehicles.title")}
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{ lg: "auto" }}
            color="gray.500"
          >
            {t("featuredVehicles.description")}
          </chakra.p>
        </Box>

        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Scooty</Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
            {scooty.map((vehicle, index) => (
              <CarCard
                key={index}
                image={vehicle.image}
                carName={vehicle.carName}
                rent={vehicle.rent}
                delay={vehicle.delay}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box mt={10}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Bikes</Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
            {bikes.map((vehicle, index) => (
              <CarCard
                key={index}
                image={vehicle.image}
                carName={vehicle.carName}
                rent={vehicle.rent}
                delay={vehicle.delay}
              />
            ))}
          </SimpleGrid>
        </Box>

        <Box mt={10}>
          <Text fontSize="2xl" fontWeight="bold" mb={4}>Cars</Text>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={10}>
            {cars.map((vehicle, index) => (
              <CarCard
                key={index}
                image={vehicle.image}
                carName={vehicle.carName}
                rent={vehicle.rent}
                delay={vehicle.delay}
              />
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedVehicles;
