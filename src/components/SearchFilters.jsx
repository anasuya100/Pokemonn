import React from 'react';
import { Search, Filter } from 'lucide-react';

const SearchFilters = ({ 
  searchTerm, 
  selectedType, 
  onSearchChange, 
  onTypeChange 
}) => {
  const types = [
    '', 'normal', 'fire', 'water', 'electric', 'grass', 
    'ice', 'fighting', 'poison', 'ground', 'flying', 
    'psychic', 'bug', 'rock', 'ghost', 'dragon', 
    'dark', 'steel', 'fairy'
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 w-full">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search Pokémon by name..."
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md 
                     shadow-sm focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        <select
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
          className="pl-10 pr-10 py-2 border border-gray-300 rounded-md 
                     shadow-sm focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Types</option>
          {types.filter(type => type !== '').map((type) => (
            <option key={type} value={type}>
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default SearchFilters;