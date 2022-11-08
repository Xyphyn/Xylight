<script lang="javascript">
    // @ts-nocheck

    import Link from '../components/Link.svelte'
    import GradientCard from '../components/GradientCard.svelte'
</script>

<div class="container background">
    <GradientCard
        --opacity={0.55}
        --c1="3, 44, 252"
        --c2="78, 3, 252"
        --c3="140, 3, 252"
        --text-color="255, 255, 255"
    >
        <h1>Hi! 👋</h1>
        <p class="type">
            I'm James. I develop primarily in Java and JavaScript, and I'm
            learning new languages such as Kotlin. You can see what I've made <Link
                href="/projects">here.</Link
            >
        </p>
    </GradientCard>
</div>

<style lang="scss">
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
        height: 100vh;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }

    .background {
        background-image: url('/content/dark-background.webp');
        background-repeat: no-repeat;
        background-size: auto 100vh;
        background-position: 50% 50%;
    }

    @media screen and (min-width: 640px) {
        .background {
            background-position: calc(50% + 16rem) 100%;
            background-size: 100% auto;
        }

        .container {
            height: 100vh;
        }
    }
</style>
