import {FETCH_DATA, SAVE_DATA, FETCH_ABILITY_DATA, SAVE_ABILITY_DATA, CLEAR_ABILITY_DATA, ADD_FILTER, CLEAR_FILTER} from '../types';

const initialState = {
    data: '',
    abilityData: '',
    filterData: ''
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_DATA:
            return {...state, data: action.payload}
        case SAVE_DATA: 
            return {...state, data: action.payload}
        case FETCH_ABILITY_DATA:
            return {...state, abilityData: action.payload}
        case SAVE_ABILITY_DATA:
            return {...state, abilityData: action.payload}
        case CLEAR_ABILITY_DATA:
            return {...state, abilityData: ''}
        case ADD_FILTER:
            return {...state, filterData: action.payload}
        case CLEAR_FILTER:
            return {...state, filterData: ''}
        default:
            return state
    }
}
