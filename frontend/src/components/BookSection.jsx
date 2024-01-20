import React, { useState } from 'react';
import axios from 'axios';

function BookSection({data}) {
  const [error,setError] =  useState("");
  const [msg,setMsg] =  useState("");
  const [selectedId, setSelectedId] = useState(null);

//  console.log(data);
    const handleUpdate = async () => {
      try {
        const response = await axios.put("http://localhost:2000/api/updatebooks/:id")
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    const handleDelete = async (e) => {
      e.preventDefault();
      try {
        setSelectedId(item.id);
        if (!selectedId){
          console.log("id does not match");
          // return <h2> "id does not match" </h2>
        }
        const response = await axios.delete(`http://localhost:2000/api/deletebooks/${selectedId}`);    
        if (response.data && response.data.mesg) {
          setMsg(response.data.mesg);
          window.location.reload();
        }
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    };
    

  return (
    <>
    {msg && <div className='alert alert-danger w-50'> {msg} </div> }
      <div className='d-flex justify-content-center align-items-center flex-wrap'>
        {/* { msg ? (<div className='alert alert-danger'> {msg} </div>) : (<div className='alert alert-danger'> {error} </div>) } */}
        
          {data 
          &&  data.map((item,index) => ( 
          <div className="card" style={{ width: "14rem" }} key={index} >
              <div className="card-body">
                {/* <input type="hidden" value={selectedId(item.id) } onChange={(e) => setSelectedId(e.target.value)} /> */}
              <img src={item.image} className="card-img-top" alt="imageBook" />
              </div>
              <ul className="list-group list-group-flush ">
                  <li className="list-group-item bg-dark-subtle"> <b> Title: </b> {item.title.slice(0,20)}... </li>
                  <li className="list-group-item bg-danger-subtle"> <b> Author: </b> {item.author} </li>
                  <li className="list-group-item text-success bg-success-subtle"> <b> Price: </b>{item.price} </li>
              </ul>
              <div className="card-body d-flex justify-content-center align-items-center">

               <button className="btn text-primary bg-info-subtle mx-3" 
                onClick={handleUpdate}> 
                Update </button>
              


                <button
                  className="btn text-danger bg-danger-subtle my-3"
                  onClick={async () => {
                    try {
                      // Use the ID directly from the item
                      const id = item.id;
                      // Set the selected ID
                      setSelectedId(id);
                      // Check if there's a valid ID
                      if (!id) {
                        console.log("id does not match");
                        return;
                      }

                      const response = await axios.delete(`http://localhost:2000/api/deletebooks/${id}`);
                      if (response.data && response.data.mesg) {
                        setMsg(response.data.mesg);
                        window.location.reload();
                      }
                      console.log(response.data);
                    } catch (error) {
                      console.error(error);
                      setError(error);
                    }
                  }}
                >
                  Delete
                </button>

               
              {/* <button  className="btn text-danger bg-danger-subtle my-3" 
               onClick={ async() => {
                try {
                  setSelectedId(item.id);
                  if (!selectedId){ console.log("id does not match") }
                  const response = await axios.delete(`http://localhost:2000/api/deletebooks/${selectedId}`);    
                  if (response.data && response.data.mesg) {
                    setMsg(response.data.mesg);
                    window.location.reload();
                  }
                  console.log(response.data);
                } catch (error) {
                  console.error(error);
                  setError(error);
                }
               } } >
               Delete
              </button> */}


              </div>
          </div>

          ))}

      </div>
    </>
  )
}

export default BookSection
