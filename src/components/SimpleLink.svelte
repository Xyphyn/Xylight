<script>
    /**
     * @type {string}
     */
    export let href

    /**
     * @type {string}
     */
    export let style = ''
    export let onclick = () => {}
</script>

<a {href} {style} class="link" on:click={onclick}><slot /></a>

<style>
    .link {
        color: #8ea8ff;
        transition: color 0.3s;
    }

    .link:hover {
        color: #0077ff;
    }
</style>
