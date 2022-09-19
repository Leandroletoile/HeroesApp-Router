import React from 'react'
import { useSelector } from 'react-redux'

export const ButtonsPagination = ({ increment, decrement, show, counter, publisher }) => {


  return (

    <>

      <div className="container mt-4 d-flex justify-content-center bgMove align-items-center">

        <div className="row d-flex justify-content-center align-items-center">

          <div className="col p-0  d-flex justify-content-center align-items-center">

            <button
              className='second'
              onClick={() => decrement()}>

              Prev
            </button>
          </div>

          <div className="col  d-flex justify-content-center align-items-center">
            <h1 className='text-center fuente' >
              <span className='borderBlack'>
                {publisher}
              </span> </h1>
          </div>

          <div className="col p-0  d-flex justify-content-center align-items-center">
            {
              show === true ?
                (

                  <button
                    className='second'
                    onClick={() => increment()}>Next</button>

                )
                : (<></>)
            }
          </div>

        </div>

      </div>


      <hr />


      <div className="col fuente d-flex justify-content-center">
        <h3 className='bgblack pb-2 pt-2 px-4'> {counter} </h3>
      </div>



      {/* <div className="container">
        <div className="row d-flex text-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <div className="col">
            <button
              className='second'
              onClick={() => decrement()}>Prev</button>
          </div>
          <div className="col fuente d-flex justify-content-center">
            <h3 className='bgblack pb-2 pt-2 px-4'> {counter} </h3>
          </div>
          {
            show === true ?
              (
                <div className="col">
                  <button
                    className='second'
                    onClick={() => increment()}>Next</button>
                </div>
              )
              : (<></>)
          }

        </div>

      </div> */}
    </>
  )
}
