<script>
    export let style = ''
</script>

<div {style} class="gradient-card">
    <slot />
</div>

<style>
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .gradient-card {
        align-self: center;

        background: linear-gradient(
            100deg,
            rgba(var(--c1, 90, 57, 246), var(--opacity, 1)) 0%,
            rgba(var(--c2, 211, 0, 255), var(--opacity, 1)) 59%,
            rgba(var(--c3, 250, 29, 165), var(--opacity, 1)) 88%
        );
        backdrop-filter: blur(24px);
        background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        max-width: 95%;
        width: 80vw;
        height: max-content;
        border: 2px solid rgba(var(--text-color), 0.5);
        border-radius: 0.8rem;
        box-shadow: 1px 1px 24px -3px rgba(var(--c2, 211, 0, 255), 0.7);
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        transition: all 0.5s ease-in-out;
        color: rgb(var(--text-color));
    }

    @media screen and (min-width: 640px) {
        .gradient-card {
            max-width: 70%;
        }
    }
</style>
