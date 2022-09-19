import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { startLogout } from '../../store/auth/thunks';

export const Navbar = () => {

    // const { user, logout } = useContext(AuthContext)


    const isActive = ({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch(startLogout());
    }


    return (
        <>
            {/* <nav className="navbar d-flex flex-row navbar-expand-sm navbar-dark bg-dark p-2">

                <Link
                    className="navbar-brand"
                    to="/"
                >
                    HeroesApp
                </Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">
                        <div className="dropdown cursorKap">
                            <button className="btn btn-secondary dropdown-toggle cursorKap" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Publisher
                            </button>
                            <ul className="dropdown-menu cursorKap" aria-labelledby="dropdownMenu2">
                                <li className="dropdown-item" ><NavLink to="/publisher/Marvel%20Comics" className="dropdown-item cursorKap"> Marvel Comics </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/DC%20Comics" className="dropdown-item cursorKap"> DC Comics </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/Dark%20Horse%20Comics" className="dropdown-item"> Dark Horse Comics </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/Star%20Trek" className="dropdown-item"> Star Trek </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/George%20Lucas" className="dropdown-item"> George Lucas </NavLink></li>
                            </ul>
                        </div>
                        <NavLink
                            className={isActive}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto"> */}
            {/* <span classname="nav-item nav-link text-primary">
                        {user?.username}
                    </span> */}
            {/* <button
                            className='btn nav-item nav-link cursorKap'
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav> */}


            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="p-2 mb-2 navbar-brand" href="#"><i className="bi bi-lightning-fill text-danger"></i>  Heroes App  <i className="bi bi-lightning-fill text-warning"></i></a>


                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse buttonpkw" id="navbarSupportedContent">

                        <div className="dropdown cursorKap me-3">
                            <button className="btn btn-secondary dropdown-toggle cursorKap" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                                Publisher
                            </button>
                            <ul className="dropdown-menu cursorKap" aria-labelledby="dropdownMenu2">
                                <li className="dropdown-item" ><NavLink to="/publisher/Marvel%20Comics" className="dropdown-item cursorKap"> Marvel Comics </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/DC%20Comics" className="dropdown-item cursorKap"> DC Comics </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/Dark%20Horse%20Comics" className="dropdown-item"> Dark Horse Comics </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/Star%20Trek" className="dropdown-item"> Star Trek </NavLink></li>
                                <li className="dropdown-item"><NavLink to="/publisher/George%20Lucas" className="dropdown-item"> George Lucas </NavLink></li>
                            </ul>
                        </div>

                        <NavLink
                            type='button'
                            className='btn btn-secondary'
                            // className={isActive}
                            to="/search"
                        >
                            Search   <i className="bi bi-fan"></i>
                        </NavLink>


                        {/* <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link"><i className="bi bi-house-fill"></i> Inicio <span className="sr-only">sandro</span></a>
                        </li>
                    </ul> */}
                        <ul className="navbar-nav ms-auto">
                            <div className="btn-group dropstart">
                                <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-person-circle"></i> User
                                </button>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#"><i className="bi bi-tools"></i> Preferences</a></li>
                                    <div className="dropdown-divider"></div>
                                    <li><button onClick={onLogout} className="dropdown-item"><i className="bi bi-box-arrow-right"></i> Exit</button></li>
                                </ul>
                            </div>
                        </ul>

                    </div>
                </div>
            </nav>

        </>
    )
}


