// export const initialState = null;
  
// export const socketReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "USER_CONNECTED":
//         return { ...state, onlineUsers: [...state.onlineUsers, action.user] }; // Add connected user
//       case "USER_DISCONNECTED":
//         return { ...state, onlineUsers: state.onlineUsers.filter(user => user !== action.user) }; // Remove disconnected user
//       default:
//         return state;
//     }
//   };
  
//   export default socketReducer;