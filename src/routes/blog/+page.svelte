<script>
    // @ts-nocheck
    import LoadingCard from '$comp/LoadingCard.svelte'
    import GradientCard from '$comp/GradientCard.svelte'
    import PrettyDate from '$comp/PrettyDate.svelte'
    import { goto } from '$app/navigation'
    async function fetchPost() {
        const response = await self.fetch(`/api/blog/posts`)

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
    {:then posts}
        {#each posts as post}
            <GradientCard --text-color="255, 255, 255">
                <div
                    class="preview"
                    on:click={() => goto(`/blog/${post.title}`)}
                    on:keydown={() => goto(`/blog/${post.title}`)}
                >
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                    <hr />
                    <p class="date">
                        <PrettyDate unformattedDate={post.created_at} /> • {post?.author}
                    </p>
                </div>
            </GradientCard>
        {/each}
    {:catch error}
        <GradientCard --text-color="255, 255, 255">
            <p class="centered">There was an error fetching the content.</p>
            <code>{error}</code>
        </GradientCard>
    {/await}
</div>

<style>
    .date {
        color: rgba(var(--text-color), 0.7);
        font-size: 16px;
    }

    .preview {
        align-self: center;
        text-align: center;
        width: 100%;
        height: 100%;
    }
    .preview:hover {
        cursor: pointer;
    }

    .container {
        display: grid;
        place-items: center;
        width: 100%;
        grid-auto-rows: minmax(min-content, max-content);
        gap: 1rem;
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

    .centered {
        align-self: center;
    }

    hr {
        color: rgba(var(--text-color), 0.2);
        width: 90%;
    }
</style>
