import React from 'react';
import './Filter.scss';

export const Filter = () => 
{
    function changeHandler(e)
    {
        let field = e.target;
        let value = field.value.trim();

        if(value !== '')
        {
            console.log(value);
        }
    }

    return (
        <div className="filter">
            <input type="text" name="filter" className="filter__elem" placeholder="Найти пикачу" onChange={changeHandler} />
        </div>

    )
}