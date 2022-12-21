<script>
    import { onMount } from 'svelte'
    import { supabase } from './supabaseClient'

    /** @type {import("@supabase/supabase-js").AuthSession | null} */
    let session

    onMount(() => {
        supabase.auth.getSession().then(({ data }) => {
            session = data.session
        })

        supabase.auth.onAuthStateChange((_event, _session) => {
            session = _session
        })
    })
</script>
