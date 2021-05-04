import React  from 'react';
import { registerUserThunk } from './store';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import BookingForm from './form/BookingForm';
import s from './Registration.module.css';



const Registration = () => {
    const auth = useSelector(state => state.authReducer.auth);
    const dispatch = useDispatch();

    const  sent = (data) =>{
        dispatch(registerUserThunk(data));
    }

    return(
        <div className={s.registration}>
            {auth && <Redirect to='/login'/>}
            <div className={s.title}>Registration</div>
            <BookingForm sent={sent}/>
        </div>    
    )
}

export default Registration;