import React from 'react'

export const fetchHeroes = async () => {

    const url = `https://akabab.github.io/superhero-api/api/all.json`

    const resp = await fetch(url);

    const data = await resp.json()

    const heroes = await data.map(hero => (
        {
            id: hero.id,
            slug: hero.slug,
            name: hero.name,
            alterego: hero.biography.fullName,
            publisher: hero.biography.publisher,
            imgurl: hero.images.md,
            appearance: hero.biography.firstAppearance,
            powerstats: hero.powerstats
        }
    ))

    return heroes;
}
