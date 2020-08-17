import * as types from '../constants';

const Login=(state=[],action)=>{
    const response= action.response;
    switch(action.type){
        case types.LOGIN_USER_SUCCESS:
            return{
                ...state,response
            }
            case types.LOGIN_USER_ERROR:
                return{
                    ...state,response
                }
    }
}
export default Login;