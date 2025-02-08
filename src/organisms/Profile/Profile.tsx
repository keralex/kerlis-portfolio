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
import Skills from '../Skills/Skills';

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
                            With over 4 years of experience as a Frontend
                            developer, I pride myself on being a creative and
                            responsible professional. Proficient in technologies
                            such as JavaScript, TypeScript, React.js, HTML, CSS,
                            jQuery, and React Native, my unique background in
                            backend development enhances my ability to
                            communicate effectively between teams.
                        </Text>
                    </Box>
                </Box>
                <Skills />
            </Box>
        </Box>
    );
};
export default Profile;
