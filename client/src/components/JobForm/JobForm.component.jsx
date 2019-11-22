import React, { useState } from 'react';
import { connect } from 'react-redux';

import './JobForm.styles.scss';
import { createJob } from '../../redux/jobs/job.actions';

const JobForm = ({ createJob }) => {
    const [userCredentials, setCredentials] = useState({
        title: '',
        company: '',
        location: '',
        aboutCompany: '',
        role: ''
    });

    const {
        title,
        company,
        location,
        aboutCompany,
        role
    } = userCredentials;
  
    const handleSubmit = async event => {
      event.preventDefault();
      
      createJob(userCredentials);
    };
  
    const handleChange = event => {
      const { value, name } = event.target;
  
      setCredentials({...userCredentials, [name]: value });

    };

    return (
        <form onSubmit={handleSubmit} className='form-container'>
            <div className='form-content'>
                <label>
                    <p>Title:</p>
                    <input 
                        type="text" 
                        name="title" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Company:</p>
                    <input 
                        type="text" 
                        name="company" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Location:</p>
                    <input 
                        type="text" 
                        name="location" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>About Company:</p>
                    <input 
                        type="text" 
                        name="aboutCompany" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Role:</p>
                    <input 
                        type="text" 
                        name="role" 
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>
                    Post Job!
                </button>
            </div>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    createJob : data => dispatch(createJob(data))
});

export default connect(null, mapDispatchToProps)(JobForm);