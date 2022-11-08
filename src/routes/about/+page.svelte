<script>
    import GradientCard from '../../components/GradientCard.svelte'
    import ProgressBar from '../../components/ProgressBar.svelte'
</script>

<div class="container">
    <GradientCard>
        <p>
            I'm James, a developer.<br />
            I make things in Java, TypeScript, Kotlin, and more, and I'm currently
            learning Rust.
        </p>
    </GradientCard>
    <GradientCard>
        <h2>Skills</h2>
        <div class="bar-container">
            <p class="label">HTML/CSS</p>
            <ProgressBar progress={50} />
        </div>
        <div class="bar-container">
            <p class="label">JavaScript</p>
            <ProgressBar progress={85} />
        </div>
        <div class="bar-container">
            <p class="label">Java</p>
            <ProgressBar progress={70} />
        </div>
        <div class="bar-container">
            <p class="label">Kotlin</p>
            <ProgressBar progress={30} />
        </div>
        <div class="bar-container" style="margin-bottom: 1rem;">
            <p class="label">Rust</p>
            <ProgressBar progress={5} />
        </div>
    </GradientCard>
    <GradientCard>
        <p>
            This website is nowhere near finished. It will be updated soon with
            more info!
        </p>
    </GradientCard>
</div>

<style>
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
        margin-top: 1rem;
        margin-bottom: 1rem;
        gap: 1rem;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }

    p:not(.label) {
        margin: 2rem;
    }
</style>
