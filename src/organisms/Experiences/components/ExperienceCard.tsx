'use client';

import { Box, VStack, Flex, SlideFade, Button } from '@chakra-ui/react';
import { JobHeader } from '../../../molecules/JobHeader/JobHeader';
import { JobDescription } from '../../../molecules/JobDescription/JobDescription';
import { useEffect, useState } from 'react';

interface ExperienceCardProps {
    title: string;
    company: string;
    location: string;
    period: string;
    responsibilities: string[];
    onMoreClick?: () => void;
}

export const ExperienceCard = ({
    title,
    company,
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
            height="450px" // Fixed height to prevent layout shifts
        >
            {/* Content */}
            <Box
                position="relative"
                px={6}
                py={4}
                zIndex={1}
                height="290px" // Fixed height for content area
            >
                <SlideFade in={isVisible} offsetY="20px" unmountOnExit={false}>
                    <VStack spacing={4} align="stretch">
                        <h1>{title}</h1>

                        <Box>
                            <JobHeader
                                company={company}
                                location={location}
                                period={period}
                            />
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
                    </VStack>
                </SlideFade>
            </Box>
        </Box>
    );
};
