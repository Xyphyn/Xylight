// @ts-nocheck

import { supabase } from '../../../supabaseClient.js'
import { error as svelteError } from '@sveltejs/kit'

export async function load({ params }) {
    return { id: params.slug }
}
