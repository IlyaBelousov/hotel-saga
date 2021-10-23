import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Input.module.css'
type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const Input:React.FC<InputPropsType> = ({
    style,
    type,
    onChange,value,name
}) => {
    return <input style={style} className={s.inputForm}
                  onChange={onChange}
                  value={value}
                  type={type} name={name}/>
};

