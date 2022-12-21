// @ts-nocheck

export const prerender = 'auto'

export async function load({ params }) {
    return { id: params.slug }
}
