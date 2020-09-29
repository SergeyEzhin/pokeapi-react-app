import React from 'react';
import './PokemonDetail.scss';

export const PokemonDetail = (props) => 
{
    return (
        <React.Fragment>
            <h2>Описание покемона:</h2>
            <div className="row">
                <div className="col-md-4">
                    <p>Название характеристики:</p>
                </div>
                <div className="col-md-8">
                    <p>Значение</p>
                </div>
            </div>
        </React.Fragment>
    )
}
