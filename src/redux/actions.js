import {FETCH_DATA, SAVE_DATA, FETCH_ABILITY_DATA, SAVE_ABILITY_DATA, CLEAR_ABILITY_DATA} from './types';

export const fetchData = () => 
{
    return dispatch => 
    {
        let data = localStorage.getItem('list-pokemons');
        if(data)
        {
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
                    localStorage.setItem('list-pokemons', JSON.stringify(result));
                    dispatch({type: FETCH_DATA, payload: result});
                });
            });
        }
    }
}

export const fetchAbilityData = (path) => 
{
    return async dispatch => 
    {
        localStorage.removeItem('ability-data');
        const abilityData = await fetch(path)
            .then(response => response.json())
            .then(data => data);

        localStorage.setItem('ability-data', JSON.stringify(abilityData))
        dispatch({type: FETCH_ABILITY_DATA, payload: abilityData})
    }
}

export const saveAbilityData = () => 
{
    return dispatch => 
    {
        let abilityData = localStorage.getItem('ability-data');
        if(abilityData)
        {
            abilityData = JSON.parse(abilityData);
            dispatch({type: SAVE_ABILITY_DATA, payload: abilityData});
        }
    }
}

export const clearAbilityData = () => 
{
    return {
        type: CLEAR_ABILITY_DATA
    }
}


