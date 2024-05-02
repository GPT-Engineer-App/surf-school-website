import { Box, Container, Heading, Text, Button, Image, Stack, Flex, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Box as="header" py={5}>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="xl">
            KiteSurf Academy
          </Heading>
          <Stack direction="row" spacing={4}>
            <Button leftIcon={<FaPhone />} colorScheme="teal" variant="solid">
              Call Us
            </Button>
            <Button leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
              Email Us
            </Button>
          </Stack>
        </Flex>
      </Box>

      <Box as="section" py={10}>
        <Image src="https://images.unsplash.com/photo-1530092064935-c3626e1b65dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxraXRlc3VyZmluZyUyMGFjdGlvbnxlbnwwfHx8fDE3MTQ2NjAwODF8MA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
        <Heading as="h2" size="lg" mt={5}>
          Experience the Thrill of Kitesurfing!
        </Heading>
        <Text fontSize="lg" mt={3}>
          Join us at KiteSurf Academy where the wind and waves meet passion and professionalism. Whether you're a beginner or an experienced kiter, our certified instructors are here to guide you on your kitesurfing journey.
        </Text>
        <Button mt={5} colorScheme="blue" size="lg">
          Book a Lesson
        </Button>
      </Box>

      <Box as="section" py={10}>
        <Heading as="h3" size="md">
          Why Choose Us?
        </Heading>
        <Stack direction={["column", "row"]} spacing={6} mt={4}>
          <Box flex="1" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="sm">
              Expert Instructors
            </Heading>
            <Text mt={2}>All our instructors are certified and have years of experience.</Text>
          </Box>
          <Box flex="1" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="sm">
              Best Equipment
            </Heading>
            <Text mt={2}>We provide high-quality, safe, and top-of-the-line equipment.</Text>
          </Box>
          <Box flex="1" p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading as="h4" size="sm">
              Stunning Locations
            </Heading>
            <Text mt={2}>Our school is located at some of the most beautiful beaches.</Text>
          </Box>
        </Stack>
      </Box>

      <Box as="footer" py={10} borderTopWidth="1px">
        <Flex justifyContent="space-between" alignItems="center">
          <Text>&copy; {new Date().getFullYear()} KiteSurf Academy. All rights reserved.</Text>
          <Stack direction="row" spacing={4}>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram />
            </Link>
            <Link href="https://facebook.com" isExternal>
              <FaFacebookF />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter />
            </Link>
          </Stack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
