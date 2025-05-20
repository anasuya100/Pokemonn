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
      <div className="fixed top-0 left-0 right-0 z-20 bg-white">
        <Header />
        <div className="container mx-auto px-4 py-4">
          <SearchFilters 
            searchTerm={searchTerm}
            selectedType={selectedType}
            onSearchChange={setSearchTerm}
            onTypeChange={setSelectedType}
          />
        </div>
      </div>
      
      <main className="container mx-auto px-6 pt-40 pb-8">
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