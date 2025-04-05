'use client';

import { Box, Flex, SlideFade, Button, Text } from '@chakra-ui/react';
import { JobHeader } from '../../../molecules/JobHeader/JobHeader';
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
    location,
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
            maxW="500px"
            mx="auto"
            overflow="hidden"
            borderRadius="xl"
        >
            {/* Content */}
            <Box position="relative" px={6} py={4} zIndex={1}>
                <SlideFade in={isVisible} offsetY="20px" unmountOnExit={false}>
                    <Box display="flex" flexDirection="column">
                        <Box width="80%" alignSelf="flex-end">
                            <JobHeader
                                company={company}
                                location={location}
                                period={period}
                            />
                        </Box>
                        <Box>
                            <Text
                                color="neutral.0"
                                fontSize="3rem "
                                fontFamily="subtitle"
                                align="left"
                                as="h2"
                            >
                                {company}
                            </Text>
                            <Text
                                color="neutral.0"
                                fontSize="2rem "
                                fontFamily="heading"
                                align="left"
                                as="h2"
                            >
                                {position}
                            </Text>
                        </Box>
                        <Box>
                            <JobDescription
                                responsibilities={responsibilities}
                            />
                        </Box>

                        <Flex justify="flex-end" mt={2}>
                            <Button
                                size="sm"
                                bg="pink.400"
                                color="white"
                                borderRadius="full"
                                px={6}
                                _hover={{
                                    bg: 'pink.500',
                                    transform: 'translateY(-2px)',
                                }}
                                _active={{
                                    bg: 'pink.600',
                                    transform: 'translateY(0)',
                                }}
                                transition="all 0.2s"
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
