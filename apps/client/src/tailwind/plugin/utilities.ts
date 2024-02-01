import plugin from "tailwindcss/plugin"

export const utilities = plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
        {
            tab: (value) => ({
                tabSize: value
            }),
        },
        { values: theme('tabSize') }
    )
})
