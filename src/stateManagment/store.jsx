import { createStore } from 'redux'
import { configureStore , createSlice } from '@reduxjs/toolkit';
// import reducers from './reducers'

const initialState = {
  sidebarShow: true,
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)

//جدول آگهی ها
// const store = createStore(reducers);

//login

// const userSlice = createSlice ({
//     name : "user",
//     initialState :{username :"" , password :""}
//     reducers: {
//         login :(state , action )=>{
//             state.username = action.payload.username
//             state.password = action.payload.password
//         }
//     }

// })
// export const {login} = userSlice.actions

// const store = configureStore({ reducer :{
//     user :userSlice.reducer
// }

// })
export default store;