<script lang="javascript">
    // @ts-nocheck

    import Link from "../components/Link.svelte"
    import GradientCard from "../components/GradientCard.svelte";
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
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(.17,.67,.38,.96);
    }
</style>

