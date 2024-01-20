import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookSection from '../components/BookSection';

function Books() {
  const [data, setData] = useState([]);
  const [error,setError] =  useState("");

  useEffect( () => {
    const fetchData = async() => {
      try{
        const response =  await axios.get("http://localhost:2000/api/getbooks")
        setData(response.data.books);
        // console.log(response.data.books);
      }catch(err){
        setError(err);
        //  console.log(err);
      }
    }
    fetchData();
  },[]);

  return (
    <div className='bg-dark' style={{height: "91vh"}}>
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h3 className='text-white'> Books Section </h3>
      </div>
      { error && <div className="alert alert-danger"> {error} </div> }
      { data ? ( <BookSection data={data} /> ) : 
        (<h2 className='text-white py-3 fs-bold'> Loading... </h2>)
      }
    </div>
  )
}

export default Books