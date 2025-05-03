import { useState, useEffect } from 'react';
import { fetchPokemonList, fetchPokemonDetails } from '../services/pokemonService';

export const usePokemon = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        const listResponse = await fetchPokemonList();
        const detailsPromises = listResponse.results.map(pokemon => 
          fetchPokemonDetails(pokemon.url)
        );
        
        const pokemonDetails = await Promise.all(detailsPromises);
        setAllPokemon(pokemonDetails);
        setFilteredPokemon(pokemonDetails);
      } catch (err) {
        setError('Failed to load Pokémon. Please try again later.');
        console.error('Error in usePokemon hook:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadPokemon();
  }, []);

  useEffect(() => {
    let filtered = allPokemon;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(pokemon =>
        pokemon.types.some(typeInfo => typeInfo.type.name === selectedType)
      );
    }

    setFilteredPokemon(filtered);
  }, [searchTerm, selectedType, allPokemon]);

  return {
    pokemon: filteredPokemon,
    isLoading,
    error,
    searchTerm,
    setSearchTerm,
    selectedType,
    setSelectedType
  };
};