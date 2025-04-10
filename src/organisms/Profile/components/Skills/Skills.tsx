/* eslint-disable react/prop-types */
import { Box, Button, Text, useMediaQuery } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { buttonStyles, carouselStyles, skillBoxStyles } from './Skills.styles';

const skillsArray: string[] = [
    'Javascript',
    'Typescript',
    'React',
    'React Context',
    'Jest',
    'Redux',
    'Next.js',
    'React Native',
    'Node.js',
    'Express.js',
    'HTML',
    'CSS',
    'Material UI',
    'Tailwind',
];

const responsive = {
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024,
        },
        items: 3,
        partialVisibilityGutter: 40,
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464,
        },
        items: 1,
        partialVisibilityGutter: 30,
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomRightArrow = (props: any) => {
    return (
        <Box
            position="absolute"
            right="-18px"
            top="40%"
            transform="translateY(-50%)"
        >
            <Button variant="plain" onClick={props.onClick} sx={buttonStyles}>
                <Text
                    color="neutral.0"
                    fontSize={{ base: '3rem', md: '4rem' }}
                    fontFamily="heading"
                    align="center"
                >
                    &gt;
                </Text>
            </Button>
        </Box>
    );
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomLeftArrow = (props: any) => {
    return (
        <Box
            position="absolute"
            left="-18px"
            top="40%"
            transform="translateY(-50%)"
        >
            <Button variant="plain" onClick={props.onClick} sx={buttonStyles}>
                <Text
                    color="neutral.0"
                    fontSize={{ base: '3rem', md: '4rem' }}
                    fontFamily="heading"
                    align="center"
                >
                    &lt;
                </Text>
            </Button>
        </Box>
    );
};

const Skills = () => {
    const [isMdBreakpoint] = useMediaQuery('(min-width: 768px)');

    return (
        <Box>
            <Box sx={carouselStyles}>
                <Carousel
                    additionalTransfrom={0}
                    arrows={!isMdBreakpoint}
                    autoPlay
                    autoPlaySpeed={1600}
                    centerMode={!isMdBreakpoint}
                    className=""
                    containerClass="container"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    rewind={false}
                    rewindWithAnimation={false}
                    rtl={false}
                    shouldResetAutoplay
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    customRightArrow={<CustomRightArrow />}
                    customLeftArrow={<CustomLeftArrow />}
                >
                    {skillsArray.map((skillName, index) => (
                        <Box key={index} sx={skillBoxStyles}>
                            {skillName}
                        </Box>
                    ))}
                </Carousel>
                ;
            </Box>
        </Box>
    );
};

export default Skills;
