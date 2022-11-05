
<Nav />
<slot />

<style>
</style>

<script>
    import Link from '../components/Link.svelte';
    import Nav from '../components/Nav.svelte';
    import '../style/global.css'
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
    import { navigating } from '$app/stores'

    NProgress.configure({
        showSpinner: false
    })

    $: {
        if ($navigating) {
            NProgress.start()
        }
        if (!$navigating) {
            NProgress.done()
        }
    }
</script>