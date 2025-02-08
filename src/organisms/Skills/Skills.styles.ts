export const carouselStyles = {
    '& .react-multi-carousel-list': {
        height: '80px',
    },
    '& .react-multi-carousel-item--active div': {
        opacity: 1,
        transform: { base: 'scale(1.2)', md: 'none' },
        margin: ' 0 20px',
    },
};

export const buttonStyles = {
    boxShadow: 'none',
    width: '5rem',
    height: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    _active: {
        boxShadow: 'none',
    },
};

export const skillBoxStyles = {
    transition: ' transform 0.6s ease',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    background:
        'linear-gradient(180deg,rgba(173, 156, 249, 1) 0%, rgba(144, 123, 246, 1) 100%)',
    borderRadius: '6px',
    margin: '0 10px',
    textAlign: 'center',
    color: 'neutral.0',
    fontFamily: 'subtitle',
    padding: '0.5rem 0',
    letterSpacing: '0.5px',
    fontSize: '14px',
    opacity: '0.5',
};
