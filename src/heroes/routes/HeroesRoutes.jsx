import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui/components/NavBar'
import { HeroByPublisherPage } from '../pages/HeroByPublisherPage'
import { HeroPage } from '../pages/HeroPage'
import { SearchPage } from '../pages/SearchPage'


export const HeroesRoutes = () => {


  return (
    <>
      <Navbar />

      <div className="container">


        <Routes>

          <Route path='publisher/:publisher' element={<HeroByPublisherPage />} />

          <Route path='search' element={<SearchPage />} />

          <Route path='hero/:heroId' element={<HeroPage />} />

          <Route path='/*' element={<Navigate to='/publisher/Marvel%20Comics'/>} />

        </Routes>


      </div>
    </>
  )
}
{/* <Navigate to='/publisher/Marvel%20Comics' /> */}