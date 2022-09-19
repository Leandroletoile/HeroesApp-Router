import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import queryString from 'query-string';
import { HeroCard } from "../components/HeroCard";
import { useDispatch, useSelector } from "react-redux";
import { getHeroReduxByName } from '../../store/heroes/heroSlice'
import { useState } from "react";


export const SearchPage = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const dispatch = useDispatch()


  const { q = '' } = queryString.parse(location.search);

  const { heroReduxByName } = useSelector(state => state.heroes)


  const [show, setShow] = useState(false)


  const { searchText, onInputChange } = useForm({
    searchText: q
  })


  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchText.trim().length <= 1) return;
    dispatch(getHeroReduxByName(searchText))

    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h2 className="text-center mt-4 fuente borderBlack">Search</h2>
      <hr />
      <div className="row">

        <form
          onSubmit={onSearchSubmit}
        >

          
          <input
            value={searchText}
            onChange={onInputChange}
            name="searchText"
            type="text"
            autoComplete="off"
            className="form-control mb-3" list="datalistOptions" id="exampleDataList" placeholder="Search your hero..." />
          <datalist id="datalistOptions">
            <option value="Superman" />
            <option value="Batman" />
            <option value="Wolverine" />
            <option value="Catwoman" />
            <option value="Spiderman" />
          </datalist>


          <button
            onClick={() => setShow(true)}
            className="btn back mt-1"> Search... </button>
        </form>


      </div>


      <div className="row d-flex justify-content-center align-items-center">
        <div className="maxWidth">
          <hr />

          <div
            className="alert alert-primary"
            style={{ display: q === '' ? '' : 'none' }}
          >
            Search a hero
          </div>

          {
            !heroReduxByName.length && q !== '' && (
              <div className="alert alert-danger">
                No hero with <b> {q} </b>
              </div>
            )
          }

          {
            show === true ? (
              heroReduxByName.map(hero => (
                <HeroCard key={hero.id} {...hero} />
              )))
              : (<></>)
          }

        </div>
      </div>


    </>
  );
};
