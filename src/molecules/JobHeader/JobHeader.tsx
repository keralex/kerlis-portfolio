import { Box, Text } from '@chakra-ui/react';
import Card from '../Card/Card';

interface JobHeaderProps {
    company: string;
    location: string;
    period: string;
}

export const JobHeader = ({ location, period }: JobHeaderProps) => {
    return (
        <Card>
            <Box padding="1rem">
                <Text>{location}</Text>
                <Text>{period}</Text>
            </Box>
        </Card>
    );
};
