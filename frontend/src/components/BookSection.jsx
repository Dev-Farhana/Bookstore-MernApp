import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function BookSection({data}) {
  const [error,setError] =  useState("");
  const [msg,setMsg] =  useState("");
  const [selectedId, setSelectedId] = useState(null);

//  console.log(data);
  
  const handleDelete = async (_id) => {
    try {
      const id = _id;
      setSelectedId(id);
      // Check if there's a valid ID
      if (!id) {
        console.log("id does not match");
        return;
      }
      const response = await axios.delete(`http://localhost:2000/api/deletebooks/${id}`);
      if (response.data && response.data.mesg) {
        setMsg(response.data.mesg);
        setTimeout(()=>{
          window.location.reload();
        },3000);
      }
      console.log(response.data);
    } catch (error) {
      setError(`Error Appeared!\n Something went Wrong`);
    }
  };

  return (
    <>
     {msg && <div className='alert alert-danger w-25 m-auto '> {msg} </div> }
     {error && (<div className="alert alert-danger w-25 text-center m-auto">    <pre>{error}</pre> </div>)}

      <div className='d-flex justify-content-center align-items-center flex-wrap'>      
       {data 
          &&  data.map((item,index) => ( 
          <div className="card" style={{ width: "14rem" }} key={index} >
            <div className="card-body">
              {/* <input type="hidden" value={selectedId(item.id) } onChange={(e) => setSelectedId(e.target.value)} /> */}
            <img src={item.image} className="card-img-top w-50 text-center" alt="imageBook" />
            </div>
            <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-dark-subtle"> <b> Title: </b> {item.title.slice(0,20)}... </li>
                <li className="list-group-item bg-danger-subtle"> <b> Author: </b> {item.author} </li>
                <li className="list-group-item text-success bg-success-subtle"> <b> Price: </b>{item.price} </li>
            </ul>
            <div className="card-body d-flex justify-content-center align-items-center">

              <Link className="btn text-primary bg-info-subtle mx-3"
                to={`/updateBook/${item._id}`} > Update </Link>
  
              <button
                className="btn text-danger bg-danger-subtle my-3"
                onClick={ () =>  handleDelete(item._id)}
              >
                Delete
              </button>

            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BookSection
