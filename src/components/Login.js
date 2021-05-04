import React  from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { loginUserThunk } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import LoginForm from './form/LoginForm';
import s from './Login.module.css'

const Login = () => {

    const auth = useSelector(state => state.authReducer.auth);
    const dispatch = useDispatch()
    
    const enter = (data) => {
        dispatch(loginUserThunk(data)); 
    }
    return(
        <div className={s.login}>
            <div className={s.welcome}>Welcome</div>
            <LoginForm sent={enter}/>
            <Link className="ant-btn ant-btn-primary" to='/Registration'>Registration</Link>
            {auth && <Redirect to='/'/>}
            
        </div>
    )
}

export default Login;