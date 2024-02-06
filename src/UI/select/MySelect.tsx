import React, {ChangeEventHandler, FC} from 'react';
// @ts-ignore
import cl from './MySelect.module.css'
interface MySelectProps {
    options:string[],
    selectedAction:ChangeEventHandler<HTMLSelectElement>,
    placeholder?:string,

}
const MySelect:FC<MySelectProps> = ({placeholder, options, selectedAction,}) => {
    return (
        <select
            className={cl.mySelect}
            onChange={e => selectedAction(e)}
        >
            <option selected disabled >Select {placeholder ? placeholder : 'options'}</option>
            {options.map(opt => <option value={opt}>{opt}</option>)}
        </select>
    );
};

export default MySelect;