import React from 'react';
import './Loader.scss';

export const Loader = () => (
    <div className="loader">
        <img src={process.env.PUBLIC_URL + '/img/icon_loader.svg'} alt=""/>
    </div>
)