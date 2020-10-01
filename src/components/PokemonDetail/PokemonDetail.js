import React from 'react';
import {Loader} from '../../ui/Loader/Loader';
import {useDispatch} from 'react-redux';
import {fetchAbilityData, clearAbilityData} from '../../redux/actions';
import './PokemonDetail.scss';

export const PokemonDetail = ({history, location}) => 
{
    const {state} = location;
    const dispatch = useDispatch();
    // console.log(state);

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
                                <button type="button" className="btn" onClick={clickHandler} data-url={elem.ability.url}>{elem.ability.name}</button>
                            </li>
                        )
                    })  
                }
                </div>  
                <br />
                <button type="button" className="btn btn-primary" onClick={history.goBack}>Вернуться назад</button>
            </div>
        )
    }
    else 
    {
        return <Loader />
    }
}
