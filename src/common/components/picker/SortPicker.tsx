import React from 'react';
import st from "./SortPicker.module.css";


type SortPropsType = {
    name: string
    arrowUp: string
    arrowDown: string
    onArrowUpClick:()=>void
    onArrowDownClick:()=>void
}

export const SortPicker: React.FC<SortPropsType> = ({
    name,arrowUp,arrowDown,onArrowDownClick,onArrowUpClick
                                                    }) => {
    return <div className={st.Wrapper}>
        <div className={st.rating}>
            {name}
        </div>
        <div className={st.selector}>
            <img onClick={onArrowUpClick} src={arrowUp} alt="ar"/><img onClick={onArrowDownClick} src={arrowDown} alt="ar"/>
        </div>
    </div>
};
