const API_URL = 'https://pokeapi.co/api/v2';

export const fetchPokemonList = async (limit = 150) => {
  try {
    const response = await fetch(`${API_URL}/pokemon?limit=${limit}`);
    if (!response.ok) {
      throw new Error('Failed to fetch Pokemon list');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
    throw error;
  }
};

export const fetchPokemonDetails = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch Pokemon details for ${url}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching Pokemon details:', error);
    throw error;
  }
};