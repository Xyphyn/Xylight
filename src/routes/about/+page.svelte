<script>
    import GradientCard from '../../components/GradientCard.svelte'
    import ProgressBar from '../../components/ProgressBar.svelte'
    import Fa from 'svelte-fa/src/fa.svelte'
    import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
</script>

<title>About</title>
<div class="container">
    <GradientCard --text-color="255, 255, 255" style="">
        <img
            src="/content/HTML.png"
            alt="The HTML logo"
            class="logo card-item centered"
        />
        <p>
            I'm James, a developer.<br />
            I make things in Java, TypeScript, and more, and I'm currently learning
            Kotlin.
        </p>
        <div class="socials card-item centered">
            <Fa icon={faGithub} />
        </div>
    </GradientCard>
    <GradientCard --text-color="255, 255, 255">
        <h2>Skills</h2>
        <div class="bar-container">
            <p class="label">HTML/CSS</p>
            <ProgressBar progress={50} />
        </div>
        <div class="bar-container">
            <p class="label">JavaScript</p>
            <ProgressBar progress={90} />
        </div>
        <div class="bar-container">
            <p class="label">Java</p>
            <ProgressBar progress={70} />
        </div>
        <div class="bar-container">
            <p class="label">Kotlin</p>
            <ProgressBar progress={30} />
        </div>
        <div class="bar-container">
            <p class="label">Rust</p>
            <ProgressBar progress={5} />
        </div>
        <div class="bar-container" style="margin-bottom: 1rem;">
            <p class="label">Python</p>
            <ProgressBar progress={80} />
        </div>
    </GradientCard>
    <GradientCard --text-color="255, 255, 255">
        <p>
            I've been a dev for a while now, and can program in many languages.
            My favorite language currently is Kotlin, although it used to be
            Java <span class="parenthesis"
                >(I know, someone's favorite language being Java?)</span
            >. I plan to learn Rust in the future, but it's not very fun to use
            for me.
        </p>
    </GradientCard>
    <GradientCard --text-color="255, 255, 255">
        <p>
            If you're still reading this somehow, congratulations. You have
            quite a large attention span.
        </p>
    </GradientCard>
</div>

<style>
    h2 {
        padding-left: 1rem;
    }

    .centered {
        align-self: center;
    }

    .socials {
        font-size: 64px;
    }

    .card-item {
        margin: 1rem;
    }

    .logo {
        width: 4rem;
        height: auto;
        background-color: rgba(0, 0, 0, 0.5);
        border-radius: 0.5rem;
        padding: 0.25rem;
    }

    .bar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        margin-left: 1rem;
        margin-right: 1rem;
    }

    .container {
        display: grid;
        place-items: center;
        grid-auto-rows: minmax(min-content, max-content);
        gap: 1rem;
        width: 100%;
        height: 100%;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }

    @media screen and (min-width: 640px) {
        .container {
            padding-top: 1rem;
            padding-bottom: 1rem;
        }
    }

    p:not(.label) {
        margin: 2rem;
    }
</style>
