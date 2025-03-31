import { HStack, Text, Box, type StackProps } from '@chakra-ui/react';

interface BulletPointProps extends StackProps {
    text: string;
}

export const BulletPoint = ({ text, ...rest }: BulletPointProps) => {
    return (
        <HStack align="flex-start" spacing={2} {...rest}>
            <Box as="span" fontSize="md" mt={1}>
                •
            </Box>
            <Text fontSize="sm">{text}</Text>
        </HStack>
    );
};
