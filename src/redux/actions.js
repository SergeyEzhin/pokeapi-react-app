import {ADD_POKEMON, FETCH_DATA, SAVE_DATA} from './types';
import { push } from 'connected-react-router';

export const fetchData = () => 
{
    return dispatch => 
    {
        if(localStorage.getItem('data'))
        {
            let data = localStorage.getItem('data');
            data = JSON.parse(data);
            dispatch({type: SAVE_DATA, payload: data});
        }
        else 
        {
            return fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
            .then(response => 
            {
            return response.json();
            })
            .then(data =>
            {
                let pokemonPaths = data.results;
                let arrayPromises = pokemonPaths.map(pokemonPath => {
                    return fetch(pokemonPath.url)
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        return data;
                    });
                });

                Promise.all(arrayPromises).then(result => 
                {
                    localStorage.setItem('data', JSON.stringify(result));
                    dispatch({type: FETCH_DATA, payload: result});
                });
            });
        }
    }
}


export const addPokemon = (pokemon) =>
{
    return dispatch => 
    {
        dispatch({type: ADD_POKEMON, payload: pokemon});
        dispatch(push('/pokemon/'+ pokemon.id));
    }
}