<script lang="ts">
    import GradientCard from '$comp/GradientCard.svelte'
    import Link from '$comp/Link.svelte'

    // const login = async () => {
    //     const { user, session, error } = await supabase.auth.signInWithOAuth({
    //         provider: 'github',
    //         options: {
    //             redirectTo: '/'
    //         }
    //     })
    // }
</script>

<div class="container">
    <GradientCard --text-color="255, 255, 255">
        <div class="centered">
            <Link
                button={true}
                onclick={() => {}}
                --background-color="0, 0, 0"
                style="width: max-content;">Login</Link
            >
        </div>
    </GradientCard>
</div>

<style>
    .centered {
        align-self: center;
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
</style>
