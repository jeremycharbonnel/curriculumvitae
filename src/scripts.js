document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        currentTheme: null,

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

        init() {
            this.initTheme()
        },
    }))
})
