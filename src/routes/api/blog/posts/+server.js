// @ts-nocheck

import { supabase } from '../../../../supabaseClient.js'
import { error as svelteError } from '@sveltejs/kit'

export async function GET({ params }) {
    const { data, error } = await supabase
        .from('blogposts')
        .select('*')
        .order('id', { ascending: false })
        .limit(10)

    if (error) {
        console.log(error)
    }

    if (data) {
        return new Response(JSON.stringify(data))
    } else {
        throw svelteError(404, 'Not found')
    }
}
