<script>
    import GradientCard from '../../components/GradientCard.svelte'
    import ProgressBar from '../../components/ProgressBar.svelte'
</script>

<div class="container">
    <GradientCard --text-color="255, 255, 255">
        <img src="/content/HTML.png" alt="The HTML logo" class="logo" />
        <p>
            I'm James, a developer.<br />
            I make things in Java, TypeScript, and more, and I'm currently learning
            Kotlin.
        </p>
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
        width: 100%;
        height: 100%;
        gap: 2rem;
        margin-top: 1rem;
        margin-bottom: 1rem;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }

    p:not(.label) {
        margin: 2rem;
    }
</style>
