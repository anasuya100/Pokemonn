import React from 'react';
import Header from './components/Header';
import SearchFilters from './components/SearchFilters';
import PokemonGrid from './components/PokemonGrid';
import Footer from './components/Footer';
import './animations.css';
import { usePokemon } from './hooks/usePokemon';

function App() {
  const { 
    pokemon, 
    isLoading, 
    error, 
    searchTerm, 
    setSearchTerm, 
    selectedType, 
    setSelectedType 
  } = usePokemon();

  return (
    <div className="min-h-screen bg-gradient-to-l from-neutral-50 to-neutral-150">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-xl font-bold text-gray-800">Back To Childhood</h2>
          <SearchFilters 
            searchTerm={searchTerm}
            selectedType={selectedType}
            onSearchChange={setSearchTerm}
            onTypeChange={setSelectedType}
          />
        </div>
        
        <PokemonGrid 
          pokemon={pokemon}
          isLoading={isLoading}
          error={error}
        />
      </main>
      
      <Footer/>
    </div>
  );
}

export default App;