import { Box, Button, Text } from '@chakra-ui/react';
import Card from '../../molecules/Card/Card';
import {
    buttonBoxStyles,
    descriptionBoxText,
    presentationStyles,
    rightBoxStyles,
    subtitleBoxText,
    titleBoxText,
} from './Presentation.styles';
import background from '../../assets/images/cuadrilla.png';
import pixelArt from '../../assets/images/pixelArt.png';

const Presentation = () => {
    const handleScroll = (id: string) => {
        const profileElement = document.getElementById(id);
        if (profileElement) {
            profileElement.scrollIntoView();
        }
    };
    return (
        <Box
            sx={presentationStyles}
            style={{ backgroundImage: `url(${pixelArt}), url(${background})` }}
        >
            <Box sx={rightBoxStyles}>
                <Box sx={titleBoxText}>
                    <Card title={`Hi! I'm`}>
                        <Box p={{ base: '0.5rem 2rem', md: '1rem 0' }}>
                            <Text
                                color="primary.600"
                                fontSize={{ base: '3rem', md: '4rem' }}
                                fontFamily="heading"
                                align="center"
                            >
                                KERLIS
                            </Text>
                        </Box>
                    </Card>
                </Box>
                <Box sx={subtitleBoxText}>
                    <Card>
                        <Box p="1.5rem 0.5rem">
                            <Text
                                color="primary.600"
                                fontSize="1rem"
                                fontFamily="subtitle"
                                align="center"
                            >
                                WEB DEVELOPER
                            </Text>
                        </Box>
                    </Card>
                </Box>
                <Box sx={descriptionBoxText}>
                    <Card>
                        <Box p="1rem 1.5rem">
                            <Text
                                color="primary.600"
                                fontSize="1rem"
                                fontFamily="heading"
                                align="left"
                            >
                                Explore my web development portfolio, where each
                                line of code tells a visual story. Uncover the
                                essence of every pixel on my journey as a
                                Front-End Developer.
                            </Text>
                        </Box>
                    </Card>
                </Box>
                {/* buttons  */}
                <Box sx={buttonBoxStyles}>
                    <Button
                        onClick={() => {
                            handleScroll('profile');
                        }}
                    >
                        About Me
                    </Button>
                    <Button
                        onClick={() => {
                            handleScroll('experience');
                        }}
                    >
                        Experiences
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => {
                            handleScroll('contact');
                        }}
                    >
                        Contact
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Presentation;
