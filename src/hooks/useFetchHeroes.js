import { useEffect, useState } from 'react'
import { fetchHeroes } from '../heroes/helpers/fetchHeroes';


export const useFetchHeroes = () => {

  const [heroes, setHeroes] = useState([]);

  const getHeroes = async () => {
    const newHeroes = await fetchHeroes();
    setHeroes(newHeroes);
  }

  useEffect(() => {
    getHeroes()
  }, [])


  return heroes
}