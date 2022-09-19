import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startAllHeroes } from '../../store/heroes/thunks'
import { HeroList } from '../components/HeroList'
import { getAllPublishers } from '../helpers/getAllPublishers'


export const AllHeroesPage = () => {

    const dispatch = useDispatch()
 

    useEffect(() => {
      dispatch(startAllHeroes())
    }, [])
    
    const { heroRedux } = useSelector(state => state.heroes)

    const heroesWithHelper = getAllPublishers(heroRedux)

    console.log('tamos en al heroes pageee', heroesWithHelper);
    

    useEffect(() => {
      
        const heroesWithHelper = getAllPublishers(heroRedux)
    }, [heroRedux])
    

    console.log(heroRedux);
    console.log(heroesWithHelper);


    return (


        <>
            <h1> ALL HEROES PAGE  </h1>

            <HeroList publisher={heroesWithHelper} />

        </>

    )
}
