import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { auth } from '../_actions/user_action';
import { useNavigate } from 'react-router-dom';


export default function (SpecificComponet, option, adminRoute = null) {

    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지
    function AuthenticationCheck(){
        let navigate = useNavigate();
        const dispatch = useDispatch();

        useEffect(() => {

            dispatch(auth()).then(response => {
                if(!response.payload.isAuth) {
                    // 로그인 하지 않은 상태
                    if(option) {
                        navigate('/login')
                    }
                }else{
                    // 로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        navigate('/')
                    }else{
                        if(option === false) {
                            navigate('/')
                        }
                    }
                }
            })
        }, [])

        return(
            <SpecificComponet />
        )
    }
    return AuthenticationCheck
}