import React, { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCounter } from '../../hooks/useCounter'
import { ButtonsPagination } from './ButtonsPagination'
import { HeroCard } from './HeroCard'
import { getHeroReduxByPublisher } from '../../store/heroes/heroSlice'
import { LoadingPages } from './LoadingPages'

export const HeroList = ({ publisher }) => {

  const dispatch = useDispatch()

  const { heroRedux } = useSelector(state => state.heroes)

  const { increment, decrement, counter, setCounter } = useCounter()


  useEffect(() => {

    dispatch(getHeroReduxByPublisher(publisher))

    setCounter(1)

  }, [publisher, heroRedux])


  const { heroReduxByPublisher } = useSelector(state => state.heroes)


  const maxPerPage = 18
  let maxPages = heroReduxByPublisher.length / maxPerPage

  const [show, setShow] = useState(true)

  useEffect(() => {

    if (counter === Math.ceil(maxPages)) {
      setShow(false)
    } else if (counter <= Math.ceil(maxPages)) {
      setShow(true)
    }

  }, [publisher, counter, maxPages])


  const heroPublisherPagination = heroReduxByPublisher.slice((counter - 1) * maxPerPage, (counter - 1) * maxPerPage + maxPerPage)


  if (heroReduxByPublisher.length === 0) return <LoadingPages />
  return (
    <div className="container">


      <ButtonsPagination publisher={publisher} increment={increment} decrement={decrement} show={show} counter={counter} />


      <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3'>

        {
          heroPublisherPagination.map(hero => (
            <HeroCard key={hero.id} {...hero} setCounter={setCounter} counter={counter} />
          ))
        }

      </div>

    </div>
  )
}
