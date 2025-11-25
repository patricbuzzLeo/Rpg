
import React from 'react';
import { Brawler, BrawlerRarity } from '../types';
import { RARITY_INFO } from '../constants';

interface BrawlerCardProps {
  brawler: Brawler;
  isPlayer?: boolean;
  isActive?: boolean; // In battle turn
  isSelected?: boolean; // In character select
  onClick?: () => void;
  showHealthBar?: boolean;
  isDamaged?: boolean;
  isLocked?: boolean;
  canBuy?: boolean;
  onBuy?: (e: React.MouseEvent) => void;
}

const BrawlerCard: React.FC<BrawlerCardProps> = ({ 
  brawler, 
  isPlayer = false, 
  isActive = false, 
  isSelected = false,
  onClick,
  showHealthBar = false,
  isDamaged = false,
  isLocked = false,
  canBuy = false,
  onBuy
}) => {
  const hpPercent = Math.max(0, Math.min(100, (brawler.hp / brawler.maxHp) * 100));
  const superPercent = Math.max(0, Math.min(100, brawler.superCharge));
  
  // Get rarity styling, default to Common if missing
  const rarityStyle = RARITY_INFO[brawler.rarity] || RARITY_INFO[BrawlerRarity.COMMON];
  const borderColor = isSelected ? 'border-white' : isLocked ? 'border-gray-700' : rarityStyle.border;
  const shadowClass = isActive ? 'shadow-[0_0_20px_rgba(250,204,21,0.6)]' : isSelected ? 'shadow-[0_0_25px_rgba(255,255,255,0.8)]' : '';

  return (
    <div 
      onClick={!isLocked ? onClick : undefined}
      className={`
        relative p-3 rounded-xl border-4 transition-all duration-300 transform
        ${isActive ? 'scale-105 border-yellow-400 z-10' : ''}
        ${isSelected ? 'scale-105 z-10 bg-slate-700' : ''}
        ${borderColor}
        ${!isActive && !isSelected ? `border-opacity-80` : ''}
        ${!isLocked && !isActive && !isSelected ? 'hover:scale-105 hover:brightness-110' : ''}
        ${isPlayer ? 'bg-slate-800' : 'bg-gray-900'}
        ${isLocked ? 'bg-gray-900 grayscale opacity-90' : ''}
        ${isDamaged ? 'animate-shake' : ''}
        ${!isLocked ? 'cursor-pointer' : 'cursor-default'}
        ${shadowClass}
        overflow-hidden
      `}
    >
      <div className="absolute top-0 right-0 p-2 opacity-50 text-5xl font-black italic select-none pointer-events-none z-0">
        {brawler.class.substring(0, 1)}
      </div>

      {isLocked && (
        <div className="absolute inset-0 z-30 bg-black/70 flex flex-col items-center justify-center backdrop-blur-[2px]">
          <div className="mb-2 text-gray-400">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          {onBuy && (
             <button
                onClick={canBuy ? onBuy : undefined}
                className={`
                   flex items-center gap-1 px-4 py-2 rounded-full font-bold text-sm shadow-lg transition-all
                   ${canBuy ? 'bg-yellow-500 hover:bg-yellow-400 text-black hover:scale-105 active:scale-95 cursor-pointer' : 'bg-gray-700 text-gray-400 cursor-not-allowed'}
                `}
             >
                <span className="text-xs">$</span>
                {brawler.price.toLocaleString()}
             </button>
          )}
          {!onBuy && (
              <span className="text-yellow-500 font-bold text-xl">${brawler.price.toLocaleString()}</span>
          )}
        </div>
      )}

      {/* Selected Indicator */}
      {isSelected && (
        <div className="absolute top-2 left-2 z-20 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-lg animate-pulse">
            PICKED!
        </div>
      )}

      <div className="flex flex-col items-center z-10 relative">
        <div className={`w-20 h-20 rounded-lg border-2 ${borderColor} overflow-hidden mb-2 bg-black`}>
          <img src={brawler.avatarUrl} alt={brawler.name} className="w-full h-full object-cover" />
        </div>
        
        <h3 className={`text-lg font-bold text-center brawl-font text-outline leading-none mb-1 ${isLocked ? 'text-gray-400' : rarityStyle.color}`}>
            {brawler.name}
        </h3>
        
        {!showHealthBar && (
            <span className={`text-[10px] uppercase font-bold tracking-widest mb-2 px-2 py-0.5 rounded bg-black/40 ${rarityStyle.color}`}>
                {rarityStyle.label}
            </span>
        )}

        {showHealthBar && (
          <div className="w-full space-y-1 mt-1">
            <div className="relative w-full h-4 bg-gray-900 rounded-full border border-gray-600 overflow-hidden">
              <div 
                className={`h-full transition-all duration-500 ease-out ${isPlayer ? 'bg-green-500' : 'bg-red-500'}`}
                style={{ width: `${hpPercent}%` }}
              />
              <span className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white shadow-black drop-shadow-md">
                {brawler.hp} / {brawler.maxHp}
              </span>
            </div>
            
            {/* Super Bar */}
            <div className="relative w-full h-2 bg-gray-900 rounded-full border border-gray-600 overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ease-out ${superPercent >= 100 ? 'bg-yellow-400 animate-pulse' : 'bg-blue-400'}`}
                style={{ width: `${superPercent}%` }}
              />
            </div>
          </div>
        )}

        {!showHealthBar && (
          <div className="grid grid-cols-2 gap-1 w-full text-xs mt-1">
            <div className={`p-1 rounded text-center ${isLocked ? 'bg-gray-800/50 text-gray-500' : 'bg-gray-800'}`}>
              <span className={`block font-bold text-[10px] ${isLocked ? 'text-gray-600' : 'text-red-400'}`}>ATK</span>
              {brawler.attack}
            </div>
             <div className={`p-1 rounded text-center ${isLocked ? 'bg-gray-800/50 text-gray-500' : 'bg-gray-800'}`}>
              <span className={`block font-bold text-[10px] ${isLocked ? 'text-gray-600' : 'text-green-400'}`}>HP</span>
              {brawler.maxHp}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrawlerCard;
