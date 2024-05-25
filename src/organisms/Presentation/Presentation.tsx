import { Box, Button, Text } from '@chakra-ui/react';
import Card from '../../molecules/Card/Card';
import { presentationStyles, rightBoxStyles } from './Presentation.styles';
import background from '../../assets/images/cuadrilla.png';
import pixelArt from '../../assets/images/pixelArt.png';

const Presentation = () => {
    return (
        <Box
            sx={presentationStyles}
            style={{ backgroundImage: `url(${pixelArt}), url(${background})` }}
        >
            <Box sx={rightBoxStyles}>
                <Box
                    sx={{
                        position: 'absolute',
                        left: { base: '10%', md: '100px' },
                        top: { base: '5%', md: '100px' },
                        height: 'fit-content',
                    }}
                >
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
                <Box
                    sx={{
                        position: 'absolute',
                        left: { base: 'auto', md: '300px' },
                        right: { base: '5%', md: 'auto' },
                        top: { base: '18%', md: '260px' },
                        height: 'fit-content',
                        width: { base: '200px', md: 'auto' },
                    }}
                >
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
                <Box
                    sx={{
                        position: 'absolute',
                        left: { base: 'auto', md: '100px' },
                        right: { base: '5%', md: 'auto' },
                        top: '500px',
                        height: 'fit-content',
                        maxWidth: { base: '80%', md: '500px' },
                    }}
                >
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
                <Box display="flex" gap={3} width="100%">
                    <Button>Experience</Button>
                    <Button>Education</Button>
                    <Button variant="secondary">Contact</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Presentation;
