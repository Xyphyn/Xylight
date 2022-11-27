<script lang="ts">
    import GradientCard from '../../../components/GradientCard.svelte'
    import SvelteMarkdown from 'svelte-markdown'
    import LoadingCard from '../../../components/LoadingCard.svelte'
    import { onMount } from 'svelte'
    import { page } from '$app/stores'

    interface Post {
        id: Number
        created_at: Date
        content: String
        title: String
    }

    export let data
    async function fetchPost() {
        const response = await self.fetch(
            `https://beta.xylight.us/api/blog/${data.id}`
        )
        if (response.ok) {
            return response.json()
        }
    }

    let promise = Promise.resolve([])
    promise = fetchPost()
</script>

<div class="container">
    {#await promise}
        <LoadingCard />
    {:then post}
        <GradientCard --text-color="255, 255, 255">
            <SvelteMarkdown source={post.content} />
        </GradientCard>
    {/await}
</div>

<style>
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
</style>
