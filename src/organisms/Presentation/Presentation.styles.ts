export const presentationStyles = {
    width: '100%',
    height: { base: '100vh', md: '90vh%' },
    backgroundColor: 'primary.500',
    backgroundSize: {
        base: '70%, cover',
        md: '50%, cover',
        xl: 'auto, cover',
    },
    backgroundPosition: {
        base: 'center, center',
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
    paddingBottom: { base: '0', md: '10rem' },
    position: 'relative',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'end',
};

export const titleBoxText = {
    position: 'absolute',
    left: { base: '10%', md: '46px', xl: '200px' },
    top: { base: '5%', md: '50px' },
    height: 'fit-content',
};

export const subtitleBoxText = {
    position: 'absolute',
    left: { base: 'auto', md: '300px', xl: '430px' },
    top: { base: '18%', md: '260px' },
    height: 'fit-content',
    width: { base: '200px', md: 'auto' },
};

export const descriptionBoxText = {
    position: 'absolute',
    left: { base: 'auto', md: '100px', xl: '200px' },
    top: '500px',
    height: 'fit-content',
    maxWidth: { base: '80%', md: '500px' },
};
