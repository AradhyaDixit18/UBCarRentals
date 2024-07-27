import { Heading, Text, Box } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const HomePageText = () => {
  const { t } = useTranslation();

  return (
    <Box
      textAlign="left" // Center the text
      p={5}
      maxW="800px"
      mx="auto"
    >
      <Heading
        size="2xl"
        fontWeight="bold"
        mb={4}
        color="white" // Orange color for the title
        letterSpacing="wider"
        lineHeight="1.3"
      >
        <span style={{ color: "white" }}>Rent a self drive car</span>
        <br />
        {t("homePageText.title")}
      </Heading>
      <Text
        fontSize="lg"
        color="white"
        
        lineHeight="1.6"
        fontWeight="bold"
        fontStyle="italic"
      >
        {t("homePageText.description")}
      </Text>
    </Box>
  );
};

export default HomePageText;
