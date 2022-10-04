import React from 'react'
import { Link, useLocation } from 'react-router-dom';


export const HeroCard = ({
    id,
    slug,
    name,
    alterego,
    publisher,
    appearance,
    imgurl,
    counter,

}) => {


    const locVal = useLocation()

    console.log('herocard location', locVal);


    return (
        <div className='col animate__animated animate__fadeIn'>
            <div className="card shadow">
                <div className="row no-glutters">
                    <div className="col-4">
                        <img src={imgurl} alt={name} className='card-img' />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{alterego}</p>

                            {/* <p className="card-text">
                                <small className='text-muted'>
                                    {name}
                                </small>
                            </p> */}

                            <Link to={`/hero/${id}`} state={counter}>
                                Powerstats
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
