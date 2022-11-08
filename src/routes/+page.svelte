<script lang="javascript">
    // @ts-nocheck

    import Link from '../components/Link.svelte'
    import GradientCard from '../components/GradientCard.svelte'
</script>

<div class="container">
    <GradientCard>
        <p class="type">
            I'm James. I develop primarily in Java and JavaScript, and I'm
            learning new languages such as Kotlin. You can see what I've made <Link
                href="/projects">here.</Link
            >
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

    .container {
        display: grid;
        place-items: center;
        width: 100%;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }
</style>
