/**
 * Centralized Design System Colors for Frauenzeit Brühl
 * Brand primary pink is unified to standard Tailwind pink-700 (#be185d).
 */

export const colors = {
  // Primary Brand Color (Tailwind pink-700)
  primary: {
    name: 'pink-700',
    hex: '#be185d',
    hexHover: '#9d174d', // pink-800
    hexLight: '#fdf2f8', // pink-50
    classes: {
      text: 'text-pink-700',
      textHover: 'hover:text-pink-800',
      bg: 'bg-pink-700',
      bgHover: 'hover:bg-pink-800',
      border: 'border-pink-700',
      selection: 'selection:bg-pink-700 selection:text-white',
    },
  },
  // Neutral Warm Palette
  neutral: {
    pageBg: '#FCFBF9',
    sectionBg: '#FAF5F6',
    borderSoft: '#F0E6E8',
    borderAccent: '#E8D2D7',
    textPrimary: '#2B2326',
    textSecondary: '#5C4A4F',
    textMuted: '#735F64',
    textSubtle: '#826970',
  },
} as const;

export type Colors = typeof colors;
export default colors;
