<script>
    // @ts-nocheck

    import Link from '../components/Link.svelte'
    import Nav from '../components/Nav.svelte'
    import '../style/global.css'
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
    import { navigating } from '$app/stores'

    let animating
    /** @type {NodeJS.Timeout}*/
    let timeout

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

<Nav />
<slot />
