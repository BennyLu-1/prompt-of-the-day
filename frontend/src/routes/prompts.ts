import type { EndpointOutput } from '@sveltejs/kit';
    
export async function get(): Promise<EndpointOutput> {
    const res = await fetch('http://localhost:1337/api/prompts?populate=author');
    const data = await res.json();

    return { body: data };
}