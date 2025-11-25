
export enum BrawlerClass {
  DAMAGE_DEALER = 'Damage Dealer',
  TANK = 'Tank',
  MARKSMAN = 'Marksman',
  SUPPORT = 'Support',
  ASSASSIN = 'Assassin',
  CONTROLLER = 'Controller',
  ARTILLERY = 'Artillery'
}

export enum BrawlerRarity {
  COMMON = 'Common',
  RARE = 'Rare',
  SUPER_RARE = 'Super Rare',
  EPIC = 'Epic',
  MYTHIC = 'Mythic',
  LEGENDARY = 'Legendary'
}

export interface Brawler {
  id: string;
  name: string;
  class: BrawlerClass;
  rarity: BrawlerRarity;
  hp: number;
  maxHp: number;
  attack: number;
  superName: string;
  superDamage: number; // Or healing amount
  superDescription: string;
  superCharge: number; // Current charge 0-100
  superChargeRate: number; // How much charge per hit
  avatarUrl: string;
  price: number; // Cost to unlock
}

export interface BrawlerUpgrade {
  level: number;
  extraHp: number;
  extraAttack: number;
}

export interface BoxTier {
  id: string;
  name: string;
  cost: number;
  color: string;
  icon: string;
  minCoins: number;
  maxCoins: number;
  brawlerChance: number; // 0.0 to 1.0
}

export interface GameState {
  status: 'MENU' | 'SELECT_CHARACTER' | 'BATTLE' | 'VICTORY' | 'DEFEAT' | 'SHOP' | 'BOX_REVEAL' | 'BLACKSMITH';
  player: Brawler | null;
  enemy: Brawler | null;
  turn: 'PLAYER' | 'ENEMY';
  log: LogEntry[];
  commentary: string; // AI Generated commentary
  wins: number;
  coins: number;
  lastReward: number;
  unlockedBrawlerIds: string[]; // IDs of characters owned
  brawlerUpgrades: { [key: string]: BrawlerUpgrade }; // Map of brawler ID to upgrades
  potions: number; // Quantity of healing potions
}

export interface LogEntry {
  id: number;
  text: string;
  type: 'info' | 'damage' | 'heal' | 'super';
}