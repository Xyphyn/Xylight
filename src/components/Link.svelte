<script>
    /**
     * @type {string}
     */
    export let href

    /**
     * @type {string}
     */
    let clazz = ''
    export { clazz as class }
    export let onclick = () => {}
</script>

<a {href} class={`link ${clazz || ''}`} on:click={onclick}><slot /></a>

<style>
    .link {
        text-transform: uppercase;
        transition: all 150ms;
        padding: 0.5rem;
        padding-right: 0.65rem;
        padding-left: 0.65rem;
        background-color: transparent;
        text-decoration: none;
        color: rgb(var(--text-color));
        background-image: linear-gradient(
            90deg,
            rgb(var(--text-color)) 0%,
            rgb(var(--text-color)) 100%
        );
        background-size: 100% 0%;
        background-position: 0 100%;
        background-repeat: no-repeat;
        transition: background-size 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
    }

    .link:hover {
        background-size: 100% 100%;
        color: rgb(var(--background-color));
        cursor: pointer;
    }
</style>
