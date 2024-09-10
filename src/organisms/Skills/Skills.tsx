import { Box, Button, Image, Text } from '@chakra-ui/react';
import Carousel from 'react-multi-carousel';
import profileImage from './../../assets/images/profilePixelArt.png';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};

const Skills = () => {
    return (
        <div>
            <Box>
                <Image
                    src={profileImage}
                    alt="profile image in a pixel art style"
                />
                <Button variant="secondary">Kerlis Aguado</Button>
            </Box>
            <Box>
                <Box>Description Box</Box>
                <Box>
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        infinite={true}
                        autoPlay={true}
                        // customLeftArrow={<Text> &lt;</Text>}
                        // customRightArrow={<Text> &gt;</Text>}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                        <div>Item 4</div>
                    </Carousel>
                    ;
                </Box>
            </Box>
        </div>
    );
};
export default Skills;
