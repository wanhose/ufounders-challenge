const theme = {
  colors: {
    secondaryGreen: '#7fba7a',
    textActive: '#11142d',
    trench05: '#f2f3f4',
    trench100: '#101b29',
    trench20: '#ced1d4',
    trench30: '#a3abb5',
    trench50: '#858b94',
    trenchWhite: '#ffffff',
    ufounders100: '#e93256',
    ufounders120: '#d6284a',
    ufounders80: '#e55373',
    ufounders20: '#f8d4dc',
  },
  fonts: {
    inter: 'Inter',
    poppins: 'Poppins',
  },
  shadows: {
    glowRed: '0 0.25rem 1.25rem rgba(255, 44, 85, 0.2)',
  },
  weights: {
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export default theme;

export const colors = Object.keys(theme.colors);

export type Color = keyof typeof theme.colors;

export type Theme = typeof theme;
