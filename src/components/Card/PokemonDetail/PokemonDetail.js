import React from 'react';
import { Loader } from '../../../ui/Loader/Loader';
import {Link} from 'react-router-dom';
import './PokemonDetail.scss';

export const PokemonDetail = ({location}) => 
{
    const { state } = location;
    console.log(state);

    if(state)
    {
        return (
            <div className="pokemon-detail">
                <div className="pokemon-detail__title">
                    <h2>Характеристики:</h2>
                </div>
                <div className="pokemon-detail__content">
                    <div className="row pokemon-detail__row">
                        <div className="col-md-3">
                            <p>Имя:</p>
                        </div>
                        <div className="col-md-9">
                            <p>{state.name}</p>
                        </div>
                    </div>
                    <div className="row pokemon-detail__row">
                        <div className="col-md-3">
                            <p>Вид</p>
                        </div>
                        <div className="col-md-9">
                            <p>{state.species.name}</p>
                        </div>
                    </div>
                    <div className="row pokemon-detail__row">
                        <div className="col-md-3">
                            <p>Высота:</p>
                        </div>
                        <div className="col-md-9">
                            <p>{state.height}</p>
                        </div>
                    </div>
                    <div className="row pokemon-detail__row">
                        <div className="col-md-3">
                            <p>Ширина:</p>
                        </div>
                        <div className="col-md-9">
                            <p>{state.weight}</p>
                        </div>
                    </div>
                </div>
                <div className="pokemon-detail__title">
                    <h2>Способности:</h2>
                </div>
                <div className="list-group list">
                {
                    state.abilities.map((elem, index) => 
                    {
                        return (
                            <li className="list-group-item list-group list__elem" key={index}>
                                <Link to={`/ability/${elem.ability.name}`}>{elem.ability.name}</Link>
                            </li>
                        )
                    })  
                }
                </div>   
            </div>
        )
    }
    else 
    {
        return <Loader />
    }
}
