import { styled } from "../styles";
import { ComponentProps, ElementType } from "react"

export const Button = styled('button', {
    all: 'unset',
    borderRadius: '$sm',
    fontSize: '$sm',
    fontWeight: '$medium',
    fontFamily: '$default',
    textAlign: 'center',
    minWidth: 120,
    
    boxSizing: 'border-box',


    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '2rem',
    cursor: 'pointer',


    svg:{
        width: '$4',
        height: '$4',
    },

    '&:disabled':{
        cursor: 'not-allowed'
    },

    variants: {
        variant:{
            primary:{
                color: '$white',
                background: '$ignite500',


                '&:not:(:disabled):hover':{

                    background: '$ignite300',
                },

                '&:disabled':{
                    background: '$gray200',
                   
                },
               
            },

            secondary:{
                color: '$ignite300',
                border: '2px solid $ignite300',

                
                '&:not:(:disabled):hover':{
                    background: '$ignite500',
                    color: '#white'
                },

                '&:disabled':{
                    background: '$gray200',
                    borderColor: 'gray200',
                   
                },
            },
            tertiary:{
                color: '$white',
                background: '$ignite700',
                border: '2px solid $ignite300',

                  
                '&:not:(:disabled):hover':{
                   
                    color: '#$white'
                },

                '&:disabled':{
                    color: '$gray600',
                   
                   
                },
            }
        },
        size:{
            md:{
                padding: '0 $4',
                height: 46,
            },
            sm:{
                padding: '0 $8',
                height: 38,
            }
        },
    },

    

    defaultVariants: {
        variant: 'primary',
        size: 'md'
    }
})


export interface ButtonProps extends ComponentProps<typeof Button>{
    as?: ElementType
}