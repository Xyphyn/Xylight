// @ts-nocheck

import { supabase } from '../../../../supabaseClient.js'
import { error as svelteError } from '@sveltejs/kit'

export async function GET({ params }) {
    const { data, error } = await supabase
        .from('blogposts')
        .select('*')
        .eq('title', params.slug)

    if (error) {
        console.log(error)
    }

    if (data[0]) {
        return new Response(JSON.stringify(data[0]))
    } else {
        throw svelteError(404, 'Not found')
    }
}
