import { Box, Container, Flex, Heading, Text, VStack, Input, Button, useBreakpointValue } from "@chakra-ui/react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Index = () => {
  const heroImage = useBreakpointValue({ base: "public/images/hero-image.jpg", md: "public/images/hero-image.jpg" });

  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" bg="blue.800" color="white">
        <Flex justify="space-between" align="center" p={4}>
          <Heading size="lg">BrandName</Heading>
          <Flex as="nav">
            <Text mx={2}>Home</Text>
            <Text mx={2}>Services</Text>
            <Text mx={2}>Contact</Text>
          </Flex>
        </Flex>
      </Box>
      <Flex direction="column" align="center" justify="center" bgImage={heroImage} bgSize="cover" bgPos="center" h="70vh">
        <Heading size="2xl" p={4} bg="rgba(0, 0, 0, 0.5)" color="white">Innovate with Us</Heading>
        <Text fontSize="xl" p={2} bg="rgba(0, 0, 0, 0.5)" color="white">Pushing the boundaries of creativity</Text>
      </Flex>
      <VStack spacing={8} my={10}>
        <Heading size="lg">Our Services</Heading>
        <Flex direction={{ base: "column", md: "row" }} justify="space-around" w="full">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading size="md">Web Development</Heading>
            <Text mt={4}>We create beautiful and functional websites.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading size="md">Brand Strategy</Heading>
            <Text mt={4}>Develop your brand to tell your story.</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading size="md">SEO Optimization</Heading>
            <Text mt={4}>Improve your visibility online.</Text>
          </Box>
        </Flex>
      </VStack>
      <Box as="footer" bg="gray.100" p={10}>
        <VStack spacing={5}>
          <Heading size="lg">Contact Us</Heading>
          <Flex align="center">
            <FaPhone />
            <Text ml={2}>+1234567890</Text>
          </Flex>
          <Flex align="center">
            <FaEnvelope />
            <Text ml={2}>info@brandname.com</Text>
          </Flex>
          <Flex align="center">
            <FaMapMarkerAlt />
            <Text ml={2}>1234 Street, City</Text>
          </Flex>
          <Flex as="form" w="full" maxW="md">
            <VStack spacing={3} w="full">
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Button colorScheme="blue" w="full">Send Message</Button>
            </VStack>
          </Flex>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;