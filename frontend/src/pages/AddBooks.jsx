import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddBooks() {
  const navigate = useNavigate();
  const [error,setError] =  useState("");
  const [msg,setMsg] =  useState("");

  const [data,setData] = useState([{title: "", author: "", image: "" ,price: ""}]);

  const change = (e) => {
    const {name, value} = e.target;
    setData({...data, [name]: value });
  };

  const submitHandle = async () => {
    try {
      const response = await axios.post("http://localhost:2000/api/books", data);  
      if (response.data) {
        setMsg(response.data.mesg)
      }
      setTimeout(()=> {
        navigate('/books');
      }, 3000)
    } catch (err) {
      setError(err);
    }
  };

  // console.log(data);
  
  return (
    <div className='bg-dark d-flex justify-content-center align-items-center text-center' style={{ minHeight: "91vh"}}>
      <div className="container">
  
       {error && <div className="alert alert-danger w-25 text-center m-auto" >  {error} </div>}
        { msg && <div className="alert alert-warning w-25 text-center m-auto" role="alert"> {msg} </div>}

        <div className="mb-3 mx-5 text-center">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Book Name:
          </label>
          <input  type="text"  className="form-control"
            placeholder="Enter Book Name" name='title'
            onChange={change} value={data.title}
          />
        </div>
        <div className="mb-3 mx-5 ">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Author Name:
          </label>
          <input  type="text"   className="form-control"
            placeholder="Enter Author Name" name='author' 
            onChange={change} value={data.author}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Book Image:
          </label>
          <input   type="text"   className="form-control"
            placeholder="Enter Book Image URL" name='image'
            onChange={change} value={data.image}
          />
        </div>
        <div className="mb-3 mx-5">
          <label htmlFor="exampleFormControlInput1" className="form-label text-white">
            Book Price:
          </label>
          <input  type="text" className="form-control"
            placeholder="Enter Book Price" name='price'
           onChange={change} value={data.price}
          />
        </div>

        <button  className="btn btn-outline-secondary my-3"
         onClick={submitHandle} >
          Submit
        </button>
      </div>
    </div>
  )
}

export default AddBooks;