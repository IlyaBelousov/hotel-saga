import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './Button.module.css'

type ButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button:React.FC<ButtonPropsType> = ({
    disabled,className,type,
    children
                                                 }) => {
    return <button disabled={disabled}
                   className={className?className:s.Button}
                   type={type}>{children}
    </button>
};

