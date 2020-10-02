import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Loader} from '../../ui/Loader/Loader';
import {saveAbilityData} from '../../redux/actions';
import './AbilityDetail.scss';
import { ButtonBack } from '../../ui/ButtonBack/ButtonBack';

export const AbilityDetail = ({history}) => 
{
    const abilityData = useSelector(state => state.data.abilityData);
    const dispatch = useDispatch();

    if(abilityData)
    {
        return (
            <div className="ability-detail">
                <div className="ability-detail__title">
                    <h2>Описание способности:</h2>
                </div> 
                <div className="ability-detail__block">
                    <p className="ability-detail__name">Название</p>
                    <p className="ability-detail__desc">{abilityData.name}</p>
                </div>
                <div className="ability-detail__block">
                    <p className="ability-detail__name">Поколение</p>
                    <p className="ability-detail__desc">{abilityData.generation.name}</p>
                </div>
                <div className="ability-detail__block">
                    <p className="ability-detail__name">Входной эффект</p>
                    <p className="ability-detail__desc">{abilityData.effect_entries[1].effect}</p>
                </div>
                <ButtonBack history={history} />
            </div>
        )
    }
    else 
    {
        dispatch(saveAbilityData());
        return <Loader />
    }

}