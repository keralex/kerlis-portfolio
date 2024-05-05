import { Box, Text } from "@chakra-ui/react";
import { CardProps } from "./Card.interface";
import { cardStyles, titleStyles } from "./Card.styles";

const Card = ( props: CardProps ) => {
    const { children, title } = props;

    return <Box sx={cardStyles}>
            <Box sx={titleStyles}>
                <Text color='primary.600'>{title}</Text>
                <Text color='neutral.0'>X</Text>
                
                </Box> 
            {children}
        </Box>
}

export default Card;