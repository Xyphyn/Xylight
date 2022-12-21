<script>
    // @ts-nocheck

    import Nav from '../components/Nav.svelte'
    import '../style/global.css'
    import NProgress from 'nprogress'
    import 'nprogress/nprogress.css'
    import { navigating } from '$app/stores'
    import { theme } from '../stores'

    // onMount(() => {
    //     const {
    //         data: { subscription }
    //     } = supabase.auth.onAuthStateChange(() => {
    //         invalidate('supabase:auth')
    //     })

    //     return () => {
    //         subscription.unsubscribe()
    //     }
    // })

    theme.subscribe(() => {
        if (typeof window != 'undefined') {
            const r = document.querySelector(':root')
            const rs = getComputedStyle(r)
            if ($theme == 'light') {
                r.style.setProperty('--text-color', '20, 20, 20')
                r.style.setProperty('--background-color', '240, 240, 240')
                r.style.setProperty('--shadow', '25, 25, 25')
            } else {
                r.style.setProperty('--text-color', '255, 255, 255')
                r.style.setProperty('--background-color', '20, 20, 20')
                r.style.setProperty('--shadow', '0, 0, 0')
            }
        }
    })

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
