import React from 'react';
import { Database } from 'lucide-react';

const Header = () => (
  <header className="bg-gradient-to-l from-rose-900 to-rose-800 text-white py-4 shadow-lg">
    <div className="container mx-auto px-4 flex items-center">
      <Database className="w-8 h-8 mr-3 text-white hover:scale-110 transition-transform duration-300" />
      <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight 
                    hover:text-gray-100 transition-colors duration-300">
         Explorer Your favorite Pokémon
      </h1>
    </div>
  </header>
);

export default Header;