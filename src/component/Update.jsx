import { FunctionUpdateUser ,FetchUserObj} from "../Redux/Action";
import {useEffect, useState} from 'react';
import { useDispatch } from "react-redux";
import {Link, useNavigate, useParams} from 'react-router-dom';
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";




const Update = () => {
  
  const [id,idChange] = useState(0);
  const [name,nameChange] = useState(null);
  const [email,emailChange] = useState(null);
  const [phone,phoneChange] = useState(null);
  const [website,websiteChange] = useState(null);
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const {code} = useParams();

  const userObj = useSelector((state) => state.user.userobj);

  function handleSubmit(e){

    e.preventDefault();
     const userobj = {name,email,phone,website};
     dispatch(FunctionUpdateUser(userobj,id));
     navigate('/user')

  }

  useEffect(()=>{
   dispatch(FetchUserObj(code))
  },[])

  useEffect(()=>{
if(userObj){
  idChange(userObj.id)
  nameChange(userObj.name)
  emailChange(userObj.email)
  phoneChange(userObj.phone)
  websiteChange(userObj.website)

}
  },[userObj])

 
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
    <div className='w-50 border bg-secondary text-white p-5'>
      <form onSubmit={handleSubmit}>
        <h5>Update User</h5>
         {/* id */}
        <div className="mt-2">
          <label htmlFor="name">id:</label>
          <input type="text"name='id' className='form-control'value={id ||""} disabled />
        </div>
        {/* Name */}
        <div className="mt-2">
          <label htmlFor="name">Name:</label>
          <input type="text"name='name' className='form-control'value={name || ""} onChange={e=>nameChange(e.target.value)} />
        </div>
        {/* Email */}
           <div className="mt-2">
          <label htmlFor="email">Email:</label>
          <input type="email"name='email' className='form-control'value={email || ""}onChange={e=>emailChange(e.target.value)} />
        </div>
          {/* Phone */}
           <div className="mt-2">
          <label htmlFor="phone">Phone No:</label>
          <input type="text"name='phone' className='form-control' value={phone || ""}onChange={e=>phoneChange(e.target.value)}/>
        </div>
        {/* website */}
         <div className="mt-2">
          <label htmlFor="website">website:</label>
          <input type="text"name='website' className='form-control'value={website || ""}onChange={e=>websiteChange(e.target.value)} />
        </div><br />
         <Link to={'/user'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Submit</button>

      </form>
    </div>

    
  </div>)
}
 
export default Update;