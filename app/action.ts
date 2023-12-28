'use server';

export async function fetchAnime(pageNumber:number) {
    const res=await fetch(`https://shikimori.one/api/animes?page=${pageNumber}&limit=12&order=popularity`);
    const data=await res.json();
    // console.log(data)
    return data;
}