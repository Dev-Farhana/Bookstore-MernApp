import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateBooks() {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const {id} = useParams();
  const navigate = useNavigate();

  const [error,setError] =  useState("");
  const [msg,setMsg] =  useState("");
  
  const handleSubmitUpdate = async () => {
    try{
      const response = await axios.put(`http://localhost:2000/api/updatebooks/${id}`, {title,author,price,image});
       setMsg(`Book Updated Successfully!`)
      setTimeout(() => {
        navigate("/books");
      }, 3000)
    }
    catch(err) {
      console.log(err)
      setError("Error during update");
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:2000/api/getbooks/${id}`);
        // console.log('Book data:', response);
        setAuthor(response.data.books.author);
        setImage(response.data.books.image);
        setTitle(response.data.books.title);
        setPrice(response.data.books.price);
      } catch (error) {
        console.error('Error fetching book data:', error);
      }
    };
    fetchData();
  }, [id]);
  
  
  return (
    <>
     <div className='bg-dark d-flex justify-content-center align-items-center' style={{ minHeight: "91vh"}}>
       <div className="container">  
          {error && <div className="alert alert-danger w-25 text-center m-auto" >  {error} </div>}
          { msg && <div className="alert alert-warning w-25 text-center m-auto" role="alert"> {msg} </div>}

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">  Book Name:  </label>
            <input  type="text"    className="form-control"
              placeholder="Enter Book Name" name='title'
             value={title} onChange={(e) => setTitle(e.target.value) }
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white">   Author Name:   </label>
            <input  type="text" className="form-control"
              placeholder="Enter Author Name" name='author' 
               value={author} onChange={(e) => setAuthor(e.target.value) }
            />
          </div>

          <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label text-white">  Book Image: </label>
              <input type="text" className="form-control"
                placeholder="Enter Book Image URL" name='image'
                value={image} onChange={(e) => setImage(e.target.value) }
              />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-white"> Book Price: </label>
            <input type="text"  className="form-control"
              placeholder="Enter Book Price" name='price'
             value={price} onChange={(e) => setPrice(e.target.value) }
            />
          </div>

          <button  className="btn btn-outline-secondary my-3"  onClick={handleSubmitUpdate}  >
            Submit Update
          </button>

        </div>
     </div>
    </>
  )
}

export default UpdateBooks



