import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '../../ui/Loader/Loader';
import {saveAbilityData} from '../../redux/actions';
import './AbilityDetail.scss';

export const AbilityDetail = ({history}) => 
{
    const abilityData = useSelector(state => state.data.abilityData);
    const dispatch = useDispatch();

    if(abilityData)
    {
        // console.log(abilityData);
        return (
            <div className="ability-detail">
                <div className="ability-detail__title">
                    <h2>Описание способности:</h2>
                </div>
                <div className="ability-detail__content">
                    <div className="row ability-detail__row">
                        <div className="col-md-3">
                            <p>Название:</p>
                        </div>
                        <div className="col-md-9">
                            <p>{abilityData.name}</p>
                        </div>
                    </div>
                </div>
                <div className="ability-detail__content">
                    <div className="row ability-detail__row">
                        <div className="col-md-3">
                            <p>Поколение:</p>
                        </div>
                        <div className="col-md-9">
                            <p>{abilityData.generation.name}</p>
                        </div>
                    </div>
                </div>
                <div className="ability-detail__content">
                    <div className="row ability-detail__row">
                        <div className="col-md-3">
                            <p>Входной эффект:</p>
                        </div>
                        <div className="col-md-9">
                            <p>{abilityData.effect_entries[1].effect}</p>
                        </div>
                    </div>
                </div>
                <br />
                <button type="button" className="btn btn-primary" onClick={history.goBack}>Вернуться назад</button>
            </div>
        )
    }
    else 
    {
        dispatch(saveAbilityData());
        return <Loader />
    }

}