import * as types from "../constants";

// export const registerUser = (user) => {
//   return {
//     type: types.REGISTER_USER,
//     user,
//   };
// };

export const loginUser=(user)=>{
 return{
     type: types.LOGIN_USER,
     user
 }
}
