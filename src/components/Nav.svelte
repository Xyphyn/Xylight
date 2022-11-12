<script>
    // @ts-nocheck
    import Link from './Link.svelte'
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
</script>

<nav class="nav-container">
    <Link href="/">HOME</Link>
    <Link href="/projects">PROJECTS</Link>
    <Link href="/about">ABOUT</Link>
    <Link
        onclick={() => {
            const r = document.querySelector(':root')
            const rs = getComputedStyle(r)
            const txt = rs.getPropertyValue('--text-color')
            const bg = rs.getPropertyValue('--background-color')
            const shadow = rs.getPropertyValue('--shadow')
            if (shadow == '20, 25, 20') {
                r.style.setProperty('--shadow', '0, 0, 0')
            } else {
                r.style.setProperty('--shadow', '20, 25, 20')
            }
            r.style.setProperty('--text-color', bg)
            r.style.setProperty('--background-color', txt)
        }}
        class=""
    >
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
