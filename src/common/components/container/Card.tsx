import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import s from './Card.module.css'

type CardProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
const Card: React.FC<CardProps> = ({
                                   style,
                                   children
                               }) => {
    return <div style={style} className={s.formContainer}>
        {children}
    </div>
};

export default Card;