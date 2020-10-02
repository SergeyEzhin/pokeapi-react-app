import React from 'react';
import {Loader} from '../../ui/Loader/Loader';
import {useDispatch} from 'react-redux';
import {fetchAbilityData, clearAbilityData} from '../../redux/actions';
import './PokemonDetail.scss';
import { ButtonBack } from '../../ui/ButtonBack/ButtonBack';

export const PokemonDetail = ({history, location}) => 
{
    const {state} = location;
    const dispatch = useDispatch();

    function clickHandler(e)
    {
        let button = e.target;
        let pathToAbility = button.dataset.url;
        let nameAbility = button.innerHTML;

        dispatch(clearAbilityData());
        dispatch(fetchAbilityData(pathToAbility));
       
        history.push({
            pathname: '/ability/' + nameAbility
        });
    }

    if(state)
    {
        return (
            <div className="pokemon-detail">
                <div className="pokemon-detail__title">
                    <div className="pokemon-detail__avatar">
                        <img src={process.env.PUBLIC_URL + '/img/icon_avatar.png'} alt="" />
                    </div>
                    <div className="pokemon-detail__name">
                        <h2>Покемон <br />{state.name}</h2>
                    </div>
                </div>
                <div className="pokemon-detail__content">
                    <div className="row pokemon-detail__row">
                        <div className="col-md-6 pokemon-detail__column">
                            <div className="specifications">
                                <div className="pokemon-detail__subtitle">
                                    <h3>Характеристики</h3>
                                </div>
                                <div className="row specifications__row">
                                    <div className="col-md-6 specifications__name">
                                        <p>Имя</p>
                                    </div>
                                    <div className="col-md-6 specifications__value">
                                        <p>{state.name}</p>
                                    </div>
                                </div>
                                <div className="row specifications__row">
                                    <div className="col-md-6 specifications__name">
                                        <p>Вид</p>
                                    </div>
                                    <div className="col-md-6 specifications__value">
                                        <p>{state.species.name}</p>
                                    </div>
                                </div>
                                <div className="row specifications__row">
                                    <div className="col-md-6 specifications__name">
                                        <p>Высота</p>
                                    </div>
                                    <div className="col-md-6 specifications__value">
                                        <p>{state.height}</p>
                                    </div>
                                </div>
                                <div className="row specifications__row">
                                    <div className="col-md-6 specifications__name">
                                        <p>Ширина</p>
                                    </div>
                                    <div className="col-md-6 specifications__value">
                                        <p>{state.weight}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 pokemon-detail__column">
                            <div className="pokemon-detail__subtitle">
                                <h3>Способности</h3>
                            </div>
                            <div className="list-abilities">
                            {
                                state.abilities.map((elem, index) => 
                                {
                                    return (
                                        <button type="button" className="list-abilities__btn" key={index} onClick={clickHandler} data-url={elem.ability.url}>{elem.ability.name}</button>
                                    )
                                })  
                            }
                            </div>  
                        </div>
                    </div>
                </div>
                <ButtonBack history={history} />
            </div>
        )
    }
    else 
    {
        return <Loader />
    }
}
