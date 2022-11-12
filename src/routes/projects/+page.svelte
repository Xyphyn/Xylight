<script>
    import Link from '../../components/Link.svelte'
</script>

<title>Projects</title>
<div class="container">
    <div class="card neptune-card">
        <h1 class="card-title">
            <Link href="https://github.com/Xyphyn/Neptune">Neptune</Link>
        </h1>
        <p>
            <img
                src="/content/typescript.png"
                class="icon"
                alt="Typescript Logo"
            />
            <img
                src="/content/discord.js.png"
                class="icon"
                alt="Discord.JS logo"
            />
        </p>
    </div>
    <div class="card xymc-card">
        <h1 class="card-title">
            <Link href="https://github.com/Xyphyn/XyPVP" style="color: inherit;"
                >XyPVP</Link
            >
        </h1>
        <p>
            <img src="/content/java.png" class="icon" alt="Java Logo" />
        </p>
    </div>
    <div class="card website-card">
        <h1 class="card-title">
            <Link
                href="https://github.com/Xyphyn/Xylight"
                style="color: inherit;">This website</Link
            >
        </h1>
        <p>
            <img src="/content/svelte.png" class="icon" alt="Svelte Logo" />

            <img
                src="/content/javascript.png"
                class="icon"
                alt="JavaScript Logo"
            />
        </p>
    </div>
</div>

<style>
    .icon {
        max-width: 2rem;
        max-height: 2rem;
        width: 100%;
        height: 100%;
        image-rendering: auto;
    }

    .card-title {
        position: absolute;
        margin: 2rem;
        color: white;
        font-weight: 800;
        font-size: 1.5rem;
    }

    .card {
        position: relative;
        background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0) 20%,
                rgba(0, 0, 0, 0.6)
            ),
            url('https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg');
        max-width: 24rem;
        max-height: 20rem;
        width: 80vw;
        height: 60vw;
        border-radius: 1rem;
        transition: all cubic-bezier(0.17, 0.67, 0.38, 0.96) 0.3s;
        transform: perspective(60rem) rotateY(30deg);

        box-shadow: rgba(var(--shadow), 0.65) 0px 0px 43px -12px;
    }

    .card:hover {
        transform: rotateY(0deg) perspective(50em) scale(120%);
        z-index: 10;
    }

    .card > p {
        opacity: 0%;
        position: absolute;
        text-align: left;
        bottom: 1.5rem;
        transition: all 0.3s ease-in-out;
    }

    .card:hover > p {
        opacity: 100%;
        color: rgb(var(--text-color));
    }

    .neptune-card {
        background: url('https://camo.githubusercontent.com/e20948ea10cf83c8577bf86f74d00f9b76b04fc313e4bd67ea464f0f1a0921e0/68747470733a2f2f692e696d6775722e636f6d2f6e6942744b4c592e706e67'),
            linear-gradient(
                to top,
                rgb(var(--background-color)) 20%,
                rgb(var(--background-color))
            );
        background-size: 100%;
        background-position-y: 50%;
        background-repeat: no-repeat;
    }

    .neptune-card > h1:nth-child(1) {
        color: rgb(var(--text-color));
    }

    .xymc-card {
        background: url('/content/xymc.webp'),
            linear-gradient(
                to top,
                rgb(var(--background-color)) 20%,
                rgb(var(--background-color))
            );
        background-size: 150%;
        background-position-y: 50%;
        background-repeat: no-repeat;
    }

    .website-card {
        background: url('/content/website.webp'),
            linear-gradient(
                to top,
                rgb(var(--background-color)) 20%,
                rgb(var(--background-color))
            );
        background-size: 175%;
        background-position-y: 50%;
        background-repeat: no-repeat;
    }

    p {
        padding-left: 2rem;
        padding-right: 2rem;
        text-align: center;
        color: rgb(var(--text-color));
    }

    .container {
        display: grid;
        place-items: center;
        grid-template-rows: repeat(6, 1fr);
        grid-template-columns: none;
        width: 100%;
        height: 100vh;
        gap: 1rem;
        overflow-x: hidden;
        animation-name: square-anim;
        animation-duration: 0.4s;
        animation-timing-function: cubic-bezier(0.17, 0.67, 0.38, 0.96);
    }

    @media screen and (min-width: 640px) {
        .container > div:nth-child(1) {
            position: relative;
            left: 10rem;
        }

        .container > div:nth-child(3) {
            position: relative;
            right: 10rem;
        }

        .container {
            grid-template-columns: repeat(3, 33%);
            grid-template-rows: none;
        }
    }
</style>
