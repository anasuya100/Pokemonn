import React from 'react';
import { useEffect, useState } from 'react';

const PokemonCard = ({ pokemon }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Type-based styling information
  const typeColors = {
    normal: { bg: 'bg-gray-200', text: 'text-gray-800', accent: 'from-gray-200 to-gray-100' },
    fire: { bg: 'bg-orange-100', text: 'text-red-800', accent: 'from-orange-200 to-red-200' },
    water: { bg: 'bg-blue-100', text: 'text-blue-800', accent: 'from-blue-200 to-cyan-200' },
    electric: { bg: 'bg-yellow-100', text: 'text-yellow-800', accent: 'from-yellow-200 to-amber-100' },
    grass: { bg: 'bg-green-100', text: 'text-green-800', accent: 'from-green-200 to-emerald-100' },
    ice: { bg: 'bg-cyan-100', text: 'text-cyan-800', accent: 'from-cyan-200 to-blue-100' },
    fighting: { bg: 'bg-red-100', text: 'text-red-900', accent: 'from-red-200 to-rose-100' },
    poison: { bg: 'bg-purple-100', text: 'text-purple-800', accent: 'from-purple-200 to-fuchsia-100' },
    ground: { bg: 'bg-amber-100', text: 'text-amber-900', accent: 'from-amber-200 to-yellow-100' },
    flying: { bg: 'bg-indigo-100', text: 'text-indigo-800', accent: 'from-indigo-200 to-blue-100' },
    psychic: { bg: 'bg-pink-100', text: 'text-pink-800', accent: 'from-pink-200 to-rose-100' },
    bug: { bg: 'bg-lime-100', text: 'text-lime-800', accent: 'from-lime-200 to-green-100' },
    rock: { bg: 'bg-stone-100', text: 'text-stone-800', accent: 'from-stone-200 to-amber-100' },
    ghost: { bg: 'bg-violet-100', text: 'text-violet-800', accent: 'from-violet-200 to-purple-100' },
    dragon: { bg: 'bg-indigo-100', text: 'text-indigo-900', accent: 'from-indigo-200 to-violet-100' },
    dark: { bg: 'bg-slate-200', text: 'text-slate-800', accent: 'from-slate-300 to-gray-200' },
    steel: { bg: 'bg-slate-100', text: 'text-slate-700', accent: 'from-slate-200 to-gray-100' },
    fairy: { bg: 'bg-pink-100', text: 'text-pink-700', accent: 'from-pink-200 to-rose-100' }
  };

  // Get the primary type for card theming
  const primaryType = pokemon.types[0]?.type.name || 'normal';
  const typeStyle = typeColors[primaryType] || typeColors.normal;

  return (
    <div 
      className={`relative ${typeStyle.bg} rounded-2xl shadow-md overflow-hidden transition-all duration-500 ease-in-out`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        transform: isHovering ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovering 
          ? `0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.1), 0 0 15px 2px ${getTypeColor(primaryType, '0.4')}`
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
    >
      {/* Card background pattern */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${typeStyle.accent} opacity-50`}
        style={{
          backgroundImage: `radial-gradient(circle at 85% 25%, ${getTypeColor(primaryType, '0.4')} 0%, transparent 25%), 
                           radial-gradient(circle at 15% 75%, ${getTypeColor(primaryType, '0.4')} 0%, transparent 25%)`
        }}
      />

      {/* Pokemon image container */}
      <div className="relative p-6 flex justify-center">
        <div 
          className="relative w-40 h-40 mx-auto"
          style={{
            animation: 'float 3s ease-in-out infinite',
          }}
        >
          {/* Reflection/shadow effect */}
          <div 
            className="absolute bottom-0 left-1/2 w-3/4 h-4 bg-black rounded-full -translate-x-1/2"
            style={{
              opacity: '0.15',
              filter: 'blur(4px)',
              transform: `scale(${isHovering ? 0.8 : 1})`,
              transition: 'all 0.5s ease-in-out'
            }}
          />
          
          {/* Pokemon image with floating effect */}
          <img 
            src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default}
            alt={pokemon.name}
            className="w-full h-full object-contain z-10 transition-all duration-500"
            style={{
              filter: isHovering ? 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.7))' : 'none',
              transform: `scale(${isHovering ? 1.1 : 1}) translateY(${isHovering ? '-5px' : '0'})`,
            }}
            loading="lazy"
          />
        </div>
      </div>

      {/* Card info section */}
      <div className={`relative p-4 ${isHovering ? 'bg-white/90' : 'bg-white/70'} backdrop-blur-sm transition-colors duration-300 rounded-t-2xl -mt-4 border-t border-white/50`}>
        <div className="flex justify-between items-center mb-2">
          <h2 className={`text-xl font-bold capitalize ${typeStyle.text}`}>
            {pokemon.name}
          </h2>
          <span className="text-gray-500 font-mono text-sm font-medium bg-gray-100 px-2 py-1 rounded-full">
            #{pokemon.id.toString().padStart(3, '0')}
          </span>
        </div>
        
        {/* Pokemon types */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {pokemon.types.map(({ type }) => (
            <span 
              key={type.name} 
              className={`bg-${type.name} text-white text-xs font-semibold px-3 py-1 rounded-full transition-transform duration-300`}
              style={{
                backgroundColor: getTypeColor(type.name),
                transform: isHovering ? 'scale(1.05)' : 'scale(1)',
                boxShadow: isHovering ? `0 2px 8px ${getTypeColor(type.name, '0.4')}` : 'none'
              }}
            >
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Shine effect on hover */}
      {isHovering && (
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-white to-transparent opacity-20"
          style={{
            animation: 'shine 1.5s ease-in-out'
          }}
        />
      )}
    </div>
  );
};

// Helper function to get type colors in different formats
function getTypeColor(type, opacity = '1') {
  const typeColorMap = {
    normal: `rgba(168, 168, 120, ${opacity})`,
    fire: `rgba(240, 128, 48, ${opacity})`,
    water: `rgba(104, 144, 240, ${opacity})`,
    electric: `rgba(248, 208, 48, ${opacity})`,
    grass: `rgba(120, 200, 80, ${opacity})`,
    ice: `rgba(152, 216, 216, ${opacity})`,
    fighting: `rgba(192, 48, 40, ${opacity})`,
    poison: `rgba(160, 64, 160, ${opacity})`,
    ground: `rgba(224, 192, 104, ${opacity})`,
    flying: `rgba(168, 144, 240, ${opacity})`,
    psychic: `rgba(248, 88, 136, ${opacity})`,
    bug: `rgba(168, 184, 32, ${opacity})`,
    rock: `rgba(184, 160, 56, ${opacity})`,
    ghost: `rgba(112, 88, 152, ${opacity})`,
    dragon: `rgba(112, 56, 248, ${opacity})`,
    dark: `rgba(112, 88, 72, ${opacity})`,
    steel: `rgba(184, 184, 208, ${opacity})`,
    fairy: `rgba(238, 153, 172, ${opacity})`
  };
  
  return typeColorMap[type] || typeColorMap.normal;
}

export default PokemonCard;