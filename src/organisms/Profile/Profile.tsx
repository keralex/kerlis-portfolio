import { Box, Button, Image, Text } from '@chakra-ui/react';
import profileImage from './../../assets/images/profilePixelArt.png';
import 'react-multi-carousel/lib/styles.css';
import {
    descriptionBoxStyles,
    descriptionContainerStyles,
    profileContainerStyles,
    profileImageStyles,
    ProfileStyles,
} from './Profile.styles';
import Skills from './components/Skills/Skills';

const Profile = () => {
    return (
        <Box sx={ProfileStyles}>
            <Box sx={{ width: { base: '100%', md: 'auto' } }}>
                <Box sx={profileContainerStyles}>
                    <Image
                        sx={profileImageStyles}
                        src={profileImage}
                        alt="profile image in a pixel art style"
                    />
                    <Box>
                        <Button variant="secondary" width="100%" mb="1rem">
                            Kerlis Aguado
                        </Button>
                        <Box>
                            <Text color="neutral.0">
                                ENGLISH: <b>B2 - Intermediate</b>
                            </Text>
                            <Text color="neutral.0">
                                SPANISH: <b>Native</b>
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ width: { base: '100%', md: '70%' } }}>
                <Box sx={descriptionContainerStyles}>
                    <Box sx={descriptionBoxStyles}>
                        <Text color="neutral.0" fontSize="1rem">
                            Dynamic Frontend Developer with 5 years of
                            experience crafting high-quality web applications
                            that enhance user experience and drive engagement.
                            Proficient in React.js, TypeScript, JavaScript, and
                            multiple UI libraries, with a strong background in
                            developing scalable solutions and implementing
                            rigorous testing methodologies. Skilled in
                            collaborating with cross-functional teams to
                            optimize project outcomes and streamline
                            communication. Committed to delivering robust,
                            user-centric products that align with business
                            objectives while staying updated on emerging
                            technologies and trends in frontend development.
                        </Text>
                    </Box>
                </Box>
                <Skills />
            </Box>
        </Box>
    );
};
export default Profile;
