<div class="gradient-card">
    <div style="width: 100%;"></div>
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
        background: linear-gradient(104deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.5) 70%, rgba(255,255,255,0.2) 100%);
	    background-size: 400% 400%;
        animation: gradient 1s ease infinite;
        max-width: 24rem;
        max-height: 14rem;
        width: 80%;
        height: 80%;
        border-radius: .8rem;
        box-shadow: 1px 1px 24px -3px rgba(0, 0, 0, 0.7);
        display: grid;
        place-items: center;
        transition: all 0.5s ease-in-out;
        pointer-events: none;
    }
</style>