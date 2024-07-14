import React, {useState} from 'react';
import {FaUser, FaEnvelope, FaPhone} from 'react-icons/fa';
import  './UserForm.css';

const UserForm = () => {
    const [formData, setFormData] = useState({ name: '', email:'', phone:''});
    const handleChange = (e)=> {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handleSubmit = (e)=> {
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div className='user-form'>
    <h1>User Form</h1>
    <form onSubmit={handleSubmit}>
    <div className='form-group'>
    <FaUser />
    <input 
    type="text"
    name="name"
    placeholder="Name"
    value={formData.name}
    onChange={handleChange}
    required
    />
    </div>
    <div className='form-group'>
    <FaEnvelope />
    <input 
    type="email"
    name="email"
    placeholder="Email"
    value={formData.email}
    onChange={handleChange}
    required
    />
    </div>
    <div className='form-group'>
    <FaUser />
    <input 
    type="tel"
    name="phone"
    placeholder="Phone"
    value={formData.phone}
    onChange={handleChange}
    required
    />
    </div>
    <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default UserForm;
