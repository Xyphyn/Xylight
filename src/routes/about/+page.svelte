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
        <h1>Skills</h1>
        <div class="bar-container">
            <p>Web Design</p>
            <ProgressBar progress={50} />
        </div>
    </GradientCard>
</div>

<style>
    .bar-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .container {
        display: grid;
        place-items: center;
        width: 100%;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }

    p {
        margin: 2rem;
    }
</style>
