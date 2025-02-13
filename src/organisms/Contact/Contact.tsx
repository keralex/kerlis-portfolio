import React from 'react';
import { Box, Heading, Link, Text, VStack } from '@chakra-ui/react';
import contactBackground from '../../assets/images/contactBackground.png';
import { ContactStyles } from './Contact.styles';

const Contact: React.FC = () => {
    return (
        <Box
            p={4}
            sx={ContactStyles}
            style={{ backgroundImage: `url(${contactBackground})` }}
        >
            <Heading
                as="h1"
                mb={4}
                fontFamily="heading"
                fontSize="3xl"
                color="neutral.0"
            >
                Ready to Connect?
            </Heading>
            <VStack mt={8} spacing={4} align="center">
                <Text color="neutral.0">
                    <Text fontWeight="bold">Email</Text>
                    kerlis.aguado26@gmail.com
                </Text>
                <Text color="neutral.0">
                    <Text fontWeight="bold">LinkedIn</Text>
                    <Link
                        href="https://www.linkedin.com/in/kerlis-aguado/"
                        isExternal
                    >
                        www.linkedin.com/in/kerlis-aguado/
                    </Link>
                </Text>
            </VStack>
        </Box>
    );
};

export default Contact;
