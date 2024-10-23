import { Box, Button, Image, Text } from '@chakra-ui/react';
import profileImage from './../../assets/images/profilePixelArt.png';
import 'react-multi-carousel/lib/styles.css';
import { profileContainerStyles, profileImageStyles } from './Profile.styles';

const Profile = () => {
    return (
        <Box>
            <Box sx={profileContainerStyles}>
                <Image
                    sx={profileImageStyles}
                    src={profileImage}
                    alt="profile image in a pixel art style"
                />
                <Box>
                    <Button variant="secondary">Kerlis Aguado</Button>
                    <Box>
                        <Text>ENGLISH: B2 Intermediate</Text>
                        <Text>SPANISH: Native</Text>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Box>Description Box</Box>
            </Box>
        </Box>
    );
};
export default Profile;
