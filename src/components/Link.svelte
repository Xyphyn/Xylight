<script lang="ts">
    export let href = ''
    export let style = ''
    export let onclick = () => {}
    export let button = false
</script>

{#if button}
    <button {style} class="link" on:click={onclick}><slot /></button>
{:else}
    <a {href} {style} class="link" on:click={onclick}><slot /></a>
{/if}

<style>
    .link {
        transition: all 150ms;
        padding: 0.5rem 0.65rem;
        background-color: transparent;
        text-decoration: none;
        color: rgb(var(--text-color));
        background: linear-gradient(
                90deg,
                rgb(var(--text-color)) 0%,
                rgb(var(--text-color)) 100%
            )
            0 100% no-repeat;

        background-size: 100% 0%;
        transition: background-size 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
        border: 0px;
        font: inherit;
    }

    .link:hover {
        background-size: 100% 100%;
        color: rgb(var(--background-color));
        cursor: pointer;
    }
</style>
