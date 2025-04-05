import { Box } from '@chakra-ui/react';
import background from '../../assets/images/cuadrilla.png';
import styled from '@emotion/styled';

export const BackgroundBox = styled(Box)(() => ({
    position: 'relative',
    zIndex: 1,
    '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
        zIndex: -1,
    },
}));
