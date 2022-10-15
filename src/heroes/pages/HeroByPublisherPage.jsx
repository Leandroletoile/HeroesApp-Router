import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { HeroList } from '../components/HeroList'
import { useDispatch, useSelector } from 'react-redux';
import { startAllHeroes } from '../../store/heroes/thunks'
import { getHeroReduxByPublisher, getHeroReduxByName, getHeroReduxById } from '../../store/heroes/heroSlice'
import { LoadingPages } from '../components/LoadingPages';


export const HeroByPublisherPage = () => {


  const { publisher } = useParams();

  if (publisher > 0) {
    publisher === publisher
  } else {
    publisher == 'Marvel%20Comics'
  }

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startAllHeroes())
    dispatch(getHeroReduxByPublisher(publisher))
    dispatch(getHeroReduxByName('Super'))
  }, [publisher])

  const { heroRedux } = useSelector(state => state.heroes)

  useEffect(() => {
    dispatch(getHeroReduxById(1))
  }, [heroRedux])


  if (heroRedux.length === 0) return <LoadingPages />


  return (
    <>


      {/* <h1 className='text-center fuente mt-4 bgMove' ><span className='borderBlack'>{publisher}</span></h1>
      <hr /> */}

      <HeroList publisher={publisher} />

    </>
  )
}
