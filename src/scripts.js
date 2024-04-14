document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        currentTheme: null,
        currentYear: new Date().getFullYear(),
        currentAge:
            new Date(
                new Date().getTime() - new Date(1992, 2, 23).getTime(),
            ).getFullYear() - 1970,

        initTheme() {
            if (
                localStorage.theme === 'dark' ||
                (!('theme' in localStorage) &&
                    window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
                this.currentTheme = 'dark'
                document.documentElement.classList.add('dark')
            } else {
                this.currentTheme = 'light'
                document.documentElement.classList.remove('dark')
            }
        },

        setTheme(theme) {
            localStorage.theme = theme
            this.initTheme()
        },

        getCurrentXp() {
            return this.currentYear - 2014
        },

        init() {
            this.initTheme()
        },
    }))
})
