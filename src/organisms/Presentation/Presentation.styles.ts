import { position } from '@chakra-ui/react';

export const presentationStyles = {
    width: '100%',
    height: { base: 'auto', md: '90vh' },
    backgroundColor: 'primary.500',
    backgroundSize: {
        base: '65%, cover',
        md: '40%, cover',
        xl: 'auto, cover',
    },
    backgroundPosition: {
        base: '50% 40%, center',
        md: '90% 40%, center',
        xl: '80% 40%, center',
    },
    backgroundRepeat: 'no-repeat, no-repeat',
};

export const rightBoxStyles = {
    width: { base: '100%', md: '50%', xl: 'auto' },
    height: '100%',
    display: 'flex',
    paddingLeft: { base: '0', md: '100px', xl: '200px' },
    paddingBottom: { base: '0', md: '7rem', xl: '10rem' },
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'end',
};

export const titleBoxText = {
    position: 'absolute',
    left: { base: '10%', md: '46px', xl: '200px' },
    top: { base: '40px', md: '50px' },
    height: 'fit-content',
};

export const subtitleBoxText = {
    position: 'absolute',
    left: { base: '40%', md: '300px', xl: '430px' },
    top: { base: '150px', md: '200px' },
    height: 'fit-content',
    width: { base: '200px', md: 'auto' },
};

export const descriptionBoxText = {
    position: { base: 'auto', md: 'absolute' },
    left: { base: 'auto', md: '50px', xl: '200px' },
    top: { base: 'auto', md: '380px', xl: '435px' },
    height: 'fit-content',
    marginTop: { base: '140%', md: '0' },
    maxWidth: { base: '80%', md: '500px' },
};

export const buttonBoxStyles = {
    display: 'flex',
    alignItems: { base: 'center', md: 'auto' },
    justifyContent: { base: 'center', md: 'left' },
    flexDirection: 'row',
    gap: 3,
    width: { base: '100%', md: 'auto' },
    padding: { base: '1rem', md: '0' },
    flexWrap: 'wrap',
    position: { base: 'auto', md: 'absolute' },
    left: { base: 'auto', md: '46px', xl: '200px' },
    bottom: { base: 'auto', md: '50px' },
};
