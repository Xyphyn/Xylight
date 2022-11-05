<script lang="javascript">
    // @ts-nocheck

    import Link from "../components/Link.svelte"
    import GradientCard from "../components/GradientCard.svelte";

    
        if (typeof window !== 'undefined') {
            // const canvas = document.getElementById('bg')
            // /** @type {CanvasRenderingContext2D} */
            // const ctx = canvas?.getContext('2d')
    
            // const r = document.querySelector(':root')
            // const colors = [0xff0000, 0x00ff00, 0x0000ff]
    
        }

        const cl = () => {
        }
</script>

<div class="square-container">
   <GradientCard>
        <p class="type">
            I'm James. I develop primarily in Java and JavaScript, and I'm learning new languages such as Kotlin. You can see what I've made <Link href="/projects">here.</Link>
        </p>
    </GradientCard>
</div>

<style>

    p {
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;
    }

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

    @keyframes square-anim {
        0% {
            opacity: 0%;
            transform: translateY(-5%);
        }
        100% {
            opacity: 100%;
            transform: translateY(0%);
        }
    }

    .square-container {
        display: grid;
        place-items: center;
        width: 100%;
        animation-name: square-anim;
        animation-duration: 0.5s;
        animation-timing-function: ease-out;
    }
</style>

