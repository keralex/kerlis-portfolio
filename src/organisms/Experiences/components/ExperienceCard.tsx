'use client';

import { Box, Flex, SlideFade, Button, Text } from '@chakra-ui/react';
import { JobDescription } from '../../../molecules/JobDescription/JobDescription';
import { useEffect, useState } from 'react';

interface ExperienceCardProps {
    company: string;
    position: string;
    location: string;
    period: string;
    responsibilities: string[];
    onMoreClick?: () => void;
}

export const ExperienceCard = ({
    company,
    position,
    period,
    responsibilities,
    onMoreClick,
}: ExperienceCardProps) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, [company, period]);

    const handleMoreClick = () => {
        setIsVisible(false);

        setTimeout(() => {
            if (onMoreClick) {
                onMoreClick();
            }
        }, 200);
    };

    return (
        <Box
            position="relative"
            width="100%"
            maxW="700px"
            mx="auto"
            overflow="hidden"
            borderRadius="xl"
        >
            <Box position="relative" px={6} py={4} zIndex={1}>
                <SlideFade in={isVisible} offsetY="20px" unmountOnExit={false}>
                    <Box display="flex" flexDirection="column">
                        <Box>
                            <Text
                                color="neutral.0"
                                fontSize="2.8rem "
                                fontFamily="subtitle"
                                align="center"
                                as="h2"
                            >
                                {company}
                            </Text>
                            <Text
                                color="neutral.0"
                                fontSize="1rem "
                                fontFamily="body"
                                align="center"
                                as="h2"
                            >
                                {period}
                            </Text>
                            <Text
                                color="neutral.0"
                                fontSize="2rem "
                                fontFamily="heading"
                                align="center"
                                as="h2"
                            >
                                {position}
                            </Text>
                        </Box>
                        <Box mt="1rem" width="100%" alignSelf="center">
                            <JobDescription
                                responsibilities={responsibilities}
                            />
                        </Box>

                        <Flex justify="flex-end" mt={2}>
                            <Button
                                mt={2}
                                variant="secondary"
                                onClick={handleMoreClick}
                            >
                                More
                            </Button>
                        </Flex>
                    </Box>
                </SlideFade>
            </Box>
        </Box>
    );
};
