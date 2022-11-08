<script>
    // @ts-nocheck
    import Link from './Link.svelte'
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
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            class="icon"
        >
            <path
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
            />
        </svg>
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
    }

    @media screen and (min-width: 480px) {
        .nav-container {
            flex-direction: column;
            height: 100vh;
            margin-left: 1rem;
            margin-right: 1rem;
            margin-top: 0rem;
            margin-bottom: 0rem;
            align-items: flex-start;
            width: 8rem;
        }
    }

    .icon {
        width: 1rem;
        height: 1rem;
        fill: rgb(var(--text-color));
    }
</style>
