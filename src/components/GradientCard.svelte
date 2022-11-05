<div class="gradient-card">
    <slot></slot>
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
        background: linear-gradient(100deg, rgba(90,57,246,1) 0%, rgba(211,0,255,1) 59%, rgb(250, 29, 165) 88%);
	    background-size: 400% 400%;
        animation: gradient 10s ease infinite;
        max-width: 24rem;
        max-height: 14rem;
        width: 80vw;
        height: 80vh;
        border-radius: .8rem;
        box-shadow: 1px 1px 24px -3px rgba(186, 12, 253, 0.7);
        display: grid;
        place-items: center;
        transition: all 0.5s ease-in-out;
    }
</style>