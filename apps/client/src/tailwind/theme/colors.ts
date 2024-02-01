import tailwindcssColors from 'tailwindcss/colors'

export const colors = {
    primary: {
        darkest: "#415a99",
        dark: "#5778cc",
        DEFAULT: "#6d96ff",
        light: "#8aabff",
        lightest: "#a7c0ff"
    },
    secondary: {
        darkest: "#975f46",
        dark: "#c97e5e",
        DEFAULT: "#fdb191",
        light: "#fdc5ac",
        lightest: "#fdd8c8"
    },

    dark: {
        darkest: '#282828',
        dark: '#383838',
        DEFAULT: '#484848',
        light: '#595959',
        lightest: '#686868',
    },
    light: {
        darkest: '#D0D0D0',
        dark: '#D6D6D6',
        DEFAULT: '#E2E2E2',
        light: '#E6E6E6',
        lightest: '#F2F2F2',
    },

    success: {
        darkest: tailwindcssColors.emerald['700'],
        dark: tailwindcssColors.emerald['600'],
        DEFAULT: tailwindcssColors.emerald['500'],
        light: tailwindcssColors.emerald['400'],
        lightest: tailwindcssColors.emerald['700'],
    },

    warning: {
        darkest: tailwindcssColors.amber['700'],
        dark: tailwindcssColors.amber['600'],
        DEFAULT: tailwindcssColors.amber['500'],
        light: tailwindcssColors.amber['400'],
        lightest: tailwindcssColors.amber['700'],
    },
    
    error: {
        darkest: tailwindcssColors.red['700'],
        dark: tailwindcssColors.red['600'],
        DEFAULT: tailwindcssColors.red['500'],
        light: tailwindcssColors.red['400'],
        lightest: tailwindcssColors.red['700'],
    },
}
