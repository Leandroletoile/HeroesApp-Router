import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getHeroReduxById } from '../../store/heroes/heroSlice'
import { LoadingPages } from '../components/LoadingPages';
import { ChartHero } from '../components/ChartHero'
import { useCounter } from '../../hooks/useCounter';


export const HeroPage = () => {


  const { heroId } = useParams();

  const dispatch = useDispatch()


  const { heroRedux, heroReduxById } = useSelector((state) => state.heroes);


  const  locVal  = useLocation()

  console.log('herpoage location' , locVal);

  const {counter , setCounter} = useCounter()

  useEffect(() => {
    setCounter(locVal.state)
  }, [])
  

  console.log('counter heropage' , counter);

  


  useEffect(() => {

    dispatch(getHeroReduxById(heroId))

  }, [heroRedux, heroId, heroReduxById])




    const navigate = useNavigate();
  

  const onNavigateBack = () => {

    
   navigate(-1,{
    state :{ 
      hi: 'holis'
    }
   })
    
  }



  if (heroReduxById.length === 0) return <LoadingPages />


  return (
    <div className="container-fluid maxWidth">

      <h2 className="card-title fuente mt-2 text-center mt-4 mb-4 borderBlack">{heroReduxById.name}</h2>

      <div className="row-fluid">
        <div className="card mb-3" >
          <div className="row g-0">
            <div className="col-md-4 animate__animated animate__fadeInLeft">
              <img src={heroReduxById.imgurl} alt={heroReduxById.fullName} className='img-thumbnail img-fluid rounded-start' />
            </div>


            <div className="col-md-5 d-flex justify-content-center align-items-center">

              <div className="card-body marginLeft">


                <ChartHero />

              </div>

            </div>

          </div>
        </div>
      </div>
      <button
        className='btn back cursorKap'
        onClick={onNavigateBack}
      >
        Back...
      </button>

    </div>



    // <h3>
    //   {heroReduxById.fullName}
    // </h3>
    // <ul className='list-group card list-group-flush'>
    //   <li className='list-group-item'>
    //     <b>Alter ego: </b>
    //     {heroReduxById.name}
    //   </li>
    //   <li className='list-group-item'>
    //     <b>Publisher: </b>
    //     {heroReduxById.publisher}
    //   </li>
    //   <li className='list-group-item'>
    //     <b>First Appareance ego: </b>
    //     {heroReduxById.appearance}
    //   </li>
    // </ul>
    // <p>{heroReduxById.characters}</p>
    // <button
    //   className='btn back'
    //   onClick={onNavigateBack}
    // >
    //   Back...
    // </button> 
  )
}
