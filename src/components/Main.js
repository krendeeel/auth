import React, { useEffect }  from 'react';
import { Redirect } from 'react-router';
import {useDispatch, useSelector} from 'react-redux'
import {checkedCookies, deleteCookies, me} from './store';
import {setAuth} from './actions/actions';
import { Preloader } from './preloader/Preloader';
import 'antd/dist/antd.css';

const WelcomePage = (props) => {
    return (
        <div className='main'>
            <div>Welcome, {props.user.firstName} {props.user.lastName}!</div>
            <button className="ant-btn ant-btn-primary" onClick={props.exit}>Exit</button>
        </div>
    )
}


const Main = () => {
    const user = useSelector(state => state.authReducer.user);
    const auth = useSelector(state => state.authReducer.auth);
    const error =  useSelector(state => state.authReducer.error);
    const dispatch = useDispatch()
    const exit = () => {
        deleteCookies();
        dispatch(setAuth(false));
    }
    useEffect(()=>{
        dispatch(checkedCookies());
        auth && dispatch(me());
    },[])
    
    return(
        <div>      
            {!auth &&  error && <Preloader/>}
            {user.firstName && <WelcomePage user={user} exit={exit}/>}
            {!auth && <Redirect to='/login'/>}
        </div>
    )
}

export default Main;