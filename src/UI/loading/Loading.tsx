import React, {FC} from 'react';
// @ts-ignore
import cl from './Loading.module.css'
interface LoadingProps {

}
const Loading:FC<LoadingProps> = () => {
    return (
        <div className={cl.loading}>
            <div className={cl.loading__circle}></div>
            <div className={cl.loading__circle}></div>
        </div>
    );
};

export default Loading;