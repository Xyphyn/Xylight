import { redirect } from '@sveltejs/kit'

export async function load() {
    throw redirect(302, 'https://top.gg/bot/977240559641038921')
}
