const ENDPOINT = 'https://rickandmortyapi.com/api/character/';

const fetchCharacters = () => fetch(ENDPOINT).then(response => response.json());


export { fetchCharacters };

