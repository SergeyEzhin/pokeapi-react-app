import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addFilter, clearFilter} from '../../redux/actions';
import './Filter.scss';

export const Filter = () => 
{
    const data = useSelector(state => state.data.data);
    const dispatch = useDispatch();

    function changeHandler(e)
    {
        let field = e.target;
        let value = field.value.trim();

        if(value !== '')
        {
            let filterData = data.filter(elem => 
            {
                let pattern = new RegExp(value);
                return pattern.test(elem.name)
            });

            if(filterData.length)
            {
                console.log(filterData);
                dispatch(addFilter(filterData));
            }
        }
        else 
        {
            dispatch(clearFilter());
        }
    }

    return (
        <div className="filter">
            <input type="text" name="filter" className="filter__elem" placeholder="Найти пикачу" onChange={changeHandler} style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/img/icon_search.svg)'}} />
        </div>

    )
}