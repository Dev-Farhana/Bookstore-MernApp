import React from 'react';
import Boy from '../assets/boybg.png';

function Home() {
  return (
   <div className='container-fluid bg-dark text-white d-flex justify-content-center align-items-center'>
        <div className="row container">
            <div 
             className='col-lg-6 d-flex justify-content-center align-items-start flex-column'
             style={{height: "91.5vh"}} 
            >
             <h2 style={{fontSize: "100px", paddingTop: "100px"}}>  Book Store 
             <span className='text-info'>  For You ! </span>   </h2>
             <h2 className='text-secondary'>  Checkout the books from here  </h2>
                <button type="button" className="btn btn-outline-secondary my-3">
                  View Books
               </button>
            </div>
            <div 
             className='col-lg-6 d-flex justify-content-center align-items-end flex-column'
             style={{height: "91.5vh"}} 
            >
                <img src={Boy} className='img-fluid float-end' alt="bookImg"  />
            </div>
        </div>
   </div>
  )
}

export default Home;