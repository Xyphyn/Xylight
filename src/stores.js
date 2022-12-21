import { onMount } from 'svelte'
import { writable } from 'svelte/store'

export const theme = writable('theme')
if (typeof window != 'undefined') {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme != undefined) theme.set(storedTheme)
    theme.subscribe((value) => {
        localStorage.setItem('theme', value === 'dark' ? 'dark' : 'light')
    })
}
