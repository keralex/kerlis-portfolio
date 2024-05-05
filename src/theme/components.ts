import { defineStyleConfig } from '@chakra-ui/react'

export const Button = defineStyleConfig({
    baseStyle: {
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '20px',
        textTransform: 'capitalize',
        fontFamily: 'subtitle',
        borderRadius: '3px', 
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        letterSpacing: '2px',
        _hover: {
            opacity: '0.9'
        },
        _focus: {
            outline: 'none',
        },
        _active: {
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset'
        }

    },
    sizes: {
        md: {
            fontSize: '14px',
            px: 8, 
            py: 2,
        },
    },
    variants: {
        primary: {
            background: 'linear-gradient(180deg, #AD9CF9 0%, #907BF6 100%)',
            color: 'white',
        },
        secondary: {
            background: 'linear-gradient(180deg, #FEA9F3 0%, #F776CF 100%)',
            color: 'white',  
        }
    },
    defaultProps: {
        size: 'md',
        variant: 'primary',
    },
})