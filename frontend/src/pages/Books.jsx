import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookSection from '../components/BookSection';
import Spinner from '../components/Spinner';

function Books() {
  const [data, setData] = useState([]);
  const [error,setError] =  useState("");
  const [loading, setLoading] = useState(true); // Initial loading state


  useEffect( () => {
    const fetchData = async() => {
      try{ 
        // const response =  await axios.get("http://localhost:4000/api/getbooks")
        const response =  await axios.get("https://fine-jade-indri-kilt.cyclic.app/api/getbooks")
        setData(response.data.books);
        // console.log(response.data.books);
      }catch(err){
        setError(`Something went wrong data not Fetched!`);
      }finally {
        // Set loading to false regardless of success or failure
        setLoading(false);
      }
    }
    fetchData();
  },[]);

  return (
    <div className='bg-dark p-5' >
      <div className='d-flex justify-content-center align-items-center py-3'>
        <h3 className='text-white'> Books Section </h3>
      </div>
      
      {loading ? (
        // Render spinner or loading indicator
        <Spinner />
      ) : (
        // Render your content when data is loaded
        <BookSection data={data} />
      )}

      {/* { data ? ( <BookSection data={data} /> ) : 
        (<h2 className='text-info py-3 fs-bold'> Loading... </h2>)
      } */}

      { error && <div className="alert alert-danger w-25 text-center m-auto"> {error} </div> }

    </div>
  )
}

export default Books