export const COLORS = {
  // Azules del dragón
  dragonBlue: '#1B4F72',
  steel: '#2E86AB',
  iceBlue: '#5DADE2',
  deepOcean: '#0A1628',

  // Fuego / acento
  ember: '#C0392B',
  flame: '#E67E22',
  lava: '#F39C12',
  fireGlow: '#FF6B35',

  // Fondos oscuros
  darkVoid: '#050B14',
  darkSmoke: '#0A0F1E',
  darkCard: '#0D1526',
  darkBorder: '#1A2540',

  // Texto
  textPrimary: '#F0F4FF',
  textSecondary: '#8899BB',
  textMuted: '#4A5A7A',
} as const;

export const FONTS = {
  display: "'Cinzel', serif",         // Títulos épicos (DRACARY)
  tech: "'Exo 2', sans-serif",         // Tech/subtítulos (SOFT, UI)
  body: "'Exo 2', sans-serif",
} as const;

export const GRADIENTS = {
  fire: 'linear-gradient(135deg, #C0392B 0%, #E67E22 50%, #F39C12 100%)',
  dragonBlue: 'linear-gradient(135deg, #0A1628 0%, #1B4F72 50%, #2E86AB 100%)',
  darkBg: 'linear-gradient(180deg, #050B14 0%, #0A0F1E 100%)',
  glowBlue: 'radial-gradient(ellipse at center, rgba(46,134,171,0.3) 0%, transparent 70%)',
  glowFire: 'radial-gradient(ellipse at center, rgba(255,107,53,0.4) 0%, transparent 70%)',
} as const;

export const ANIMATION = {
  introDuration: 4500,   // ms total del intro
  easeOut: [0.16, 1, 0.3, 1],
  easeInOut: [0.87, 0, 0.13, 1],
} as const;