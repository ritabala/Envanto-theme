import * as actionTypes from './actiontypes';
import axios from '../../axios';


export const authStart=()=>{
    return{
        type: actionTypes.AUTH_START
    }
}

export const authSuccess=(token,auth)=>{
    return{
        type: actionTypes.AUTH_SUCCESS,
        idToken:token,
        isAuth:auth
    }
}

export const authFail=(err)=>{
    return{
        type: actionTypes.AUTH_FAIL,
        err:err
    }
}

export const auth=(userName, email, password)=>{
    return dispatch=>{
        // console.log('in auth ',userName)
        const userData = {
            name: userName,
            email: email,
            password:password
        }
        // console.log(email)
        let url = '/login';
        if(userName){
            url = '/register';
        }
        axios.post(url,userData)
        .then(res=>{
            console.log(res.data)
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('auth',res.data.auth)
            dispatch(authSuccess(res.data.token,res.data.auth))
        })
        .catch(err=>{
            // console.log(err.message)
            const error = err.response ? err.response.data.message : err.message
            dispatch(authFail(error))
            // dispatch(authFail(err.response.data.message))
        })
    }
}


export const logout=(token)=>{
    localStorage.removeItem('token')
    localStorage.removeItem('auth')
    return dispatch=>{
        axios.post('/logout',{
            headers: {"Authorization" : `Bearer ${token}`} })
        .then(res=>{
            dispatch (logOut_Reducer())
        })
        .catch(err=>{
            dispatch(authFail(err))
        })
    }
}

export const logOut_Reducer=()=>{
    return{
        type: actionTypes.LOG_OUT
    }
}

export const autoSignupOnRefresh = ()=>{
    return dispatch=>{
        const token=localStorage.getItem('token')
        const isAuth=localStorage.getItem('auth')

        if(!token || token==null){
            return;
        }
        else{
            // console.log('in auto signup: ' , isAuth)
        // dispatch(meFromToken(token))
        axios.get('/refresh_token',
                   { headers: {"Authorization" : `Bearer ${token}`} }
                 )
            .then((res) => {
                // console.log(res)
                if (!res.data.error) {
                    //store token 
                    localStorage.setItem('token', res.data.token);
                    dispatch(authSuccess(res.data.token,res.data.auth))
                } else {
                    //remove token from storage
                    localStorage.removeItem('token');
                    localStorage.removeItem('isAuth');
                    // dispatch(authFail(error.message))
                }
            });
    }}
}