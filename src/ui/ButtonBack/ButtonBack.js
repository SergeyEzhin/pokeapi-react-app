import React from 'react';
import './ButtonBack.scss';

export const ButtonBack = ({history}) => 
{
    return (
        <div className="button-back">
            <button className="button-back__btn" onClick={history.goBack}>
                <img src={process.env.PUBLIC_URL + '/img/icon_arrow_back.svg'} alt=""/>
                Назад
            </button>
        </div>
    )
}