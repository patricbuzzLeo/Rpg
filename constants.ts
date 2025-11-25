
import { Brawler, BrawlerClass, BoxTier, BrawlerRarity } from './types';

export const DUPLICATE_COIN_REWARD = 200;

// Upgrade Constants
export const UPGRADE_BASE_COST = 100;
export const UPGRADE_COST_PER_LEVEL = 100;
export const HP_PER_UPGRADE = 200;
export const ATTACK_PER_UPGRADE = 50;

// Potion Constants
export const POTION_COST = 150;
export const POTION_HEAL_AMOUNT = 2000;

// Rarity Visuals
export const RARITY_INFO = {
  [BrawlerRarity.COMMON]: { 
    color: 'text-gray-400', 
    border: 'border-gray-400', 
    bg: 'bg-gray-800', 
    shadow: 'shadow-gray-500/50',
    label: 'COMMON'
  },
  [BrawlerRarity.RARE]: { 
    color: 'text-green-400', 
    border: 'border-green-400', 
    bg: 'bg-green-900', 
    shadow: 'shadow-green-500/50',
    label: 'RARE'
  },
  [BrawlerRarity.SUPER_RARE]: { 
    color: 'text-blue-400', 
    border: 'border-blue-400', 
    bg: 'bg-blue-900', 
    shadow: 'shadow-blue-500/50',
    label: 'SUPER RARE'
  },
  [BrawlerRarity.EPIC]: { 
    color: 'text-purple-400', 
    border: 'border-purple-400', 
    bg: 'bg-purple-900', 
    shadow: 'shadow-purple-500/50',
    label: 'EPIC'
  },
  [BrawlerRarity.MYTHIC]: { 
    color: 'text-red-500', 
    border: 'border-red-500', 
    bg: 'bg-red-900', 
    shadow: 'shadow-red-500/50',
    label: 'MYTHIC'
  },
  [BrawlerRarity.LEGENDARY]: { 
    color: 'text-yellow-400', 
    border: 'border-yellow-400', 
    bg: 'bg-yellow-900', 
    shadow: 'shadow-yellow-500/50',
    label: 'LEGENDARY'
  }
};

export const BRAWLERS: Brawler[] = [
  // COMMON (Start / Cheap)
  {
    id: 'shelly',
    name: 'Shelly',
    class: BrawlerClass.DAMAGE_DEALER,
    rarity: BrawlerRarity.COMMON,
    hp: 3800,
    maxHp: 3800,
    attack: 800,
    superName: 'Super Shell',
    superDamage: 1500,
    superDescription: 'Destroys cover and enemies.',
    superCharge: 0,
    superChargeRate: 25,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/0.png',
    price: 0
  },
  {
    id: 'nita',
    name: 'Nita',
    class: BrawlerClass.CONTROLLER,
    rarity: BrawlerRarity.COMMON,
    hp: 4000,
    maxHp: 4000,
    attack: 700,
    superName: 'Overbearing',
    superDamage: 1200,
    superDescription: 'Summons a spirit bear.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/1.png',
    price: 1000
  },
  {
    id: 'colt',
    name: 'Colt',
    class: BrawlerClass.DAMAGE_DEALER,
    rarity: BrawlerRarity.COMMON,
    hp: 2800,
    maxHp: 2800,
    attack: 900,
    superName: 'Bullet Storm',
    superDamage: 1800,
    superDescription: 'A long-range barrage of bullets.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/2.png',
    price: 1000
  },
  {
    id: 'bull',
    name: 'Bull',
    class: BrawlerClass.TANK,
    rarity: BrawlerRarity.COMMON,
    hp: 5000,
    maxHp: 5000,
    attack: 1000,
    superName: 'Bulldozer',
    superDamage: 1200,
    superDescription: 'Charges forward, knocking back enemies.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/3.png',
    price: 1000
  },

  // RARE
  {
    id: 'el_primo',
    name: 'El Primo',
    class: BrawlerClass.TANK,
    rarity: BrawlerRarity.RARE,
    hp: 6000,
    maxHp: 6000,
    attack: 800,
    superName: 'Flying Elbow Drop',
    superDamage: 1600,
    superDescription: 'Leaps high and drops an elbow.',
    superCharge: 0,
    superChargeRate: 15,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/6.png',
    price: 2500
  },
  {
    id: 'barley',
    name: 'Barley',
    class: BrawlerClass.ARTILLERY,
    rarity: BrawlerRarity.RARE,
    hp: 2400,
    maxHp: 2400,
    attack: 700,
    superName: 'Last Call',
    superDamage: 1400,
    superDescription: 'Hurls bottles creating a sea of fire.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/7.png',
    price: 2500
  },
  {
    id: 'poco',
    name: 'Poco',
    class: BrawlerClass.SUPPORT,
    rarity: BrawlerRarity.RARE,
    hp: 3800,
    maxHp: 3800,
    attack: 600,
    superName: 'Encore',
    superDamage: -2000, // Negative for healing
    superDescription: 'Heals himself and teammates.',
    superCharge: 0,
    superChargeRate: 25,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/8.png',
    price: 2500
  },
  {
    id: 'brock',
    name: 'Brock',
    class: BrawlerClass.MARKSMAN,
    rarity: BrawlerRarity.RARE,
    hp: 2800,
    maxHp: 2800,
    attack: 1100,
    superName: 'Rocket Rain',
    superDamage: 2000,
    superDescription: 'Fires a barrage of rockets.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/4.png',
    price: 2500
  },

  // SUPER RARE
  {
    id: 'jessie',
    name: 'Jessie',
    class: BrawlerClass.CONTROLLER,
    rarity: BrawlerRarity.SUPER_RARE,
    hp: 3000,
    maxHp: 3000,
    attack: 820,
    superName: 'Scrappy!',
    superDamage: 1200,
    superDescription: 'Deploys a cute but deadly turret.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/5.png',
    price: 5000
  },
  {
    id: 'dynamike',
    name: 'Dynamike',
    class: BrawlerClass.ARTILLERY,
    rarity: BrawlerRarity.SUPER_RARE,
    hp: 2800,
    maxHp: 2800,
    attack: 1600,
    superName: 'Big Barrel o\' Boom',
    superDamage: 2200,
    superDescription: 'Throws a big barrel of dynamite.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/9.png',
    price: 5000
  },
  {
    id: 'rico',
    name: 'Rico',
    class: BrawlerClass.DAMAGE_DEALER,
    rarity: BrawlerRarity.SUPER_RARE,
    hp: 2600,
    maxHp: 2600,
    attack: 900,
    superName: 'Trick Shot',
    superDamage: 1800,
    superDescription: 'Bullets bounce off walls.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/12.png',
    price: 5000
  },

  // EPIC
  {
    id: 'piper',
    name: 'Piper',
    class: BrawlerClass.MARKSMAN,
    rarity: BrawlerRarity.EPIC,
    hp: 2400,
    maxHp: 2400,
    attack: 1520,
    superName: 'Poppin\'',
    superDamage: 1800,
    superDescription: 'Jumps away leaving grenades behind.',
    superCharge: 0,
    superChargeRate: 25,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/15.png',
    price: 10000
  },
  {
    id: 'frank',
    name: 'Frank',
    class: BrawlerClass.TANK,
    rarity: BrawlerRarity.EPIC,
    hp: 7000,
    maxHp: 7000,
    attack: 1200,
    superName: 'Stunning Blow',
    superDamage: 1200,
    superDescription: 'Stuns enemies with a hammer smash.',
    superCharge: 0,
    superChargeRate: 25,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/20.png',
    price: 10000
  },
  {
    id: 'bibi',
    name: 'Bibi',
    class: BrawlerClass.TANK,
    rarity: BrawlerRarity.EPIC,
    hp: 4400,
    maxHp: 4400,
    attack: 1300,
    superName: 'Spitball',
    superDamage: 1000,
    superDescription: 'Bats a bouncing bubble of gum.',
    superCharge: 0,
    superChargeRate: 25,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/26.png',
    price: 10000
  },

  // MYTHIC
  {
    id: 'mortis',
    name: 'Mortis',
    class: BrawlerClass.ASSASSIN,
    rarity: BrawlerRarity.MYTHIC,
    hp: 3800,
    maxHp: 3800,
    attack: 900,
    superName: 'Life Blood',
    superDamage: 900, // Also heals
    superDescription: 'Summons bats that damage and heal.',
    superCharge: 0,
    superChargeRate: 25,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/13.png',
    price: 25000
  },
  {
    id: 'tara',
    name: 'Tara',
    class: BrawlerClass.DAMAGE_DEALER,
    rarity: BrawlerRarity.MYTHIC,
    hp: 3400,
    maxHp: 3400,
    attack: 1000,
    superName: 'Gravity',
    superDamage: 1200,
    superDescription: 'Creates a black hole.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/14.png',
    price: 25000
  },

  // LEGENDARY
  {
    id: 'spike',
    name: 'Spike',
    class: BrawlerClass.DAMAGE_DEALER,
    rarity: BrawlerRarity.LEGENDARY,
    hp: 2400,
    maxHp: 2400,
    attack: 1200,
    superName: 'Stick Around!',
    superDamage: 1400,
    superDescription: 'Slows and damages enemies in area.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/16.png',
    price: 50000
  },
  {
    id: 'crow',
    name: 'Crow',
    class: BrawlerClass.ASSASSIN,
    rarity: BrawlerRarity.LEGENDARY,
    hp: 2400,
    maxHp: 2400,
    attack: 800,
    superName: 'Swoop',
    superDamage: 1000,
    superDescription: 'Jumps and throws poisoned daggers.',
    superCharge: 0,
    superChargeRate: 15,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/17.png',
    price: 50000
  },
  {
    id: 'leon',
    name: 'Leon',
    class: BrawlerClass.ASSASSIN,
    rarity: BrawlerRarity.LEGENDARY,
    hp: 3200,
    maxHp: 3200,
    attack: 1400,
    superName: 'Smoke Bomb',
    superDamage: 0, // Invisibility logic handled elsewhere or treated as buff
    superDescription: 'Becomes invisible for a short time.',
    superCharge: 0,
    superChargeRate: 20,
    avatarUrl: 'https://cdn.brawlify.com/brawlers/borders/21.png',
    price: 50000
  }
];

export const ENEMIES: Brawler[] = [
    ...BRAWLERS.filter(b => b.id !== 'shelly').map(b => ({...b, hp: Math.floor(b.hp * 1.2), maxHp: Math.floor(b.maxHp * 1.2), attack: Math.floor(b.attack * 0.8)}))
];

export const BOXES: BoxTier[] = [
    {
        id: 'brawl_box',
        name: 'Brawl Box',
        cost: 100,
        color: 'bg-blue-600',
        icon: '📦',
        minCoins: 10,
        maxCoins: 50,
        brawlerChance: 0.1
    },
    {
        id: 'big_box',
        name: 'Big Box',
        cost: 300,
        color: 'bg-purple-600',
        icon: '🎁',
        minCoins: 40,
        maxCoins: 120,
        brawlerChance: 0.25
    },
    {
        id: 'mega_box',
        name: 'Mega Box',
        cost: 800,
        color: 'bg-yellow-500',
        icon: '💎',
        minCoins: 150,
        maxCoins: 500,
        brawlerChance: 0.5
    }
];