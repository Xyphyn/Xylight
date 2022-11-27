<script lang="ts">
    import GradientCard from '../../../components/GradientCard.svelte'
    import SvelteMarkdown from 'svelte-markdown'
    import LoadingCard from '../../../components/LoadingCard.svelte'
    import BackgroundCard from '../../../components/BackgroundCard.svelte'
    import SimpleLink from '../../../components/SimpleLink.svelte'
    import PrettyDate from '../../../components/PrettyDate.svelte'

    export let data: any
    async function fetchPost() {
        const response = await self.fetch(`/api/blog/${data.id}`)
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
        <BackgroundCard --text-color="255, 255, 255">
            <div class="content">
                <SvelteMarkdown
                    source={post.content}
                    renderers={{ link: SimpleLink }}
                />
            </div>
            <hr />
            <p class="footer">
                <PrettyDate unformattedDate={post.created_at} />
            </p>
        </BackgroundCard>
    {:catch error}
        <BackgroundCard --text-color="255, 255, 255">
            <p class="centered">There was an error fetching the content.</p>
            <code>{error}</code>
        </BackgroundCard>
    {/await}
</div>

<style>
    hr {
        color: rgba(var(--text-color), 0.2);
        width: 90%;
    }

    .footer {
        padding: 1rem;
        color: rgba(var(--text-color), 0.7);
        font-size: 16px;
    }

    .container {
        display: grid;
        place-items: center;
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

    .content {
        padding: 1rem;
    }

    .centered {
        align-self: center;
    }
</style>
