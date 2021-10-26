import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import s from './Input.module.css'
type InputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>&{
    error?:boolean
}

export const Input:React.FC<InputPropsType> = ({
    style,
    type,
    onChange,value,name,error
}) => {
    return <input style={style} className={error?s.inputFormError:s.inputForm}
                  onChange={onChange}
                  value={value}
                  type={type} name={name}/>
};

