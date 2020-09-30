import {FETCH_DATA, SAVE_DATA} from './types';

export const fetchData = () => 
{
    return dispatch => 
    {
        if(localStorage.getItem('list-pokemons'))
        {
            let data = localStorage.getItem('list-pokemons');
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

