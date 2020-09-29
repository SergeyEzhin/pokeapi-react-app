import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { addPokemon } from '../../redux/actions';

export const Card = ({name, height, weight, id}) => 
{
    const dispatch = useDispatch();
    const data = useSelector(state => state.data.data);

    function clickHandler(e)
    {
       let currentButton = e.target;
       let id = +currentButton.dataset.id;
       console.log(id);

       let obj = data.filter(elem => elem.id === id);
       console.log(obj[0]);

       dispatch(addPokemon(obj[0]));
    }

    return (
        <div className="col-md-3 wrapper__column">
            <div className="card text-white bg-dark">
                <img className="card-img-top" src="https://via.placeholder.com/253" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Имя: {name}</h5>
                    <p className="card-text">Высота: {height}</p>
                    <p className="card-text">Ширина: {weight}</p>
                    <button className="btn btn-info text-white mt-3" data-id={id} onClick={clickHandler}>Подробнее</button>
                </div>
            </div>
        </div>
    )
}