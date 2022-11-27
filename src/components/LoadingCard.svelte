<div class="gradient-card">
    <div style="width: 100%; height:100%;" />
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
        background: linear-gradient(
            104deg,
            rgba(var(--text-color), 0.1) 0%,
            rgba(var(--text-color), 0.3) 70%,
            rgba(var(--text-color), 0.1) 100%
        );
        background-size: 400% 400%;
        animation: gradient 1s ease infinite;
        max-width: 24rem;
        min-height: 14rem;
        width: 80vw;
        height: min-content;
        border: 2px solid rgba(var(--text-color), 0.5);
        border-radius: 0.8rem;
        box-shadow: 1px 1px 24px -3px rgba(var(--shadow), 0.7);
        display: flex;
        flex-direction: column;
        align-items: left;
        justify-content: center;
        transition: all 0.5s ease-in-out;
    }
</style>
