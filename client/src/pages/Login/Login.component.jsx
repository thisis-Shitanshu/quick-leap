import React, { useState } from 'react';
import { connect } from 'react-redux';

import './Login.styles.scss';
import { emailSignInStart } from '../../redux/user/user.actions';

const Login = ({ emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;
  
    const handleSubmit = async event => {
      event.preventDefault();
      
      emailSignInStart(email, password);
    };
  
    const handleChange = event => {
      const { value, name } = event.target;
  
      setCredentials({...userCredentials, [name]: value });
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className='form-content'>
                <label>
                    <p>Email:</p>
                    <input 
                        type="text" 
                        name="email" 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    <p>Password: </p>
                    <input 
                        type="password" 
                        name="password" 
                        onChange={handleChange}
                    />
                </label>
                <button type='submit'>
                    Log In
                </button>
            </div>
        </form>
    );
}

const mapDispatchToProps = dispatch => ({
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Login);