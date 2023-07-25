import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import { FunctionaddUser, addUser } from '../Redux/Action';
import { useDispatch } from 'react-redux';

const Create = () => {

  const [name,nameChange] = useState('');
  const [email,emailChange] = useState('');
  const [phone,phoneChange] = useState('');
  const [website,websiteChange] = useState('');
  let dispatch = useDispatch();
  let navigate = useNavigate();

  function handleSubmit(e){

    e.preventDefault();
     const userObj = {name,email,phone,website};
     dispatch(FunctionaddUser(userObj));
     navigate('/user')

  }

 
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center' >
    <div className='w-50 border bg-secondary text-white p-5'>
      <form onSubmit={handleSubmit}>
        <h5>Add New User</h5>
        {/* Name */}
        <div className="mt-2">
          <label htmlFor="name">Name:</label>
          <input type="text"name='name' className='form-control'value={name} onChange={e=>nameChange(e.target.value)} />
        </div>
        {/* Email */}
           <div className="mt-2">
          <label htmlFor="email">Email:</label>
          <input type="email"name='email' className='form-control'value={email}onChange={e=>emailChange(e.target.value)} />
        </div>
          {/* Phone */}
           <div className="mt-2">
          <label htmlFor="phone">Phone No:</label>
          <input type="text"name='phone' className='form-control' value={phone}onChange={e=>phoneChange(e.target.value)}/>
        </div>
        {/* Role */}
         <div className="mt-2">
          <label htmlFor="website">website:</label>
          <input type="text"name='website' className='form-control'value={website}onChange={e=>websiteChange(e.target.value)} />
        </div><br />
         <Link to={'/user'} className='btn btn-danger m-1'>Back</Link>
        <button className='btn btn-primary m-1' type='submit'>Submit</button>

      </form>
    </div>

    
  </div>)
}
 
export default Create;