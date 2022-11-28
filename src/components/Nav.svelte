<script lang="ts">
    import Link from './Link.svelte'
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
    import { theme } from '../stores'

    const toggleDarkTheme = () => {
        if ($theme == 'light') {
            theme.set('dark')
        } else {
            theme.set('light')
        }
    }
</script>

<nav class="nav-container">
    <Link href="/">HOME</Link>
    <Link href="/projects">PROJECTS</Link>
    <Link href="/about">ABOUT</Link>
    <Link href="/blog">BLOG</Link>
    <Link onclick={toggleDarkTheme} href="">
        <Fa icon={faMoon} style="width: 1rem; height: 1rem;" />
    </Link>
</nav>

<style>
    .nav-container {
        display: flex;
        width: min-content;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        margin-bottom: 1rem;
        width: 100vw;
        z-index: 9999;
    }

    @media screen and (min-width: 640px) {
        .nav-container {
            flex-direction: column;
            height: 100vh;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-top: 0rem;
            margin-bottom: 0rem;
            align-items: flex-start;
            width: 8rem;
            position: fixed;
        }
    }
</style>
