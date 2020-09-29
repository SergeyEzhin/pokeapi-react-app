import {FETCH_DATA, SAVE_DATA, ADD_POKEMON} from '../types';

const initialState = {
    data: '',
    currentPokemon: '',
    currentAbility: ''
};

export const dataReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case FETCH_DATA:
            return {...state, data: action.payload}
        case SAVE_DATA: 
            return {...state, data: action.payload}
        case ADD_POKEMON: 
            return {...state, currentPokemon: action.payload}
        default:
            return state
    }
}
