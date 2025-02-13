import { Box, Button, Text } from '@chakra-ui/react';
import Card from '../../molecules/Card/Card';
import {
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
                        <Box p="1.5rem 0">
                            <Text
                                color="primary.600"
                                fontSize="1rem"
                                fontFamily="subtitle"
                                align="center"
                            >
                                FRONT-END DEVELOPER
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
                <Box
                    display="flex"
                    alignItems={{ base: 'center', md: 'auto' }}
                    justifyContent={{ base: 'center', md: 'left' }}
                    gap={3}
                    width="100%"
                    p={{ base: '1rem', md: '0' }}
                    flexWrap="wrap"
                >
                    <Button
                        onClick={() => {
                            handleScroll('profile');
                        }}
                    >
                        Experience
                    </Button>
                    <Button>Education</Button>
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
